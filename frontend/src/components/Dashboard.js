import { useState, useEffect } from "react";
import CoinCard from "./CoinCard";

const Dashboard = () => {
  return (
    <>
      <div class="grid grid-cols-auto-fit gap-8 ">
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
      </div>
    </>
  );
};

export default Dashboard;
