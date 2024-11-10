import { useState } from "react";
import Bitcoin from "./assets/btc.png";
import Rupee from "./assets/inr.png";

import InputPage from "./components/input-page";
import PreviewPage from "./components/preview-page";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleLower, setIsVisibleLower] = useState(false);
  const [currentCurrencyUpper, setCurrentCurrencyUpper] = useState({
    name: "BTC",
    image: Bitcoin,
  });
  const [currentCurrencyLower, setCurrentCurrencyLower] = useState({
    name: "INR",
    image: Rupee,
  });
  const [inputValueLower, setInputValueLower] = useState<string | number>("");
  const [inputValueUpper, setInputValueUpper] = useState<string | number>("");

  const [togglePreview, setTogglePreview] = useState(true);

  const [currentTheme, setCurrentTheme] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
    if (isVisibleLower) setIsVisibleLower(false);
  };

  const toggleVisibilityLower = () => {
    setIsVisibleLower((prev) => !prev);
    if (isVisible) setIsVisible(false);
  };

  function handleCurrencyUpper(data: any) {
    setCurrentCurrencyUpper(data);
    setIsVisible(false);
  }

  function handleCurrencyLower(data: any) {
    setCurrentCurrencyLower(data);
    setIsVisibleLower(false);
  }

  async function updateUpper(e: any) {
    setInputValueUpper(e.target.value);
    try {
      let response = await fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${currentCurrencyUpper.name}&tsyms=${currentCurrencyLower.name}`
      );
      let data = await response.json();
      let res: number = Number(Object.values(data)[0] as number);
      setInputValueLower(res * Number(e.target.value));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function updateLower(e: any) {
    setInputValueLower(e.target.value);
    try {
      let response = await fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${currentCurrencyLower.name}&tsyms=${currentCurrencyUpper.name}`
      );
      let data = await response.json();
      let res: number = Number(Object.values(data)[0] as number);
      setInputValueUpper(res * Number(e.target.value));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function clearInput() {
    setInputValueLower("");
    setInputValueUpper("");
  }

  function handleFlip() {
    setCurrentCurrencyLower(currentCurrencyUpper);
    setCurrentCurrencyUpper(currentCurrencyLower);
    setInputValueUpper(inputValueLower);
    setInputValueLower(inputValueUpper);
  }

  function handleTogglePreview() {
    setTogglePreview(!togglePreview);
  }

  function toggleTheme() {
    setCurrentTheme(!currentTheme);
  }

  let currentBalance = 5;

  return (
    <>
      <button
        onClick={toggleTheme}
        className="text-white border bg-blueBox rounded-full mt-3 p-6"
      >
        Switch
      </button>
      <div
        className={`flex flex-col items-center p-8 ${
          currentTheme
            ? "bg-primaryDark text-white"
            : "bg-primaryLight text-black"
        } rounded-3xl m-3 border border-gray-900 `}
      >
        {togglePreview ? (
          <InputPage
            updateUpper={updateUpper}
            inputValueUpper={inputValueUpper}
            toggleVisibility={toggleVisibility}
            currentCurrencyUpper={currentCurrencyUpper}
            isVisible={isVisible}
            handleCurrencyUpper={handleCurrencyUpper}
            currentBalance={currentBalance}
            updateLower={updateLower}
            inputValueLower={inputValueLower}
            currentCurrencyLower={currentCurrencyLower}
            isVisibleLower={isVisibleLower}
            handleCurrencyLower={handleCurrencyLower}
            toggleVisibilityLower={toggleVisibilityLower}
            handleFlip={handleFlip}
            handleInput={clearInput}
            onClick={handleTogglePreview}
            clearInput={clearInput}
            currentTheme={currentTheme}
          />
        ) : (
          <PreviewPage
            currentCurrencyUpper={currentCurrencyUpper}
            currentCurrencyLower={currentCurrencyLower}
            inputValueUpper={inputValueUpper}
            inputValueLower={inputValueLower}
            onClick={handleTogglePreview}
            currentTheme={currentTheme}
          />
        )}
      </div>
    </>
  );
}
