import * as React from 'react';
import Slider from 'react-slick';
import { SingleSliderTypes } from 'src/components/moleculas/SingleSlider/types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'src/components/moleculas/SingleSlider/index.scss';

function SingleSlider(props: SingleSliderTypes.IProps) {
  const { items, className } = props;
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <Slider className={`team-slider slider ${className}`} {...settings}>
      {items.map((value: any) => {
        return (
          <div className="team d-flex align-items-center flex-column">
            <img className="slider--img" src={value.img} alt=""/>
            <p className="typography__variant-h2 fw-800 team-slider text-center mt-3 mb-1">{value.name}</p>
            <p className="typography__variant-h2 fw-800 team-slider text-center">{value.surname}</p>
            <p className="typography__variant-subtext team-slider text-center mt-1">{value.role}</p>
            <p className="typography__variant-subtext team-slider text-center mt-1">{value.email}</p>
          </div>
        );
      })}
    </Slider>
  );
}

export default SingleSlider;
