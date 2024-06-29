import { IoMdCheckmark } from "react-icons/io";

interface SellingPointProps {
  category: string;
  title: string;
  icon: any;
  description: string;
  bulletPoints: Array<string>;
  timeSaved: string;
  image: string;
  isPoweredBy: boolean;
  poweredByIcon: any;
  poweredBy: string;
}

const SellingPoint: React.FC<SellingPointProps> = ({
  category,
  title,
  icon,
  description,
  bulletPoints,
  timeSaved,
  image,
  isPoweredBy,
  poweredByIcon,
  poweredBy,
}) => {
  return (
    <div className="sellingPoint w-full flex flex-col lg:flex-row items-center justify-between gap-4 px-4">
      <div className="w-full lg:w-[50%] flex flex-col gap-6">
        <div className="header flex flex-col gap-2">
          <div className="title flex items-center gap-3">
            {icon}
            <h1 className="text-2xl sm:text-3xl">{title}</h1>
          </div>
          <p className="text-sm sm:text-base paragraph text-neutral-500">{description}</p>
        </div>
        <ul className="flex flex-col gap-2">
          {bulletPoints.map((bulletPoint, index) => (
            <li key={index} className="font-extralight flex items-center gap-2">
              <IoMdCheckmark size={"16px"} color="#50c878" className="flex-shrink-0" />
              <span className="text-sm sm:text-base">{bulletPoint}</span>
            </li>
          ))}
        </ul>
        <div className="w-fit p-1 px-2 rounded bg-emerald-700">
          <p className="text-xs font-semibold">{timeSaved} HOURS SAVED</p>
        </div>
        {isPoweredBy && (
          <div className="bg-neutral-950 p-2 w-fit rounded-lg flex justify-center items-center gap-2 border border-neutral-900">
            {poweredByIcon}
            <p className="text-neutral-300 text-sm sm:text-base">
              Powered by {poweredBy}
            </p>
          </div>
        )}
      </div>
      <div className="w-full lg:w-[50%]">
        <img className="rounded-lg mt-4 lg:mt-0" src={image} alt="" />
      </div>
    </div>
  );
};

export default SellingPoint;
