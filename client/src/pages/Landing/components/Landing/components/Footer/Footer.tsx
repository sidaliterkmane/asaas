import FooterSection from "./FooterSection";

import { SiStarship } from "react-icons/si";

const shipIcon = <SiStarship className="icon" color="white" size={"20px"} />;

const Footer = () => {
  return (
    <footer className="w-full flex justify-center py-10 border-t border-neutral-900">
      <div className="container w-[1250px] h-fit flex flex-col gap-10 md:flex-row justify-between">
        <div className="left flex flex-col items-center md:items-start w-full md:w-[350px] gap-4 px-6">
          <div className="flex gap-2 justify-center items-center">
            <div className="flex justify-center items-center">{shipIcon}</div>
            <p className="font-semibold text-lg">aSaas</p>
          </div>
          <p className="text-center md:text-start font-light text-sm text-neutral-500">
          Ship your app asap, for the price of lunch.
          Copyright © 2024 - All rights reserved
          </p>
          <div className="flex items-center gap-2 px-3 p-1 border rounded bg-neutral-950 border-emerald-500 text-white">Built with {shipIcon} <span className="font-semibold">aSaas</span></div>
        </div>
        <div className="right flex flex-col md:flex-row items-center md:items-start md:justify-between md:w-[60%] gap-8">
          <FooterSection 
            title="LINKS"
            links={[
              {title: 'Pricing', link: 'hello'},
              {title: 'Demo', link: 'hello'},
              {title: 'Components', link: 'hello'},
              {title: 'Documentation', link: 'hello'},
            ]}
          />
          <FooterSection 
            title="LEGAL"
            links={[
              {title: 'Terms Of Service', link: 'hello'},
              {title: 'Privacy Policy', link: 'hello'},
              {title: 'Licenses', link: 'hello'},
            ]}
          />
          <FooterSection 
            title="MORE"
            links={[
              {title: 'Support', link: 'hello'},
            ]}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
