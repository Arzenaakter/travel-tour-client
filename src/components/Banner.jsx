import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/wh71zSp/Rectangle-1.png)",
      }}>
      <div className="hero-overlay bg-opacity-50 bg-black text-white"></div>
      <div className="hero-content text-center text-neutral-content flex justify-between">
        <div className="max-w-md  text-center  ">
          <h1 className="mb-5 text-5xl font-bold">Cox's bazar</h1>
          <p className="mb-5">
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </p>
          <div className="flex justify-center">
            <button className="bg-[#F9A51A] text-black hover:bg-slate-200 hover:text-[#F9A51A] px-4 py-2 rounded flex items-center gap-2">
              Booking <BsArrowRight size={24} />
            </button>
          </div>
        </div>
        {/* <div className="max-w-md border"></div> */}
      </div>
    </div>
  );
};

export default Banner;
