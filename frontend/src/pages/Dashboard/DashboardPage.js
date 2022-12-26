import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import Dashboard from "../../components/Dashboard";
import cryptoCompareAPI from "../../api/cryptoCompareAPI";

//create useEffectHook to fetch JSON from getRequestFullCoinInfoList function API only once when the page is loaded and store it in const variable

const DashboardPage = () => {
  const [search, setSearch] = useState("");
  const [coinInfoList, setCoinInfoList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await cryptoCompareAPI.getRequestFullCoinInfoList();
      var arrayCoinsToSort = [];
      for (const [key, value] of Object.entries(response.data?.Data)) {
        arrayCoinsToSort.push(value);
      }
      let arrayCoinsSorted = arrayCoinsToSort.sort((a, b) => {
        return a.SortOrder > b.SortOrder
          ? 1
          : a.SortOrder < b.SortOrder
          ? -1
          : 0;
      });
      //filter remove all coins with IsTrading=false
      setCoinInfoList(arrayCoinsSorted.filter((coin) => coin.IsTrading));
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex 2xl:w-11/12  flex-col items-center">
        <div className="w-full px-4">
          <SearchBar
            placeholder={"Search for coins"}
            suggestionsJSON={coinInfoList}
          />
        </div>
      </div>
      <div className="w-11/12 2xl:w-3/6 xl:w-4/6 my-16 h-full md:ml-32 md:mr-32 sm:ml-16 sm:mr-16 ">
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
