import { React, useState } from "react";
import { Icon } from "@iconify/react";

const LoadToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      class={
        visible
          ? "flex justify-center items-center fixed bottom-0 left-0 mb-7 z-10 transition-all transform scale-120 btn btn-ghost hover:bg-transparent"
          : "hidden"
      }
    >
      <div>
        <a
          href
          onClick={scrollToTop}
          class="block transition-all transform hover:scale-110 hover:-translate-y-2 duration-400 cursor-pointer "
        >
          <Icon
            icon="uil:top-arrow-to-top"
            width="40"
            color="white"
            height="40"
          />
        </a>
      </div>
    </div>
  );
};

export default LoadToTop;
