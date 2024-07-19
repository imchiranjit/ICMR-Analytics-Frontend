import { Carousel, Typography } from "@material-tailwind/react";
import './carousel1.css'
import { useEffect, useState } from "react";

export default function CarouselTransition(){

  const [isMounted, setIsMounted] = useState(false)

  useEffect(()=>{
    let count = document.querySelector(".num")
    if(count){
    let startValue = 0;
    let endValue =  123456;//parseInt(valueDisplay.getAttribute("data-val"));
    let duration = 100;
    let counter = setInterval(function () {
      startValue += 10000;
      if (startValue >= endValue) {
        startValue = endValue;
        clearInterval(counter);
      }
      count.textContent = startValue;
    }, duration);
  }
  },[])
  

  return (
    <div className="font-noto-sans carousel-wrapper ">
      <Carousel transition={{ duration: .75 }} navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )} className="carausel">
        <div className="relative w-full">
          <img
            src="../../public/Images/Untitled12.jpeg"
            alt="image 1"
            className="w-full h-[100vh] object-cover"
          />

          <div className="absolute inset-0 h-full w-full bg-black/50 pt-20 flex items-center">
            <div className="text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="relative ml-24 text-2xl lg:text-4xl anim anim1"
              >
                Interlinking Mechanisms of<br />Covid & Cancer: The Analysis
              </Typography>
              <Typography className="ml-24 mt-8 text-white text-[20px] anim anim2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est iure voluptatibus itaque fuga? Cumque, assumenda autem voluptatibus enim architecto quibusdam deleniti, excepturi corporis repellat neque nobis incidunt minima perferendis dolorem. Amet, fugit! Eum nesciunt, et minus deleniti itaque illo repellat ex quis. In explicabo repellat distinctio exercitationem illum delectus iure?</p>
              </Typography>
            </div>
            <div className="text-center md:w-2/4">
              <Typography className="relative ml-24 mb-8 font-bold text-2xl text-white lg:text-6xl anim anim3">
                <h1 className="num">0</h1>
                <h1>Sample Size</h1>
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <img
            src="../../public/Images/Untitled6.jpeg"
            alt="image 1"
            className="w-full h-[100vh] object-cover"
          />

          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Some Topic
              </Typography>
              <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <img
            src="../../public/Images/Untitled10.jpeg"
            alt="image 1"
            className="w-full h-[100vh] object-cover"
          />

          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              <p>It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.</p>
              <h1 className="num">0</h1>
            </Typography>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
