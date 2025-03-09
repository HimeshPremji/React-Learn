import React, { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [fadeBox, setFadeBox] = useState(false);

  const generatePassword = useCallback(() => {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbersAllowed) charset += "0123456789";
    if (symbolsAllowed) charset += "!@#$%^&*()_+";

    let password = "";
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    setPassword(password);
  }, [length, numbersAllowed, symbolsAllowed, setPassword]);

  const passwordRef = useRef(null);
  const copyToClipboard = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 40);

    navigator.clipboard.writeText(password || "Generated Password");
    setFadeBox(true);

    setTimeout(() => {
      setFadeBox(false);
    }, 2000);
  };

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div className="mt-12 px-4 text-center font-sans sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold">Password Generator</h1>
      <div className="mb-5 flex items-center justify-center">
        <label className="mr-3">Password Length {length}</label>
        <input
          type="range"
          value={length}
          max={40}
          min={4}
          onChange={(e) => setLength(e.target.value)}
          className="w-16 rounded border p-2"
        />
      </div>
      <div className="mb-5 flex items-center justify-center">
        <label className="mr-3">Include Numbers</label>
        <input
          type="checkbox"
          checked={numbersAllowed}
          onChange={(e) => setNumbersAllowed(e.target.checked)}
          className="scale-125 transform"
        />
      </div>
      <div className="mb-5 flex items-center justify-center">
        <label className="mr-3">Include Symbols</label>
        <input
          type="checkbox"
          checked={symbolsAllowed}
          onChange={(e) => setSymbolsAllowed(e.target.checked)}
          className="scale-125 transform"
        />
      </div>
      <div className="mb-5 flex items-center justify-center">
        <button
          onClick={() => generatePassword()}
          className="rounded bg-blue-500 px-3 py-1 text-lg font-semibold text-white transition duration-300 hover:bg-blue-600"
        >
          Generate Password
        </button>
      </div>
      <div>
        {/* <h2 className="mt-4 text-2xl font-semibold">Password</h2> */}
        <input
          onClick={() => copyToClipboard()}
          ref={passwordRef}
          readOnly
          value={password || "Generated Password"}
          className="mx-auto my-0 max-w-full overflow-x-auto border-transparent p-1 text-center text-xl font-bold whitespace-nowrap outline-none hover:bg-blue-800 focus:ring-0"
          style={{ width: `${password.length + 2}ch` }}
        />
        {fadeBox && (
          <p className="text-sm text-green-500">Copied to clipboard!</p>
        )}
      </div>
    </div>
  );
}

export default PasswordGenerator;
