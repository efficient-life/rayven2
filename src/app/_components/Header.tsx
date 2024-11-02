"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiRaven } from "react-icons/gi";
import Link from "next/link";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: "/", text: "ホーム" },
    // { href: "/#OverviewCta", text: "会社概要" },
    { href: "/#service", text: "サービス内容" },
    // { href: "/features", text: "特徴" },
    { href: "/contact", text: "お問い合わせ", special: true },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <nav className="border backdrop-blur-md bg-white/80 border-gray-200 px-4 lg:px-6 py-2 sm:py-4 rounded-lg dark:bg-gray-800 lg:rounded-full w-11/12 sm:w-10/12 mx-auto shadow-lg">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center text-black">
            <GiRaven className="text-3xl mr-1" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              RAYVEN
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isOpen}
            >
              <span className="sr-only">メインメニューを開く</span>
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
            <div
              className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
                isOpen ? "block" : "hidden"
              }`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 items-center">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`block py-2 pr-4 pl-3 ${
                        item.text
                          ? "text-white rounded-full bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                          : item.special
                          ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                      }`}
                      aria-current={item.text ? "page" : undefined}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
