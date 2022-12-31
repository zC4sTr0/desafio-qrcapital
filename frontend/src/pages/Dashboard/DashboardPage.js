import { useState, useEffect, useContext } from "react";
import SearchBar from "../../components/SearchBar";
import Dashboard from "../../components/Dashboard";
import { cryptoCompareAPI } from "../../api/cryptoCompareAPI";
import { postUserCoinList } from "../../api/user";
import UserCoinListContext from "../../contexts/userCoinListContext";
import AuthContext from "../../contexts/authContext";

//create useEffectHook to fetch JSON from getRequestFullCoinInfoList function API only once when the page is loaded and store it in const variable

const DashboardPage = () => {
  const { loggedUsername } = useContext(AuthContext);
  const { userCoinList, setUserCoinList } = useContext(UserCoinListContext);
  const [coinInfoList, setCoinInfoList] = useState(null);

  useEffect(() => {
    const fetchCoinListData = async () => {
      const response = await cryptoCompareAPI.getRequestFullCoinInfoList();
      var arrayCoinsToSort = [];
      for (const [key, value] of Object.entries(response.data?.Data)) {
        arrayCoinsToSort.push(value);
      }

      //filter remove all coins with IsTrading=false
      setCoinInfoList(arrayCoinsToSort.filter((coin) => coin.IsTrading));
      const responseUserCoinList = await postUserCoinList({
        username: loggedUsername,
      });

      setUserCoinList(responseUserCoinList.data);
    };

    fetchCoinListData();

    const interval = setInterval(async () => {
      const responseUserCoinList = await postUserCoinList({
        username: loggedUsername,
      });
      setUserCoinList(responseUserCoinList.data);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const onNewCoinAddedCallback = (coins) => {
    setUserCoinList(coins);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex 2xl:w-11/12  flex-col items-center">
        <div className="w-full px-4">
          <SearchBar
            placeholder={"Search for coins"}
            suggestionsJSON={coinInfoList}
            onNewCoinCallback={onNewCoinAddedCallback}
            trackedList={userCoinList}
          />
        </div>
      </div>
      <div className="w-11/12 2xl:w-3/6 xl:w-4/6 my-16 h-full md:ml-32 md:mr-32 sm:ml-16 sm:mr-16 ">
        <Dashboard userCoinList={userCoinList} allCoinsInfo={coinInfoList} />
      </div>
    </div>
  );
};

export default DashboardPage;
