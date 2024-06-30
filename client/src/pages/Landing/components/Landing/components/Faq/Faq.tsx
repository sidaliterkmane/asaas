import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container w-[1250px] h-fit flex justify-center px-3">
        <div className="faq w-full h-full border border-transparent rounded-2xl flex flex-col md:flex-row gap-10 md:gap-[100px]">
          <div className="w-full md:w-[50%] flex flex-col gap-6">
            <h1 className="title text-center md:text-start text-3xl md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="text-center md:text-start text-base font-light text-neutral-400">Have another question? Shoot an email.</p>
          </div>

          <div className="flex flex-col w-full md:w-[50%]">
            <Accordion
              title="Can I get a refund?"
              content={
                "Asaas is essentially a GitHub repository. Once you get access to to the boilerplate, it is yours forever. Unfortunately no refunds are accepted."
              }
            />
            <Accordion title="question" content={"oui"} />
            <Accordion title="question" content={"oui"} />
            <Accordion title="question" content={"oui"} />
            <Accordion title="question" content={"oui"} />
            <Accordion title="question" content={"oui"} />
            <Accordion title="question" content={"oui"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
