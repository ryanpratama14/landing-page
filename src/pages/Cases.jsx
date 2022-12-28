import React from "react";
import CaseCard from "../components/CaseCard";
import { useNavigate } from "react-router-dom";

const Cases = () => {
  const navigate = useNavigate();
  return (
    <div class="bgbgbg font-sans">
      {" "}
      <div>
        <section class=" text-white">
          <div class="mx-auto max-w-screen-xl px-8 py-20 sm:px-6 sm:pb-24 lg:px-8">
            <div class="mx-auto max-w-xl text-center">
              <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">HI!</h2>
            </div>
          </div>
        </section>
      </div>
      <div class="flex flex-wrap justify-center text-white">
        <CaseCard
          cardTitleProps={"Кейс СММ: Частная школа музыки"}
          cardDescProps={"4 августа 2022"}
          cardPicProps={require("./photos/CaseMusicalSchool.png")}
          navigate={() => {
            navigate("/case-musical-school");
          }}
        />
        <CaseCard
          cardTitleProps={"Кейс СММ: Частная школа музыки"}
          cardDescProps={"4 августа 2022"}
          cardPicProps={require("./photos/CaseMusicalSchool.png")}
        />
        <CaseCard
          cardTitleProps={"Кейс СММ: Частная школа музыки"}
          cardDescProps={"4 августа 2022"}
          cardPicProps={require("./photos/CaseMusicalSchool.png")}
        />
      </div>
    </div>
  );
};

export default Cases;
