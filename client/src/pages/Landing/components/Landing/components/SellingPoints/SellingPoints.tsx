import { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./SellingPoints.css";

import Title from "../Title";
import SellingPoint from "./SellingPoint";
import Filter from "./Filter";

// Icons
import { FaPager, FaDatabase, FaMailchimp } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { BiSolidDollarCircle } from "react-icons/bi";
import { SiStripe } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { HiOutlineTemplate } from "react-icons/hi";

// Images
import landingPageImg from "../../../../../../assets/landing.png";
import loginImg from "../../../../../../assets/login.png";
import dbImg from "../../../../../../assets/database.png";
import stripeImg from "../../../../../../assets/stripe.png";
import mailImg from "../../../../../../assets/mail.png";
import mongoIcon from "../../../../../../assets/mongoIcon.webp";
import mailchimpIcon from "../../../../../../assets/mailchimp.png";
import nodemailerIcon from "../../../../../../assets/nodemailer.png";
import viteIcon from "../../../../../../assets/viteIcon.svg";
import tailwindIcon from "../../../../../../assets/tailwindIcon.png";

const SellingPoints = () => {
  const [filteredSellingPoints, setFilteredSellingPoints] = useState(
    points.filter((point) => point.element.props.category === "Payments")
  );

  const categories = ["Payments", "Login", "Database", "Email", "Layout"];

  const handleFilter = (category: string) => {
    setFilteredSellingPoints(
      points.filter((point) => point.element.props.category === category)
    );
  };

  return (
    <div className="w-full flex justify-center">
      <div className="container w-[1250px] h-fit flex flex-col gap-4">
        <Title
          microtitle="What you get"
          titleWhite="Save hours of headache."
          titleGray="Focus on your features instead."
          hasDescription={true}
          description="Customize your landing page, process payments, send emails and login users within
                the blink of an eye. Make more money by focusing on what matters, your features."
          offerPill={true}
          offerPillContent="$30 off regular price."
        />
        <Filter categories={categories} onFilter={handleFilter} />
        <div className="w-full flex justify-center">
          <div className="transition-container w-full flex flex-col gap-[100px] mt-12 h-[550px] lg:h-[400px]">
            <TransitionGroup component={null}>
              {filteredSellingPoints.map((point) => (
                <CSSTransition
                  key={point.key}
                  timeout={300}
                  classNames="point-transition"
                >
                  {point.element}
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

const points = [
  {
    key: "payments",
    element: (
      <SellingPoint
        category="Payments"
        title="Payment Collection"
        icon={<BiSolidDollarCircle size={"30px"} color="#50c878" />}
        description="Monetize your software by collecting payments from users
          in only a few minutes. Powered by Stripe."
        bulletPoints={[
          "One-time payment checkout session setup",
          "Webhooks handling to update user account and status",
          "Modern pricing component card",
        ]}
        timeSaved="20"
        image={stripeImg}
        isPoweredBy={true}
        poweredBy="Stripe"
        poweredByIcon={<SiStripe size={"25px"} color="#5433FF" />}
      />
    ),
  },
  {
    key: "login",
    element: (
      <SellingPoint
        category="Login"
        title="User Authentication"
        icon={<BsFillShieldLockFill size={"30px"} color="#50c878" />}
        description="Register and log in users securely, in no time."
        bulletPoints={[
          "Automatic registration upon payment completion",
          "Temporary password system",
          "Password change functionality",
          "Protected pages & API calls",
          "Clean log in page & form",
        ]}
        timeSaved="20"
        image={loginImg}
        isPoweredBy={false}
        poweredBy=""
        poweredByIcon={""}
      />
    ),
  },
  {
    key: "database",
    element: (
      <SellingPoint
        category="Database"
        title="Database ORM"
        icon={<FaDatabase size={"30px"} color="#50c878" />}
        description="Store and backup your data, without having to know SQL."
        bulletPoints={[
          "Mongoose schemas",
          "Simplified data transactions with Atlas",
        ]}
        timeSaved="20"
        image={dbImg}
        isPoweredBy={true}
        poweredBy="MongoDB"
        poweredByIcon={<img src={mongoIcon} className="w-[28px]" />}
      />
    ),
  },
  {
    key: "email",
    element: (
      <SellingPoint
        category="Email"
        title="Automated Email System"
        icon={<MdEmail size={"30px"} color="#50c878" />}
        description="Effortlessly handle user email communications."
        bulletPoints={[
          "Registration emails sent with NodeMailer",
          "Welcome emails include temporary passwords",
          "Secure and reliable email delivery",
          "Newsletter management with Mailchimp",
          "Customizable email templates",
        ]}
        timeSaved="20"
        image={mailImg}
        isPoweredBy={true}
        poweredBy="NodeMailer & Mailchimp"
        poweredByIcon={
          <div className="flex gap-3 items-center">
            <img src={nodemailerIcon} className="w-[30px]" />
            <img src={mailchimpIcon} className="w-[30px]" />
          </div>
        }
      />
    ),
  },
  {
    key: "layout",
    element: (
      <SellingPoint
        category="Layout"
        title="Landing Page & Custom Components"
        icon={<HiOutlineTemplate size={"30px"} color="#50c878" />}
        description="Visually stunning and functional components for a landing page that converts."
        bulletPoints={[
          "Built with React and Vite",
          "Beautifully styled with Tailwind CSS",
          "Clean and customizable components",
          "Premade, responsive landing page for conversions",
          "Easy-to-use inputs, buttons, and more",
        ]}
        timeSaved="20"
        image={landingPageImg}
        isPoweredBy={true}
        poweredBy="Vite & Tailwind CSS"
        poweredByIcon={
          <div className="flex gap-3 items-center">
            <img src={viteIcon} className="w-[30px]" />
            <img src={tailwindIcon} className="w-[30px]" />
          </div>
        }
      />
    ),
  },
];

export default SellingPoints;
