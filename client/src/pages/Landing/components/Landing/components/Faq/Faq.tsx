import Accordion from "./Accordion"

const Faq = () => {
  return (
    <div className='w-full flex justify-center'>
        <div className='container w-[1250px] h-fit flex justify-center px-3'>
            <div className='faq w-full h-fit border border-neutral-800 rounded-2xl p-10 flex flex-col items-center gap-10'>
              <h1 className='title text-5xl'>
                  Frequently asked questions
              </h1>
              <div className="flex flex-col w-full">
                <Accordion 
                  title="question"
                  content={'oui'}
                />
                <Accordion 
                  title="question"
                  content={'oui'}
                />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Faq