import { React, useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const CaseCard = ({
  cardTitleProps,
  cardTitleTypeProps,
  cardDateProps,
  cardPicProps,
  cardDescProps,
  navigate,
}) => {
  const ref = useRef();
  return (
    <div className="card mx-6">
      <figure class="w-72 max-w-72">
        <Flippy
          flipOnHover={false} // default false
          flipOnClick={true} // default false
          flipDirection="vertical" // horizontal or vertical
          ref={ref} // to use toggle method like ref.curret.toggle()
        >
          <FrontSide>
            <img src={cardPicProps} alt="Screenshot" />
            <button
              onClick={() => {
                ref.current.toggle();
              }}
            ></button>
          </FrontSide>
          <div class="-mb-9">
            <BackSide>
              <div className="card-body shadow-xl w-64">
                <div class="flex justify-between items-center">
                  <h2 className="text-2xl text-left font-bold">
                    {cardTitleTypeProps}
                  </h2>
                  <button
                    className="btn btn-accent btn-active ml-6"
                    onClick={() => {
                      navigate();
                    }}
                  >
                    ...
                  </button>
                </div>
                <p class="text-left">{cardDateProps}</p>
                <h2 className="card-title text-left text-2xl my-6">
                  {cardTitleProps}
                </h2>
                <p class="text-l">{cardDescProps}</p>
              </div>
            </BackSide>
          </div>
        </Flippy>
      </figure>
    </div>
  );
};

export default CaseCard;
