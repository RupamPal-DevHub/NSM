import { ChevronRight, ChevronLeft, ArrowLeftRight } from "lucide-react";

const PreviewPage = ({
  currentCurrencyUpper,
  currentCurrencyLower,
  inputValueUpper,
  inputValueLower,
  currentTheme,
  onClick,
}: any) => {
  return (
    <>
      <div
        className={`w-full max-w-md ${
          currentTheme ? "bg-secondaryDark " : "bg-secondaryLight "
        } rounded-2xl py-6 px-3 text-lg border border-accent m-1`}
      >
        <div className=" w-full flex flex-col sm:flex-row justify-between items-center">
          <div
            className={`p-14 w-full ${
              currentTheme ? "bg-accentDark " : "bg-accentLight "
            } rounded-3xl flex flex-col items-center`}
          >
            <img
              src={currentCurrencyUpper.image}
              className="object-cover"
              alt="Bitcoin"
              width={80}
            />
            <p className="text-center font-bold max-w-24 flex items-center justify-center mt-3">
              <span className="w-[ch-10] overflow-hidden truncate">
                {inputValueUpper}
              </span>
              {currentCurrencyUpper.name}
            </p>
          </div>
          <ChevronRight size={50} className="rotate-90 sm:rotate-0" />
          <div className="p-14 w-full  bg-green-400 bg-opacity-30 rounded-3xl flex flex-col items-center">
            <img
              src={currentCurrencyLower.image}
              className="object-cover"
              alt="Bitcoin"
              width={80}
            />
            <p className="text-center font-bold max-w-24 flex items-center justify-center mt-3">
              <span className=" overflow-hidden truncate">
                {inputValueLower}
              </span>
              {currentCurrencyLower.name}
            </p>
          </div>
        </div>
        <hr className="border-accent w-full my-10" />
        <div className="text-md">
          <div className=" flex justify-between font-bold  px-6 py-4">
            <p className="text-gray-500">Fees</p>
            <p>0 BTC</p>
          </div>
          <div className=" flex justify-between font-bold  px-6 py-4">
            <p className="text-gray-500">Price Difference</p>
            <p>-2.07%</p>
          </div>
          <div className=" flex justify-between font-bold  px-6 py-4">
            <p className="text-gray-500">Exchange rate</p>
            <p>49,278.10 BTC/INR</p>
          </div>
        </div>
      </div>
      <hr className="border-accent w-full my-4" />
      <div className="py-4 flex flex-col sm:flex-row justify-between w-full max-w-md gap-2">
        <button
          onClick={onClick}
          className="flex justify-center items-center bg-redBox text-2xl font-bold text-white px-4 py-6 rounded-2xl w-full sm:w-[60%]"
        >
          <ChevronLeft size={33} />
          Cancel
        </button>
        <button className="flex justify-center items-center bg-blueBox text-2xl font-bold text-white px-4 py-6 rounded-2xl w-full">
          <ArrowLeftRight size={33} /> Swap
        </button>
      </div>
    </>
  );
};

export default PreviewPage;
