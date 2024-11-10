import InputBoxUpper from "./input-box-upper";
import InputBoxLower from "./input-box-lower";
import {
  ArrowUpDown,
  Eraser,
  Eye,
  // ChevronRight,
  // ChevronLeft,
  // ArrowLeftRight,
} from "lucide-react";

const InputPage = ({
  updateUpper,
  inputValueUpper,
  toggleVisibility,
  currentCurrencyUpper,
  isVisible,
  handleCurrencyUpper,
  currentBalance,
  updateLower,
  inputValueLower,
  currentCurrencyLower,
  isVisibleLower,
  handleCurrencyLower,
  toggleVisibilityLower,
  handleFlip,
  clearInput,
  onClick,
  currentTheme,
}: any) => {
  return (
    <>
      <InputBoxUpper
        updateUpper={updateUpper}
        inputValueUpper={inputValueUpper}
        toggleVisibility={toggleVisibility}
        currentCurrencyUpper={currentCurrencyUpper}
        isVisible={isVisible}
        handleCurrencyUpper={handleCurrencyUpper}
        currentBalance={currentBalance}
        currentTheme={currentTheme}
      />
      <InputBoxLower
        updateLower={updateLower}
        inputValueLower={inputValueLower}
        currentCurrencyLower={currentCurrencyLower}
        isVisibleLower={isVisibleLower}
        handleCurrencyLower={handleCurrencyLower}
        toggleVisibilityLower={toggleVisibilityLower}
        isVisible={isVisible}
        currentTheme={currentTheme}
      />

      <hr className="border-accent w-full my-4" />

      <div className="py-4 flex flex-col sm:flex-row justify-between w-full max-w-md gap-2">
        <button
          className="flex justify-center items-center bg-blueBox text-lg font-bold text-white px-4 py-6 rounded-2xl w-full"
          onClick={handleFlip}
        >
          <ArrowUpDown size={33} className="mr-1" /> Flip
        </button>
        <button
          className="flex justify-center items-center bg-redBox text-lg font-bold text-white px-4 py-6 rounded-2xl w-full"
          onClick={clearInput}
        >
          <Eraser size={33} className="mr-1" />
          Clear
        </button>
      </div>
      <hr className="border-accent w-full my-3" />
      <button
        onClick={onClick}
        className={`${
          currentTheme ? "bg-white text-black" : "bg-primaryDark text-white"
        }  flex justify-center items-center  text-2xl border border-accent font-bold text-black px-4 py-6 rounded-2xl w-full m-2`}
      >
        <Eye size={33} className="mr-1" />
        Preview
      </button>
    </>
  );
};

export default InputPage;
