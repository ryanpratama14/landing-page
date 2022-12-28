import React from "react";

const CaseRestaurant = () => {
  return (
    <div class="bgbgbg font-sans text-white">
      <div class="pt-2">
        <section class=" text-white">
          <div class="mx-auto max-w-screen-xl px-8 mt-6 lg:px-8">
            <div class="mx-auto max-w-xl text-center">
              <h2 class="text-4xl">🦋</h2>
              <h2 class="text-4xl font-bold  sm:text-5xl">Кейс СММ</h2>

              <h2 class="mb-8 text-4xl font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600">
                Ресторан
              </h2>
            </div>
          </div>
        </section>
      </div>
      <div>
        <div class="flex justify-start lg:justify-center items-center w-full px-12">
          <div class="lg:w-3/5">
            <h1 class="text-2xl font-bold">О проекте:</h1>
            <p class="pt-2 pb-4 ml-6">
              Ресторан
              <br />
              г. Казань
              <br />
              Недавно на рынке, только начинает раскручиваться
            </p>
            <h1 class="text-2xl font-bold">Запрос клиента:</h1>
            <ul class="pt-2 pb-4 py-6 list-disc ml-6">
              <li>упаковка и ведение инстаграма школы;</li>
              <li>создание репутации в социальных сетях;</li>
              <li>увеличение потока клиентов;</li>
              <li>формирование лояльной аудитории и ее прирост;</li>
              <li>регулярная бронь столиков через социальные сети.</li>
            </ul>
            <h1 class="text-2xl font-bold">Что было сделано:</h1>
            <ol class="pt-2 pb-4 py-6 list-decimal ml-6">
              <li>
                собрана информация о проекте, обговорены цели и детали проекта;
              </li>
              <li>проведен аудит профиля;</li>
              <li>анализ ЦА;</li>
              <li>анализ конкурентов;</li>
              <li>проведена распаковка смыслов, экспертности;</li>
              <li>разработана стратегия продвижения;</li>
              <li>
                проведена полная упаковка профиля (аватарка, шапка профиля,
                лента и актуальные истории);
              </li>
              <li>подбор и разработка форматов контента;</li>
              <li>создан и утвержден контент-план;</li>
              <li>создание и публикация контента;</li>
              <li>постоянный тест и внедрение новых гипотез и стратегий;</li>
              <li>анализ и доработка проекта.</li>
            </ol>
          </div>
        </div>
        <div className="items-center flex justify-center mx-6">
          <img
            src={require("./photos/CaseRestaurant2.png")}
            class="w-fit sm:w-fit xl:w-3/5 my-6"
            alt=""
          />
        </div>
        <div class="flex justify-start lg:justify-center items-center w-full px-12">
          <div class="lg:w-3/5">
            <h1 class="text-2xl font-bold">Результат 2 недель работы::</h1>
            <ul class="pt-2 pb-4 py-6 list-disc ml-6">
              <li>
                Упакованный Инстаграм, отражающий ценности и специфику
                заведения;
              </li>
              <li>
                Набрана полная посадка на мероприятие 145 человек через соцсети
                (полной посадки до этого не было) ;
              </li>
              <li>+200 подписчиков без вложений в рекламу;</li>
              <li>регулярная публикация качественного контента;</li>
              <li>сформирована база лояльной аудитории;</li>
              <li>ответы и постоянная обратная связь от аудитории;</li>
              <li>заявки и вопросы от потенциальных клиентов.</li>
            </ul>
          </div>
        </div>

        <div class="flex justify-start lg:justify-center items-center w-full px-12">
          <div class="lg:w-3/5">
            <h1 class="text-2xl font-bold">Сатистика профиля:</h1>
          </div>
        </div>
        <div className="items-center flex justify-center mx-6">
          <img
            src={require("./photos/CaseRestaurant3.png")}
            class="w-96 sm:w-fit xl:w-3/5 my-6"
            alt=""
          />
        </div>

        <div class="flex justify-start lg:justify-center items-center w-full px-12">
          <div class="lg:w-3/5">
            <h1 class="text-2xl font-bold">
              Понравился кейс? <br />
              Записывайся на бесплатную консультацию по анализу профиля! <br />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseRestaurant;
