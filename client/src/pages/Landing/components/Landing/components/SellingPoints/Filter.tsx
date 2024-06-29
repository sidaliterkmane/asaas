import { useState } from 'react'

interface FilterProps {
    categories: Array<string>
    onFilter: (category: string) => void
}

const Filter: React.FC<FilterProps> = ({categories, onFilter}) => {

    const [selectedCategory, setSelectedCategory] = useState('Payments');

    const handleClick = (category: string) => {
        setSelectedCategory(category);
        onFilter(category)
    }

  return (
    <div className="flex justify-center items-center gap-[1rem] flex-wrap">
        {categories.map((category) => 
            <button key={category} onClick={() => handleClick(category)} className={`
                border-[1px]
                box-border
                p-[7px]
                font-light
                text-neutral-300
                text-sm
                ${selectedCategory === category ? 'bg-neutral-950' : 'bg-black'}
                ${selectedCategory === category ? 'border-emerald-500' : 'border-gray-400 border-opacity-10'}
                hover:brightness-125
                transition
                rounded-md
            `}>
                {category}
            </button>)}
    </div>
  )
}

export default Filter