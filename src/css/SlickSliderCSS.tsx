import { Global } from "@emotion/react";

const SlickSliderCSS = () => (
  <Global
    styles={`
        .infocardSlider .slick-dots button::before {
          content: ""
        }
        .infocardSlider .slick-dots {
          bottom: -35px;
        }
        .infocardSlider .slick-dots button {
          border: 1px solid #8B5DF8;
          border-radius: 100%;
          width: 16px;
          height: 16px;
          padding: 0;
        }
        .infocardSlider .slick-dots li.slick-active button {
          background-color: #8B5DF8;
        }
        .infocardSlider .slick-list {
          width: calc(100% - 30px);
          overflow: visible;
        }
        .infocardSlider .slick-slide {
          padding-left: 1rem;          
        }

        @media(min-width: 768px) {
          .infocardSlider .slick-list {
            width: 100%;
            overflow-x: hidden;
          }
          .infocardSlider .slick-slide {
            padding-left: 0;
            padding: 0 1rem;          
          }
          .infocardSlider .slick-arrow.slick-next {
            right: 70px;          
            top: unset;
            bottom: -70px;
          }
          .infocardSlider .slick-arrow.slick-prev {
            right: 100px;      
            left: unset;    
            top: unset;
            bottom: -70px;
          }
        }
      `}
  />
);

export { SlickSliderCSS };
