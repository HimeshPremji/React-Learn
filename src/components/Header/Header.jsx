import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow dark:bg-gray-900">
      <nav className="border-gray-200 px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-xl font-bold text-orange-700 dark:text-orange-400"
          >
            React-Learn
          </NavLink>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Nav Links */}
          <div
            className={`${isOpen ? "block" : "hidden"} w-full lg:block lg:w-auto`}
          >
            <ul className="mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8">
              {[
                { name: "Home", path: "/" },
                { name: "Project 01", path: "/color-changer" },
                { name: "Project 02", path: "/password-generator" },
                { name: "Project 03", path: "/currency-converter" },
                { name: "Project 04", path: "/github" },
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-orange-700 dark:text-orange-400"
                          : "text-gray-700 dark:text-gray-300"
                      } block py-2 pr-4 pl-3 hover:bg-gray-50 hover:text-orange-700 dark:hover:bg-gray-800 dark:hover:text-orange-400`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <DarkModeToggle />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
