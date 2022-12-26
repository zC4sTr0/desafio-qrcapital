import React from "react";

const Dashboard = () => {
  return (
    <div class="flex flex-col items-center">
      <div class="w-full md:w-1/2 flex flex-col items-center h-64">
        <div class="w-full px-4">
          <form class="flex flex-col items-center relative my-10">
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border hover:shadow-xl border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              ></input>
              <button
                type="button"
                class="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>

              <div class="absolute shadow-xl bg-white top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
                {/* pra cada um, vai ter um desse abaixo */}
                <div class="flex flex-col w-full">
                  <div class="cursor-pointer w-full border-gray-100 rounded-b hover:bg-gray-200">
                    <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-gray-200">
                      <div class="w-6 flex flex-col items-center">
                        <div class="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                          <img
                            class="rounded-full"
                            alt="A"
                            src="https://randomuser.me/api/portraits/men/85.jpg"
                          ></img>
                        </div>
                      </div>
                      <div class="w-full items-center flex">
                        <div class="mx-2 -mt-1  ">
                          Eric Dripper
                          <div class="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                            asddsa
                          </div>
                        </div>
                        <div class="w-1/2 flex">
                          <div class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
                            <div class="text-xs font-normal leading-none max-w-full flex-initial">
                              Already tracked
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col w-full">
                  <div class="cursor-pointer w-full border-gray-100 rounded-b hover:bg-gray-200">
                    <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-gray-200">
                      <div class="w-6 flex flex-col items-center">
                        <div class="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                          <img
                            class="rounded-full"
                            alt="A"
                            src="https://randomuser.me/api/portraits/men/85.jpg"
                          ></img>
                        </div>
                      </div>
                      <div class="w-full items-center flex">
                        <div class="mx-2 -mt-1  ">
                          Eric Dripper
                          <div class="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                            asddsa
                          </div>
                        </div>
                        <div class="w-1/2 flex">
                          <div class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
                            <div class="text-xs font-normal leading-none max-w-full flex-initial">
                              Already tracked
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
