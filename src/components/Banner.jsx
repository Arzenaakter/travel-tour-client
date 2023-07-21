import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/wh71zSp/Rectangle-1.png)",
      }}>
      <div className="hero-overlay bg-opacity-50 bg-black text-white"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="bg-[#F9A51A] text-black hover:bg-slate-200 hover:text-[#F9A51A] px-4 py-2 rounded flex items-center gap-2">
            Booking <BsArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
