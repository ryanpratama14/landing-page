import React from "react";

const Instagram = () => {
  return (
    <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
      <div>
        <a
          title="Follow me on Instagram"
          href="https://www.instagram.com/alenushka_loginova/"
          target="_blank"
          rel="noreferrer"
          class="block w-10 h-10 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
        >
          <img
            class="object-cover object-center w-full h-full rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            alt="instagram"
          />
        </a>
      </div>
    </div>
  );
};

export default Instagram;
