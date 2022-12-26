import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import Dashboard from "../../components/Dashboard";

const DashboardPage = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex 2xl:w-11/12  flex-col items-center">
        <div className="w-full px-4">
          <SearchBar placeholder={"Search for coins"} />
        </div>
      </div>
      <div className="w-11/12 2xl:w-3/6 xl:w-4/6 my-16 h-full md:ml-32 md:mr-32 sm:ml-16 sm:mr-16 ">
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
