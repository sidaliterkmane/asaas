import { useNavigate } from "react-router-dom";

// Component imports
import Navbar from "./components/Navbar";
import CheckoutButton from "./components/CheckoutButton";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";

const Landing = () => {

  return (
    <div className="landing w-screen h-screen flex flex-col gap-[250px]">
      <Navbar />
      <div className="flex flex-col w-full h-full items-center gap-3">
        <Hero />
        <TechStack />
      </div>
    </div>
  );
};

export default Landing;
