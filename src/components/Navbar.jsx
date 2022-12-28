import React from "react";
import { useNavigate } from "react-router-dom";
import "./Custom.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      class="
      sticky top-0 z-30 flex h-16 w-full justify-center text-sans text-white
    "
    >
      <div class="navbar bg-navbar">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 drop-1"
            >
              <li>
                <a
                  href
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Обо мне
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <a
            href
            onClick={() => {
              navigate("/");
            }}
            class="btn btn-ghost normal-case text-2xl "
          >
            Кейсы
          </a>
        </div>
        <div class="navbar-end">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img
                  src={require("./photos/display_photo.jpeg")}
                  alt="display_photo"
                />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-dropdown rounded-box w-52"
            >
              <li>
                <a
                  class="justify-between"
                  href="https://www.instagram.com/alenushka_loginova/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram<span class="badge">ig</span>
                </a>
              </li>
              <li>
                <a
                  class="justify-between"
                  href="https://t.me/alenushka_loginovaa"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram<span class="badge">tg</span>
                </a>
              </li>
              <li>
                <a
                  class="justify-between"
                  href="https://wa.me/+79600534040"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp<span class="badge">wa</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
