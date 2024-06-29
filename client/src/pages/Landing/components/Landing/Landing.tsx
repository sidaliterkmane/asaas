import { useNavigate } from "react-router-dom";

// Component imports
import Navbar from "./components/Navbar";
import CheckoutButton from "./components/CheckoutButton";
import Hero from "./components/Hero";
import FlowChart from "./components/FlowChart";
import SellingPoints from "./components/SellingPoints/SellingPoints";
import Pricing from "./components/Pricing/Pricing";

const Landing = () => {

  return (
    <div className="landing flex flex-col">
      <Navbar />
      <div className="flex flex-col w-full h-full items-center gap-40">
        <Hero />
        <FlowChart />
        <SellingPoints />
        <Pricing />
      </div>
    </div>
  );
};

export default Landing;
