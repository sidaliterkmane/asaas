interface OfferPillProps {
    content: string
}

const OfferPill: React.FC<OfferPillProps> = ({ content }) => {

  return (
    <div className="w-fit p-1 border border-neutral-800 rounded-full flex items-center gap-3 bg-neutral-950">
        <div className="w-fit p-1 px-2 rounded-full bg-emerald-400">
            <p className="text-sm font-light text-black">Launch Offer</p>
        </div>
        <p className='text-sm font-extralight text-neutral-400 mr-1'>
            {content}
        </p>
    </div>
  )
}

export default OfferPill