import CheckoutButton from "./CheckoutButton";
import { SiStarship } from "react-icons/si";

const shipIcon = <SiStarship className="icon" color="white" size={"25px"} />;

const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container w-[1250px] flex justify-center">
        <div className="header flex flex-col items-center gap-9">
          <h1 className="text-7xl text-center flex flex-col items-center">
            Launch your micro-saas in record time, <br />
            <h1 className="bg-stone-300 text-black w-fit">
              for the price of McDonalds.
            </h1>
          </h1>
          <p className="paragraph microtitle text-center">
            The MERN stack micro-saas boilerplate that contains the minimum
            required <br />
            to launch an app that makes $$$ asap for lazy, yet ambitious
            developers.
          </p>
          <div className="flex flex-col gap-2">
            <CheckoutButton
              containsIcon={true}
              icon={shipIcon}
              content="Start Shipping Now"
              width="250px"
              height="50px"
            />
            <div className="flex items-center gap-1">
              <div className="blinking-dot w-2 h-2 bg-emerald-600 rounded-full"></div>
              <p className="font-light text-sm text-neutral-500">
                <span className="text-emerald-600">$30 off </span> launch offer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
