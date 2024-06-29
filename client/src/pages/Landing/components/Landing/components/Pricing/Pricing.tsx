import React from "react";
import Title from "../Title";
import PricingCard from "./PricingCard";

import { HiOutlineSparkles } from "react-icons/hi2";

const Pricing = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container w-[1250px] h-fit flex flex-col gap-4 p-3">
        <Title
          microtitle="Pricing"
          titleWhite="Pay once."
          titleGray="Ship forever."
          hasDescription={true}
          description="No bullsh*t subscribtion. Do yourself a favor, skip a lunch and start making
          a bank by shipping now."
          offerPill={true}
          offerPillContent="$30 off regular price."
        />
        <div className="w-full flex justify-center">
          <PricingCard
            icon={<HiOutlineSparkles size={"20px"} />}
            price="$19.99"
            discountedPrice="$49.99"
            currency="USD"
            productName="All Or Nothing"
            productDescription="One time payment. Unlimited updates. Unlimited projects. Get full access to the Github repository and start making money now."
            whatsIncluded={[
              "React setup with Vite & TypeScript",
              "Email integrations",
              "Stripe payment system",
              "Secure user authentication",
              "Database setup & schemas",
              "Lifetime updates",
            ]}
            checkoutButtonContent="Get Asaas"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
