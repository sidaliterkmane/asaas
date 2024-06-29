import React, { useEffect, useState } from "react";
import { CgArrowLongRightC } from "react-icons/cg";
import Title from "./Title";
import { InfiniteMovingCards } from "./infinite-moving-cards";

const FlowChart = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container w-full max-w-[1250px] h-fit flex flex-col gap-4 px-4 lg:px-0">
        <Title
          microtitle="Flow-Chart"
          titleWhite="You get paid."
          titleGray="Your user gets value."
          hasDescription={false}
          description=""
          offerPill={false}
          offerPillContent=""
        />
        <div className="w-full flex flex-wrap gap-4 justify-center overflow-hidden relative antialiased">
          <InfiniteMovingCards 
            items={flowCards}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default FlowChart;

interface FlowCardProps {
  content: string;
  isLast: boolean;
}

const FlowCard: React.FC<FlowCardProps> = ({ content, isLast }) => {
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <div className={`card w-[150px] sm:w-[200px] h-[100px] sm:h-[120px] rounded-xl flex justify-center items-center p-2 sm:p-4 border border-emerald-700 ${isLast ? 'mr-[50px] sm:mr-[100px]' : ''}`}>
        <p className="text-center text-xs sm:text-sm">{content}</p>
      </div>
      {!isLast && (
        <div>
          <CgArrowLongRightC size={"30px"} color="white" />
        </div>
      )}
    </div>
  );
};

const flowCards = [
  <FlowCard content="User visits your landing page" isLast={false} />,
  <FlowCard content="Clicks on Call to Action button" isLast={false} />,
  <FlowCard content="Redirected to Stripe Checkout Session" isLast={false} />,
  <FlowCard content="Completes One-Time Payment" isLast={false} />,
  <FlowCard
    content="Receives Registration/Welcome Email with Temporary Password"
    isLast={false}
  />,
  <FlowCard content="Logs in with Temporary Password" isLast={false} />,
  <FlowCard
    content="Prompted to Change Password on First Login"
    isLast={false}
  />,
  <FlowCard content="Changes Password" isLast={false} />,
  <FlowCard content="User Can Now Use your App 🥳" isLast={true} />,
];
