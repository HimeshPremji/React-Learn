import React, { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "../../hooks/useCurrencyInfo";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // useEffect(() => {}, [from, to]);

  // currencyInfo is a custom hook

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  // currencyInfo is an object with
  // currencyInfo = {"1inch": 4.36461937, "aave": 0.0050860038, "ada": 1.2290412}
  // to is the Index of currencyInfo object
  // rn we have pkr inside [to], so we will have the conversion of usd to pkr
  // for example:
  // amount = 1 , currencyInfo[to] = usd.
  // amount * currencyInfo = value multiplied by set currency.
  //  1 USD * PKR currency = 280.33580183
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="flex h-[94.3vh] items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 to-black">
      <div className="border-gray-60 mx-auto w-full max-w-md rounded-lg border bg-white/30 p-5 backdrop-blur-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="mb-1 w-full">
            <InputBox
              className="text-black"
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
              amountDisable
            />
          </div>
          <div className="relative h-0.5 w-full">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-white bg-blue-600 px-2 py-0.5 text-white"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <div className="mt-1 mb-4 w-full">
            <InputBox
              className="text-black"
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CurrencyConverter;
