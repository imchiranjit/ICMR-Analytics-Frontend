export default function Hero() {
  return (
    <>
      <div className="relative select-none font-noto-sans h-full bg-gradient-to-t from-[#fffbf5] to-[#fffef4]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 bg-gradient-to-t from-[#fffbf5] to-[#fffef4]">
          <div className="relative sm:mt-0 px-6 sm:px-0">
            <img
              className="h-[300px] w-[600px] object-cover object-center rounded-xl shadow-xl"
              src="../../public/Images/Untitled15.jpeg"
              alt="Hero image"
            />
          </div>
          <div className="p-4 m-4">
            <p className="text-[40px] pt-8 lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0">
              Some Topic
            </p>
            <p className="mt-5 md:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              sagittis ex eu nibh tempus, non accumsan lorem interdum.
              Suspendisse urna turpis, viverra in euismod a, finibus id libero.
              Nam nec lectus metus. Sed et sodales quam, vel suscipit felis.
              Curabitur interdum, magna nec commodo viverra, metus turpis mollis
              lorem, id pretium neque purus in ex. Nulla dui velit, convallis
              non erat id, dictum tempus elit. Sed mollis sem tempor dolor
              euismod suscipit. Suspendisse euismod dui sit amet enim sagittis,
              a hendrerit erat tristique. Nulla tristique, justo eu dictum
              euismod, urna nunc lobortis nisl, sed auctor odio risus a quam.
              Donec venenatis a neque nec hendrerit. Vestibulum eget porttitor
              massa, at tristique velit.
            </p>
            <div className="flex gap-4 mt-10">
              <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-l  from-golden to-orange-500 relative gap-2 transition duration-300 hover:scale-105 text-slate-100 shadow-glass">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative select-none font-noto-sans h-full pb-4 bg-gradient-to-t from-[#fffbf5] to-[#fffef4] mt-0">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 bg-gradient-to-t from-[#fffbf5] to-[#fffef4]">
          <div className="p-4 pb-0 m-4">
            <p className="text-[40px] pt-8 lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 ">
              Some Topic
            </p>
            <p className="mt-5 md:text-md ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              sagittis ex eu nibh tempus, non accumsan lorem interdum.
              Suspendisse urna turpis, viverra in euismod a, finibus id libero.
              Nam nec lectus metus. Sed et sodales quam, vel suscipit felis.
              Curabitur interdum, magna nec commodo viverra, metus turpis mollis
              lorem, id pretium neque purus in ex. Nulla dui velit, convallis
              non erat id, dictum tempus elit. Sed mollis sem tempor dolor
              euismod suscipit. Suspendisse euismod dui sit amet enim sagittis,
              a hendrerit erat tristique. Nulla tristique, justo eu dictum
              euismod, urna nunc lobortis nisl, sed auctor odio risus a quam.
              Donec venenatis a neque nec hendrerit. Vestibulum eget porttitor
              massa, at tristique velit.
            </p>
            <div className="flex gap-4 mt-10">
              <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-l  from-golden to-orange-500  relative gap-2 transition duration-300 hover:scale-105 text-slate-100 shadow-glass ">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative sm:mt-0 mt-10 px-6 sm:px-0">
            <img
              className="h-[300px] w-[600px] object-cover object-center rounded-xl shadow-xl"
              src="../../public/Images/Untitled15.jpeg"
              alt="Hero image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
