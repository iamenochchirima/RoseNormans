import { cards } from "@/constants";

const Services = () => {
  return (
    <div className="mx-9 my-5">
      <h1 className="text-center text-4xl pb-5 font-medium">OUR SERVICES</h1>
      <div className="grid grid-cols-3 gap-8 text-white">
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              className="relative col-span-3 sm:col-span-1 bg-black h-72 rounded-xl ju"
            >
              <div
                className=" bg-cover bg-center absolute opacity-70 inset-0"
                style={{ backgroundImage: `url(${card.imageUrl})` }}
              />
              <div className="  relative z-10">
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                  <p className="">{card.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
