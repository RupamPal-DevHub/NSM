import DetailedBar from "./detailed-bar";
import Arrow from "../assets/arrow.png";

export default function InputBoxLower({
  updateLower,
  inputValueLower,
  currentCurrencyLower,
  isVisibleLower,
  handleCurrencyLower,
  toggleVisibilityLower,
  isVisible,
  currentTheme,
}: any) {
  return (
    <>
      <div
        className={`w-full max-w-md ${
          currentTheme ? "bg-secondaryDark " : "bg-secondaryLight "
        } rounded-2xl py-6 px-3 text-lg border border-accent m-1 `}
      >
        <p className="mx-3 font-bold">Into</p>
        <div className="flex flex-col sm:flex-row justify-between my-4">
          <input
            type="number"
            className={`w-full p-2 text-4xl bg-transparent  border-accent rounded-md transition duration-200 ease-in-out focus:outline-none focus:border-accent   ${
              currentTheme ? "hover:bg-accentDark " : "hover:bg-accentLight "
            }`}
            placeholder="0.0000"
            onChange={updateLower}
            value={inputValueLower}
          />
          <div>
            <div
              className={`mt-2 px-3 py-2 mx-2  rounded-full flex justify-between cursor-pointer ${
                currentTheme ? "bg-accentDark " : "bg-accentLight "
              }`}
              onClick={toggleVisibilityLower}
            >
              <div className="p-2 flex justify-center items-center w-14 h-14">
                <img
                  src={currentCurrencyLower.image}
                  className="object-cover"
                  alt="Bitcoin"
                />
              </div>
              <p className="flex justify-center items-center font-bold text-xl">
                {currentCurrencyLower.name}
              </p>
              <div className="p-2 flex justify-center items-center w-14 h-14">
                <img
                  src={Arrow}
                  className={`object-cover text-blue-500 ml-2 sm:w-30 sm:h-50 transition-transform duration-200 ${
                    isVisibleLower ? "rotate-180" : "rotate-0"
                  } ${isVisible ? "hidden" : null}`}
                  alt="arrow"
                />
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isVisibleLower ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {isVisibleLower && <DetailedBar onclick={handleCurrencyLower} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
