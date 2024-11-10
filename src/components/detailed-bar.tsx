import { useState } from "react";
import Bitcoin from "../assets/btc.png";
import Ethereum from "../assets/eth.png";
import Litecoin from "../assets/ltc.png";
import Dogecoin from "../assets/doge.png";
import Rupee from "../assets/inr.png";
import Euro from "../assets/euro.png";
import Dollar from "../assets/usd.png";
import Pound from "../assets/pound.png";

export default function DetailedBar({ onclick, currentTheme }: any) {
  const fiatCurrency = [
    { name: "INR", image: Rupee },
    { name: "EUR", image: Euro },
    { name: "USD", image: Dollar },
    { name: "LB", image: Pound },
  ];

  const cryptoCurrency = [
    { name: "BTC", image: Bitcoin },
    { name: "ETH", image: Ethereum },
    { name: "LTC", image: Litecoin },
    { name: "DOGE", image: Dogecoin },
  ];

  const [currentTab, setCurrentTab] = useState("All");

  const renderCurrencyList = (currencyArray: any) => {
    return currencyArray.map((currency: any, index: number) => (
      <div
        key={index}
        className="border-2 border-accent rounded-lg w-full p-6 my-2 flex"
        onClick={() => onclick(currency)}
      >
        <div className="px-2">
          {/* <Image src={currency.image} height={30} width={30} alt={`${currency.name} logo`} /> */}
          <img
            src={currency.image}
            alt={`${currency.name} logo`}
            height="30"
            width="30"
          />
        </div>
        <p className="mx-2 font-medium">{currency.name}</p>
      </div>
    ));
  };

  return (
    <div
      className={`flex flex-col items-center p-6 ${
        currentTheme ? "bg-primaryDark " : "bg-primaryLight text-black"
      } rounded-2xl absolute mt-2 border border-accent`}
    >
      <div className="flex justify-around w-full">
        {["All", "Fiat", "Crypto"].map((tab) => (
          <div
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`p-6 font-semibold cursor-pointer relative 
              after:absolute after:bg-blue-500 after:h-1 
              after:left-0 after:bottom-0 after:transition-all 
              after:duration-300 ${
                currentTab === tab ? "after:w-full" : "after:w-0"
              }`}
          >
            {tab}
          </div>
        ))}
      </div>
      <hr className="border-accent w-full" />

      <div className="my-4 w-full overflow-auto h-60 no-scrollbar">
        {currentTab === "All" &&
          renderCurrencyList([...cryptoCurrency, ...fiatCurrency])}
        {currentTab === "Fiat" && renderCurrencyList(fiatCurrency)}
        {currentTab === "Crypto" && renderCurrencyList(cryptoCurrency)}
      </div>
    </div>
  );
}
