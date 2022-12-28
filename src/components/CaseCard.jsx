import React from "react";

const CaseCard = ({
  cardTitleProps,
  cardDescProps,
  cardPicProps,
  navigate,
}) => {
  return (
    <div className="card shadow-2xl my-6 mx-12 w-full md:w-3/6 lg:w-3/6 xl:w-3/6">
      <figure>
        <img src={cardPicProps} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitleProps}</h2>
        <p>{cardDescProps}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate();
            }}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
