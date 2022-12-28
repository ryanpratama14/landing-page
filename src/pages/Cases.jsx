import { React } from "react";
import CaseCard from "../components/CaseCard";
import { useNavigate } from "react-router-dom";

const Cases = () => {
  const navigate = useNavigate();
  return (
    <div class="bgbgbg font-sans">
      <div class="pt-2 mb-12">
        <section class=" text-white">
          <div class="mx-auto max-w-screen-xl px-8 py-6 lg:px-8">
            <div class="mx-auto max-w-xl text-center">
              <h2 class="text-4xl">🦋</h2>
              <h2 class="text-4xl font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600">
                Привет! я Алёна
              </h2>
              <br />
              <h2 class="text-4xl font-bold  sm:text-5xl">
                маркетолог, продюсер,
                <br />
                SMM-специалист.
              </h2>
            </div>
          </div>
        </section>
      </div>

      <div class="flex flex-wrap justify-center text-white">
        <CaseCard
          cardTitleTypeProps={"Кейс СММ"}
          cardTitleProps={"Агентство недвижимости"}
          cardDateProps={"6 октября 2022"}
          cardDescProps={
            "О проекте: Оказание профессиональных услуг в сфере недвижимости, агентство «Ассистент» в Казани, 5 лет на рынке."
          }
          cardPicProps={require("./photos/CasePropertyAgency.png")}
          navigate={() => {
            navigate("/case-property-agency");
          }}
        />
        <CaseCard
          cardTitleTypeProps={"Кейс СММ"}
          cardTitleProps={"Ресторан"}
          cardDateProps={"5 августа 2022"}
          cardDescProps={
            "Запрос клиента: упаковка и ведение инстаграм; создание репутации в социальных сетях; увеличение потока клиентов; формирование лояльной аудитории и ее прирост; регулярная бронь столик..."
          }
          cardPicProps={require("./photos/CaseRestaurant.png")}
          navigate={() => {
            navigate("/case-restaurant");
          }}
        />
        <CaseCard
          cardTitleTypeProps={"Кейс СММ"}
          cardTitleProps={"Личный бренд"}
          cardDateProps={"5 августа 2022"}
          cardDescProps="Запрос клиента: создание и продвижение своих продуктов через социальные сети; упаковка социальных сетей; увеличение аудитории; увеличение лояльност..."
          cardPicProps={require("./photos/CasePersonalBrand.png")}
          navigate={() => {
            navigate("/case-personal-brand");
          }}
        />
        <CaseCard
          cardTitleTypeProps={"Кейс СММ"}
          cardTitleProps={"Частная школа музыки"}
          cardDateProps={"4 августа 2022"}
          cardDescProps={
            "О проекте: Частная школа музыки в Москве, с 2013 года на рынке, занятия рассчитаны на обеспечнную часть населения, цены выше рыночных."
          }
          cardPicProps={require("./photos/CaseMusicalSchool.png")}
          navigate={() => {
            navigate("/case-musical-school");
          }}
        />
      </div>
    </div>
  );
};

export default Cases;
