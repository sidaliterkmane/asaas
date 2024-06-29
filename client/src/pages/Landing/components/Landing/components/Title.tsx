import OfferPill from "./OfferPill";

interface TitleProps {
  microtitle: string;
  titleWhite: string;
  titleGray: string;
  hasDescription: boolean;
  description: string;
  offerPill: boolean;
  offerPillContent: string;
}

const Title: React.FC<TitleProps> = ({
  microtitle,
  titleWhite,
  titleGray,
  hasDescription,
  description,
  offerPill,
  offerPillContent
}) => {
  return (
    <div className="mb-10 flex flex-col gap-3 items-center">
      <p className="text-center text-sm sm:text-base md:text-lg font-light text-emerald-500">
        {microtitle}
      </p>
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl">
        {titleWhite}{" "}
        <span className="text-neutral-400">
          {titleGray}
        </span>
      </h1>
      {hasDescription && (
        <p className="text-center text-sm sm:text-base md:text-lg font-light text-neutral-500 w-full sm:w-[80%] md:w-[60%]">
          {description}
        </p>
      )}
      {offerPill && (
        <OfferPill content={offerPillContent}/>
      )}
    </div>
  );
};

export default Title;
