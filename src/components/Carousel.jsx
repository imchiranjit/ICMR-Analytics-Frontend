import { Carousel, Typography } from "@material-tailwind/react";

export default function CarouselTransition() {
  return (
    <div className="relative h-full mt-4 mx-4 font-noto-sans">
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
      )} className="rounded-xl">
        <div className="relative w-full">
          <img
            src="../../public/Images/Untitled6.jpeg"
            alt="image 1"
            className="h-[400px] w-full object-cover"
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
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <img
            src="../../public/Images/Untitled12.jpeg"
            alt="image 1"
            className="h-[400px] w-full object-cover"
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
            className="h-[400px] w-full object-fit"
          />

          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="w-3/4 text-center md:w-2/4">
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
      </Carousel>
    </div>
  );
}
