

const IdCards = (prop) => {
    console.log("idcrads", prop)
    return (
        <>
            <div className="w-full h-full  ">
                <div className="flex flex-col mt-20 mx-auto relative jusitfy-center items-center w-[80%]">
                    <img src={prop.reviews.image} className="w-[100px] p-2 h-[100px] -mt-20 sm:-mt-[0px] sm:absolute sm:-left-[125px] sm:-top-[100px] rounded-full" />
                    <div className="font-semibold items-center text-2xl sm:text-4xl text-pink-300 mb-3 ">
                        {prop.reviews.name}
                    </div>
                    <div className="font-medium text-yellow-300 mb-2">
                        {prop.reviews.job}
                    </div>
                    <div className="text-center ">
                        {prop.reviews.text}
                    </div>
                </div>
            </div>
        </>
    )
}

export default IdCards