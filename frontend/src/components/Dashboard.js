import { useState, useEffect } from "react";
import CoinCard from "./CoinCard";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-auto-fit gap-8 ">
        <CoinCard />
      </div>
    </>
  );
};

export default Dashboard;
