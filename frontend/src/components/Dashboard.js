import { useState, useEffect } from "react";
import CoinCard from "./CoinCard";

const Dashboard = ({ allCoinsInfo, userCoinList }) => {
  const renderCoinCards = () => {
    if (userCoinList) {
      if (!Array.isArray(userCoinList)) {
        console.log("userCoinList is not an array");
        console.log(userCoinList);
        return;
      }
      return userCoinList.map((coin) => {
        var completeInfo = allCoinsInfo?.find((coinInfo) => {
          return coinInfo.Id == coin.coinId;
        });
        if (coin) {
          return (
            <CoinCard
              id={coin.coinId}
              imageUrl={completeInfo.ImageUrl}
              symbol={completeInfo.Symbol}
              price={coin.price}
              price24Hours={coin.price24Hours}
              name={completeInfo.Name}
            />
          );
        }
      });
    }
  };

  return (
    <>
      <div className="grid grid-cols-auto-fit gap-8 ">{renderCoinCards()}</div>
    </>
  );
};

export default Dashboard;
