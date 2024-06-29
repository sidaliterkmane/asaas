import { IoMdCheckmark } from "react-icons/io";
import { SiStarship } from "react-icons/si";
import CheckoutButton from "../CheckoutButton";

interface PricingCardProps {
  icon: any;
  price: string;
  discountedPrice: string;
  currency: string;
  productName: string;
  productDescription: string;
  whatsIncluded: String[];
  checkoutButtonContent: string;
}

const shipIcon = <SiStarship className="icon" color="white" size={"25px"} />;

const PricingCard: React.FC<PricingCardProps> = ({
  icon,
  price,
  discountedPrice,
  currency,
  productName,
  productDescription,
  whatsIncluded,
  checkoutButtonContent
}) => {
  return (
    <div className="rounded-2xl p-px bg-gradient-to-bl from-emerald-500 to-neutral-900 to-40% w-full h-fit">
      <div className="bg-neutral-950 p-10 rounded-[calc(1rem-1px)] w-full h-fit flex gap-4 flex-col md:flex-row">
        <div className="left w-full md:w-[65%] flex flex-col gap-10">
          <div className="header flex flex-col gap-3">
            <div className="title flex gap-4 items-center">
              <div className="flex justify-center items-center p-[10px] border border-neutral-700 rounded-xl">
                {icon}
              </div>
              <h1 className="text-4xl">{productName}</h1>
            </div>
            <p className="description paragraph">{productDescription}</p>
          </div>
          <ul className="flex flex-col gap-2">
            <li>
                <p className="text-emerald-500 spacing">FEATURES</p>
            </li>
            {whatsIncluded.map((item, index) => (
              <li
                key={index}
                className="font-extralight flex items-center gap-2"
              >
                <IoMdCheckmark
                  size={"16px"}
                  color="#50c878"
                  className="flex-shrink-0"
                />
                <span className="text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="line w-[100%] h-[1px] mt-4 bg-neutral-900 md:w-[1px] md:h-auto md:mt-0">

        </div>
        <div className="right w-full md:w-[40%] flex flex-col gap-10 justify-between md:pl-6">
            <div className="price w-full flex flex-col items-end">
                <p className="text-2xl mr-1 line-through text-emerald-500">{discountedPrice}</p>
                <h1 className="text-emerald-500 text-8xl">{price}</h1>
                <p className="text-neutral-200 p-1 px-3 border border-emerald-400 rounded-lg">One Time Payment</p>
            </div>
            <CheckoutButton 
                content={checkoutButtonContent}
                containsIcon={true}
                icon={shipIcon}
                width=""
                height=""
            />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
