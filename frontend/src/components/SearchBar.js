import { useState, useEffect } from "react";
import CloseIcon from "./Icons/CloseIcon";
import SearchIcon from "./Icons/SearchIcon";

const SearchBar = ({ json, trackedList, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmitSearchTerm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        className="flex flex-col items-center relative my-10"
        onSubmit={onSubmitSearchTerm}
      >
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border hover:shadow-xl border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder={placeholder}
            onChange={onSearchTermChange}
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

          <div className="absolute shadow-xl bg-white top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
            <div className="flex flex-col w-full">
              <div className="cursor-pointer w-full border-gray-100 rounded-b hover:bg-gray-200">
                <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-gray-200">
                  <div className="w-6 flex flex-col items-center">
                    <div className="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                      <img
                        className="rounded-full"
                        alt="A"
                        src="https://randomuser.me/api/portraits/men/85.jpg"
                      ></img>
                    </div>
                  </div>
                  <div className="w-full items-center flex">
                    <div className="mx-2 -mt-1  ">
                      adsadsdsa
                      <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                        adsd
                      </div>
                    </div>
                    <div className="w-1/2 flex">
                      <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
                        <div className="text-xs font-normal leading-none max-w-full flex-initial">
                          asdads
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
