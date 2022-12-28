import React from "react";

const CasePersonalBrand = () => {
  return (
    <div class="bgbgbg font-sans text-white">
      <div class="pt-2">
        <section class=" text-white">
          <div class="mx-auto max-w-screen-xl px-8 mt-6 lg:px-8">
            <div class="mx-auto max-w-xl text-center">
              <h2 class="text-4xl">🦋</h2>
              <h2 class="text-4xl font-bold  sm:text-5xl">Кейс СММ</h2>

              <h2 class="mb-8 text-4xl font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600">
                Личный бренд
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
              Девушка Алёна
              <br />
              Создавать и продвигать свои продукты через социальные сети
            </p>
            <h1 class="text-2xl font-bold">Запрос клиента:</h1>
            <ul class="pt-2 pb-4 py-6 list-disc ml-6">
              <li>
                создание и продвижение своих продуктов через социальные сети;
              </li>
              <li>упаковка социальных сетей;</li>
              <li>увеличение аудитории;</li>
              <li>увеличение лояльности аудитории;</li>
              <li>продажи через соцсети.</li>
            </ul>
            <h1 class="text-2xl font-bold">Что было сделано:</h1>
            <ol class="pt-2 pb-4 py-6 list-decimal ml-6">
              <li>проведена распаковка личности, экспертности жизни;</li>
              <li>
                собрана информация о проекте, обговорены цели и детали проекта;
              </li>
              <li>проведен аудит профиля;</li>
              <li>анализ ЦА;</li>
              <li>анализ конкурентов;</li>
              <li>разработана маркетинговая стратегия продвижения;</li>
              <li>прописан прогрев;</li>
              <li>создана стратегия, концепция и план контента;</li>
              <li>разработана стратегия рилс;</li>
              <li>проведена съемка для визуала, рилс;</li>
              <li>создана и расписана продуктовая линейка;</li>
              <li>
                проведена полная упаковка профиля (аватарка, шапка профиля,
                лента и актуальные истории);
              </li>
              <li>постоянный тест и внедрение новых идей гипотез;</li>
              <li>анализ и доработка проекта.</li>
            </ol>
          </div>
        </div>
        <div className="items-center flex justify-center mx-6">
          <img
            src={require("./photos/CasePersonalBrand2.png")}
            class="w-fit sm:w-fit xl:w-3/5 my-6"
            alt=""
          />
        </div>
        <div class="flex justify-start lg:justify-center items-center w-full px-12">
          <div class="lg:w-3/5">
            <h1 class="text-2xl font-bold">Что было до работы со мной:</h1>
            <ul class="pt-2 pb-4 py-6 list-disc ml-6">
              <li>аккаунт велся нерегулярно;</li>
              <li>
                не было понимания, как вести аккаунт, как привлекать клиентов;
              </li>
              <li>слабый поток заявок от потенциальных клиентов;</li>
              <li>низкие охваты и вовлеченность.</li>
            </ul>
            <h1 class="text-2xl font-bold">Что после:</h1>
            <ul class="pt-2 pb-4 py-6 list-disc ml-6">
              <li>
                упакованный инстаграм, отражающий личность, ценности, специфику
                и экспертность;
              </li>
              <li>регулярное ведение профиля;</li>
              <li>
                контент, который отражает смыслы, ценность, который продает;
              </li>
              <li>прирост аудитории;</li>
              <li>сформирована и прописана продуктовая линейка;</li>
              <li>регулярная публикация качественного контента;</li>
              <li>сформирована база лояльной аудитории;</li>
              <li>ответы и постоянная обратная связь от аудитории;</li>
              <li>заявки и вопросы от потенциальных клиентов.</li>
            </ul>
          </div>
        </div>
        <div className="items-center flex justify-center mx-6">
          <img
            src={require("./photos/CasePersonalBrand3.png")}
            class="w-96 sm:w-fit xl:w-3/5 my-6"
            alt=""
          />
        </div>
        <div class="flex justify-start lg:justify-center items-center w-full px-12">
          <div class="lg:w-3/5">
            <h1 class="text-2xl font-bold">Отзывы:</h1>
          </div>
        </div>
        <div className="items-center flex justify-center mx-6">
          <img
            src={require("./photos/CasePersonalBrand4.png")}
            class="w-96 sm:w-fit xl:w-3/5 my-6"
            alt=""
          />
        </div>
        <div class="flex justify-start lg:justify-center items-center w-full px-12">
          <div class="lg:w-3/5">
            <h1 class="text-2xl font-bold">Статистика профиля:</h1>
          </div>
        </div>
        <div className="items-center flex justify-center mx-6">
          <img
            src={require("./photos/CasePersonalBrand5.png")}
            class="w-96 sm:w-fit xl:w-96 my-6"
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

export default CasePersonalBrand;
