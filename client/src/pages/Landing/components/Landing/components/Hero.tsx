import CheckoutButton from "./CheckoutButton";
import { SiStarship } from "react-icons/si";
import { FaStar } from "react-icons/fa";

import stack from '../../../../../assets/stack.png'

const shipIcon = <SiStarship className="icon" color="white" size={"25px"} />;
const starIcon = <FaStar className="icon" color="orange" size={'20px'}/>

const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container w-full max-w-[1250px] h-fit flex flex-col lg:flex-row justify-center lg:justify-around mt-8 lg:mt-0">
        <div className="header flex flex-col justify-center gap-6 lg:gap-10 w-full lg:w-[50%] px-4 lg:px-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight">
            Ship your app asap, <br />
            <span className='text-black inline bg-white align-middle'>
              for the price of lunch.
            </span>
          </h1>
          <p className="paragraph microtitle text-sm sm:text-base lg:text-lg">
            The MERN stack micro-saas boilerplate that contains the minimum
            required to launch an app that makes $$$ in record time for lazy, ambitious
            developers.
          </p>
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <CheckoutButton
              containsIcon={true}
              icon={shipIcon}
              content="Get aSaas"
              width="250px"
              height="50px"
            />
            <div className="flex items-center gap-1">
              <div className="blinking-dot w-2 h-2 bg-emerald-600 rounded-full"></div>
              <p className="font-light text-sm text-neutral-500">
                <span className="text-emerald-600">$30 off </span> launch
                offer
              </p>
            </div>
            <ul className="flex gap-[3px] justify-center lg:justify-start">
              <li>{starIcon}</li>
              <li>{starIcon}</li>
              <li>{starIcon}</li>
              <li>{starIcon}</li>
              <li>{starIcon}</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-end mt-4 lg:mt-0">
          <img src={stack} alt="tech-stack" className="w-3/4 sm:w-2/3 lg:w-full mt-4 lg:mt-[50px]"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
