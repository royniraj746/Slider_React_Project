import IdCards from "./IdCards"
import { useState } from "react"

import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const CardComp = (props) => {
    const [ind, setIndex] = useState(0)
    const dataLenght = props.reviews.length
    // console.log("prop", props.reviews[ind])
    const reviews = props.reviews

    const leftHandler = () => {
        let curentIndex = ind - 1
        if (curentIndex < 0) {
            setIndex(dataLenght-1)
            console.log("left", ind)
        }
        else {
            setIndex(curentIndex)
            console.log("left", ind)

        }
        

    }
    const rightHandler = () => {
        let curentIndex = ind + 1
        if (curentIndex >= dataLenght) {
            setIndex(0)
            console.log("righ", ind)
        }
        else {
            setIndex(curentIndex)
            console.log("righ", ind)

        }
        

    }

    const randomIdHandler = () => {
        const superNumber = Math.ceil(Math.random() * dataLenght-1) 
        console.log("superNumber", superNumber)
        setIndex(superNumber)
        console.log("ind", ind)

    }



    return (
        <div className="w-full h-full flex items-center  justify-center">
            <div className="w-3/4 h-fit p-4 bg-white shadow-md rounded-md flex items-center relative justify-center flex-col gap-4">
                <IdCards reviews={reviews[ind]} className={"relative"} />
               
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <div className='flex gap-4 '>
                        <div >
                            <FaChevronCircleLeft onClick={leftHandler} className="text-green-500 hover:scale-110 hover:cursor-pointer" />
                        </div>
                        <div>
                            <FaChevronCircleRight className="text-green-500 hover:scale-110 cursor-pointer" onClick={rightHandler} />
                        </div>
                    </div>
                    <div>
                        <button onClick={randomIdHandler} className='p-3 px-7 rounded-lg hover:text-yellow-500 hover:bg-green-800 hover:transition-all duration-500 hover:scale-110  bg-green-300  shadow-sm'>Surprise</button>
                    </div>


                </div>
            </div>
        </div>
    )
}


export default CardComp