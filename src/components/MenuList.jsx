import React from 'react'
import { useState } from 'react'
import { foods } from '../data'
import { useEffect } from 'react'

export const MenuList = ({selectedCateg}) => {
    const [menu, setMenu] = useState(foods)
    console.log(selectedCateg);
    
        useEffect(() => {
          setMenu(()=>selectedCateg=='all'? foods : foods.filter(obj=>obj.category==selectedCateg))
        
        }, [selectedCateg])
        

    return (
        <div className='flex flex-wrap gap-4 p-4'>
            {menu.map(({ id, title, category, price, img, desc }) =>
                <div key={id} className="flex gap-4 basis-[calc(50%-20px)]  ">
                    <div className='flex-1'>
                        <img className='w-full h-48 object-cover rounded-2xl ' src={'images/'+img} alt={title}/>
                    </div>
                    <div className='flex-1'>
                        <div>
                            <span className='text-amber-200 border-b-0 border-b-amber-200 p-3 capitalize font-bold'>{title}</span>
                            <span className='p-6 capitalize '>€{price}</span>
                        </div>
                        <div>
                            {desc}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


