import React from 'react'
import { getAllCategories } from '../utils'
import { useState } from 'react'
import { Button, ButtonGroup } from "@heroui/react";
import { motion, scale, spring } from "motion/react"
import { TimeSpent } from './TimeSpent';

export const MyHeader = ({ selectedCateg, setSelectedCateg }) => {
    const [categories, setCategories] = useState(getAllCategories)
    //console.log(categories);

    return (
        <div className='flex flex-col items-center gap-4 capitalize relative'>
                <motion.h1 className='text-center text-3xl font-bold text-amber-400'
                    initial={{ x: '100vw' }}
                    animate={{ x: 0, transition: { duration: 1, type: spring, stiffness: 20 } }}
                >
                    Our menu

                </motion.h1>
                <TimeSpent/>
            
            <ButtonGroup size="lg" variant="primary" className="bg-amber-400 text-gray-950 rounded-3xl">

                {categories.map((item, index) =>
                    <Button key={index} onClick={() => setSelectedCateg(item)} className={selectedCateg == item ? "bg-gray-950 text-amber-400 " : "bg-amber-400 text-gray-950 capitalize"}>
                        <ButtonGroup.Separator />
                        <motion.span
                            whileHover={{ scale: 1.1 }}
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {item}
                        </motion.span>
                    </Button>
                )}

            </ButtonGroup>
        </div>
    )
}


