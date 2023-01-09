import { useState, useContext } from "react";
import CloseIcon from "./Icons/CloseIcon";
import SearchIcon from "./Icons/SearchIcon";
import { addUserCoin } from "../api/user";

const SearchBar = ({
  suggestionsJSON,
  trackedList,
  placeholder,
  onNewCoinCallback,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  var maxSuggestions = 6;
  const onSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const checkCoinIsTracked = (coin) => {
    return trackedList?.some((trackedCoin) => trackedCoin.coinId == coin.Id);
  };

  const onSubmitSearchTerm = (e) => {
    e.preventDefault();
  };

  const onClickCoin = async (coin) => {
    if (checkCoinIsTracked(coin)) {
      return;
    }
    setSearchTerm("");
    var result = await addUserCoin({
      id: coin.Id,
      symbol: coin.Symbol,
    });
    if (result) {
      onNewCoinCallback(result.data);
    }
  };

  const renderTrackedIcon = (coin) => {
    //check if any coin in trackedList has the same Id as the coin passed as parameter
    if (checkCoinIsTracked(coin)) {
      return (
        <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-green-200 border border-green-500 ">
          <div className="text-xs font-normal leading-none max-w-full flex-initial">
            already on list
          </div>
        </div>
      );
    }
  };

  const renderSuggestions = () => {
    let arraySuggestedCoin = [];
    var suggestions = [];
    if (searchTerm.length > 0 && suggestionsJSON) {
      arraySuggestedCoin = suggestionsJSON.filter((coin) => {
        return (
          (coin.FullName.toLowerCase().includes(searchTerm.toLowerCase()) &&
            coin.FullName.toLowerCase().indexOf(searchTerm.toLowerCase()) ===
              0) ||
          (coin.Symbol.includes(searchTerm) &&
            coin.Symbol.indexOf(searchTerm) === 0)
        );
      });

      var finalResult = arraySuggestedCoin.sort(function (a, b) {
        return (
          a.FullName.length - b.FullName.length || a.FullName.localeCompare(b)
        );
      });

      finalResult.every((coin) => {
        if (maxSuggestions > 0) {
          maxSuggestions--;
          suggestions.push(
            <div
              className="flex flex-col w-full"
              key={coin.Id}
              onClick={async () => await onClickCoin(coin)}
            >
              <div className="cursor-pointer w-full border-gray-100 rounded-b hover:bg-gray-200">
                <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-gray-200">
                  <div className="w-10 flex flex-col items-center">
                    <div className="flex relative w-5 h-5 bg-transparent justify-center items-center m-1 mr-2 w-10/12 h-10/12 mt-1 rounded-full ">
                      <img
                        className="rounded-full"
                        alt="A"
                        src={"http://www.cryptocompare.com" + coin.ImageUrl}
                      ></img>
                    </div>
                  </div>
                  <div className="w-full items-center flex">
                    <div className="mx-2 -mt-1  ">
                      {coin.FullName}
                      <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                        {coin.Symbol}
                      </div>
                    </div>
                    <div className="w-1/2 flex">{renderTrackedIcon(coin)}</div>
                  </div>
                </div>
              </div>
            </div>
          );
          return true;
        } else {
          return false;
        }
      });

      return suggestions;
    }
  };

  return (
    <>
      <form
        className="flex flex-col items-center relative my-10"
        onSubmit={onSubmitSearchTerm}
      >
        <div className="relative w-full 2xl:w-6/12 xl:w-8/12">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border hover:shadow-xl border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder={placeholder}
            onChange={onSearchTermChange}
            autoComplete="off"
            value={searchTerm}
            required
          ></input>
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            onClick={() => setSearchTerm("")}
          >
            {searchTerm.length > 0 && <CloseIcon />}
          </button>

          <div className="absolute shadow-xl bg-white top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto ">
            {renderSuggestions()}
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
