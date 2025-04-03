import List from "../../public/List.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '../Components/Card'
function Freecard() {
  const freebook = List.filter((data) => data.price === 0);
  //   setting of slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Default slides to show
    slidesToScroll: 3, // Default slides to scroll
    responsive: [
      {
        breakpoint: 1024,  // Medium screens (tablet)
        settings: {
          slidesToShow: 2,  // Show 2 slides on tablet
          slidesToScroll: 2,  // Scroll 2 slides at a time
        },
      },
      {
        breakpoint: 768,  // Small screens (mobile)
        settings: {
          slidesToShow: 1,  // Show 1 slide on mobile
          slidesToScroll: 1,  // Scroll 1 slide at a time
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <h1 className="text-xl font-bold pb-2 mt-10">Free offered courses</h1>

        <p>
          Dive into endless stories, absolutely free. Your next great read
          awaits, no cost required.
        </p>
      </div>
      {/* slider div */}
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <Slider {...settings}>
          {freebook.map((data)=>(
            <Card item={data} key={data.id}/>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Freecard;
