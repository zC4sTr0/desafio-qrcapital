import { useContext } from "react";
import TrashButton from "./TrashButton";
import UserCoinListContext from "../contexts/userCoinListContext";
import AuthContext from "../contexts/authContext";
import { deleteUserCoin } from "../api/user";

const CoinCard = ({ id, imageUrl, symbol, price, name, price24Hours }) => {
  const { setUserCoinList } = useContext(UserCoinListContext);

  function calculatePercentualChange(priceToday, priceYesterday) {
    if (priceYesterday === 0) return 0;
    var percentualChange =
      ((priceToday - priceYesterday) / priceYesterday) * 100;
    return percentualChange;
  }

  const renderPrice = () => {
    if (price > 0.01) {
      return "$ " + price.toFixed(2);
    }
    return "$ " + price.toFixed(8);
  };

  const handleDeleteCoinRequest = async () => {
    try {
      var result_coinDeleted = await deleteUserCoin({
        id: id,
        symbol: symbol,
      });
      if (result_coinDeleted) {
        setUserCoinList(result_coinDeleted.data);
      }
    } catch (error) {
      return error;
    }
  };

  const renderVariationPercentage = () => {
    var isVariationPositive = price > price24Hours;
    var percentageVariation24Hours = calculatePercentualChange(
      price,
      price24Hours
    );

    return (
      <span
        className={`font-bold ${
          isVariationPositive ? "text-green-500" : "text-red-500"
        }`}
      >
        {percentageVariation24Hours.toFixed(2) + "%"}
      </span>
    );
  };
  return (
    <>
      <div className="bg-white rounded-3xl border shadow-xl p-8 ">
        <div className="flex justify-between items-center mb-4">
          <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 rounded-full">
            <img
              className="rounded-full"
              alt="A"
              src={"http://www.cryptocompare.com" + imageUrl}
            ></img>
          </button>
          <div>
            {renderVariationPercentage()}
            <br />
            <span className="font-medium text-xs text-gray-500 flex justify-end">
              in last 24 Hours
            </span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sm text-gray-400">{name}</h3>
          <h1 className="font-semibold text-xl text-gray-700">
            {renderPrice()}
          </h1>
          <TrashButton onDeleteButtonClick={() => handleDeleteCoinRequest()} />
        </div>
      </div>
    </>
  );
};

export default CoinCard;
