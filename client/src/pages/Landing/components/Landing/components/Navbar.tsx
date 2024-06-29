import { SiStarship } from "react-icons/si";
import CheckoutButton from "./CheckoutButton";
import { useNavigate } from "react-router-dom";

const shipIcon = <SiStarship className="icon" color="white" size={"25px"} />;

const Navbar = () => {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="w-full h-[60px] flex justify-center items-center">
      <div className="w-full max-w-[1250px] h-full flex justify-between p-4">
        <div className="flex gap-4 md:gap-12 justify-center items-center">
          <div className="flex gap-2 justify-center items-center">
            <div className="flex justify-center items-center">
              {shipIcon}
            </div>
            <p className="font-semibold text-lg">aSaas</p>
          </div>

          <ul className="hidden sm:flex links items-center gap-2 md:gap-4">
            <li className="text-xs md:text-sm font-extralight transition opacity-50 hover:opacity-80 cursor-pointer">Pricing</li>
            <li className="text-xs md:text-sm font-extralight transition opacity-50 hover:opacity-80 cursor-pointer">Demo</li>
            <li className="text-xs md:text-sm font-extralight transition opacity-50 hover:opacity-80 cursor-pointer">Components</li>
            <li className="text-xs md:text-sm font-extralight transition opacity-50 hover:opacity-80 cursor-pointer">Docs</li>
            <li className="text-xs md:text-sm font-extralight transition opacity-50 hover:opacity-80 cursor-pointer">Testimonials</li>
          </ul>

          <ul className="flex sm:hidden links items-center gap-2">
            <li className="text-xs font-extralight transition opacity-50 hover:opacity-80 cursor-pointer">Pricing</li>
            <li className="text-xs font-extralight transition opacity-50 hover:opacity-80 cursor-pointer">Docs</li>
          </ul>
        </div>

        <div className="hidden sm:flex gap-3 justify-center items-center">
          <a onClick={redirectToLogin} className="text-xs md:text-sm font-extralight transition opacity-50 hover:opacity-80 cursor-pointer">Log In</a>
          <CheckoutButton
            containsIcon={false}
            icon={''}
            content="Get Started →"
            width="130px"
            height="35px"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
