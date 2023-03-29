import { cards } from "@/constants";
import Link from "next/link";

const Services = () => {
  return (
    <div className="">
      <div className="mx-9 my-5">
        <h1 className="text-center font-graphikBold sm:text-3xl pb-5 font-medium">OUR SERVICES</h1>
        <div className="grid grid-cols-3 gap-8 ">
          {cards.map((card) => {
            return (
              <div
                key={card.id}
                style={{ backgroundImage: `url(${card.imageUrl})` }}
                className="relative bg-cover bg-center col-span-3 text-white shadow-xl hover:scale-105 duration-300 hover:shadow-gray-600 rounded-xl mid:col-span-1"
              >
                <Link className="hover:bg-slate-500" href={'#'}>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-xl"></div>
                <div className="p-6 relative z-10 ">
                  <h3 className="font-extrabold text-2xl mb-2 mt-16">
                    {card.title}
                  </h3>
                  <p className="">{card.description}</p>
                </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
