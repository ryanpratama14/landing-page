import React from "react";

const Telegram = () => {
  return (
    <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
      <div>
        <a
          title="Text me on Instagram"
          href="https://t.me/alenushka_loginovaa"
          target="_blank"
          rel="noreferrer"
          class="block w-10 h-10 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
        >
          <img
            class="object-cover object-center w-full h-full rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
            alt="telegram"
          />
        </a>
      </div>
    </div>
  );
};

export default Telegram;
