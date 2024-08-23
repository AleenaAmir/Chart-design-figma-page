import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Myslider.css";

function MySlider() {
  const items = [
    {
      id: 1,
      title: "Boldo",
      image: "images/logo.png",
    },
    {
      id: 2,
      title: "presto",
      image: "images/logo.png",
    },
    {
      id: 3,
      title: "Boldo",
      image: "images/logo.png",
    },
    {
      id: 4,
      title: "presto",
      image: "images/logo.png",
    },
    {
      id: 5,
      title: "Boldo",
      image: "images/logo.png",
    },
    {
      id: 6,
      title: "presto",
      image: "images/logo.png",
    },
  ];

  const settings = {
    centerMode: true,
    centerPadding: 20,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div class="slider-body" key={item.id}>
          <h4 class="slider-heading">{item.title}</h4>
          <img class="slider-img" src={item.image} alt={item.title} />
        </div>
      ))}
    </Slider>
  );
}

export default MySlider;
