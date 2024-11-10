import DetailedBar from "./detailed-bar";
import Arrow from "../assets/arrow.png";

export default function InputBox({
  updateUpper,
  inputValueUpper,
  toggleVisibility,
  currentCurrencyUpper,
  isVisible,
  handleCurrencyUpper,
  currentBalance,
  currentTheme,
}: any) {
  return (
    <>
      <div
        className={`w-full max-w-md ${
          currentTheme ? "bg-secondaryDark " : "bg-secondaryLight "
        } rounded-2xl py-6 px-3 text-lg border border-accent m-1 `}
      >
        <p className=" mx-3 font-bold">
          Swap
          {currentBalance < inputValueUpper ? (
            <span className="text-red-400">- Insufficent Balance</span>
          ) : null}
        </p>
        <div className="flex flex-col sm:flex-row justify-between my-4">
          <input
            type="number"
            className={`w-full p-2 text-4xl bg-transparent  border-accent rounded-md transition duration-200 ease-in-out focus:outline-none focus:border-accent   ${
              currentTheme ? "hover:bg-accentDark " : "hover:bg-accentLight "
            }`}
            placeholder="0.0000"
            onChange={updateUpper}
            value={inputValueUpper}
          />
          <div>
            <div
              className={`mt-2 px-3 py-2 mx-2  rounded-full flex justify-between cursor-pointer ${
                currentTheme ? "bg-accentDark " : "bg-accentLight "
              }`}
              onClick={toggleVisibility}
            >
              <div className="p-2 flex justify-center items-center w-14 h-14">
                <img
                  src={currentCurrencyUpper.image}
                  className="object-cover"
                  alt="Bitcoin"
                />
              </div>
              <p className="flex justify-center items-center font-bold text-xl">
                {currentCurrencyUpper.name}
              </p>
              <div className="p-2 flex justify-center items-center w-14 h-14">
                <img
                  src={Arrow}
                  className={`object-cover text-blue-500 ml-2 sm:w-30 sm:h-50 transition-transform duration-200 ${
                    isVisible ? "rotate-180" : "rotate-0"
                  }`}
                  alt="arrow"
                />
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isVisible ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {isVisible && (
                <DetailedBar
                  onclick={handleCurrencyUpper}
                  currentTheme={currentTheme}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
