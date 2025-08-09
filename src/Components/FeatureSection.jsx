export default function FeatureSection() {
    return (
        <diV className="mx-8 md:mx-25">
            <div className="flex flex-col md:flex-row items-center justify-center md:w-full gap-8 mb-8">   
                <article className="flex-1 flex-col justify-center  pl-5 pt-5 bg-pink-50   rounded-2xl hover:border-2 hover:border-pink-200">
                    <div className="w-full">
                        <div className="flex items-center gap-3  pt-3">
                            <img className="" src="src/assets/marker.png" />
                            <span className="text-1xl  ">AI Meeting Notes</span>
                            <a className="bg-white px-2 border border-none rounded-full text-md" href="#">New</a>
                        </div>
                        <div className="flex items-center gap-10 md:gap-20 pb-10 ">
                        <h1 className="text-2xl w-3/4 font-bold  font-san serif">Perfect notes every time.</h1>
                        <a className="bg-white  border border-none rounded-sm font-bold text-md" href="#"> -- </a> 
                        </div>
                    </div>
                    <img className=" w-full rounded" src="src/assets/salesnotion.jpg" /> 
                </article>

                <article className="flex-1 flex-col justify-center pr-5 pl-5 pt-5  bg-blue-50   rounded-2xl hover:border-2 hover:border-blue-200">
                    <div className="">
                        <div className="flex items-center gap-3 pt-3">
                            <img className="" src="src/assets/marker.png" />
                            <span className="text-1xl  ">Enterprise search</span>
                            <a className="bg-white px-2 border border-none rounded-full text-md" href="#">New</a>
                        </div>
                        <div className="flex items-center gap-10  md:gap-20 pb-10 ">
                        <h1 className="text-2xl w-3/4 font-bold  font-san serif">One search for everything.</h1>
                        <a className="bg-white  border border-none rounded-sm font-bold text-md" href="#"> -- </a> 
                        </div>
                    </div>
                    <img className=" w-full rounded" src="src/assets/teamnotion.jpg" /> 
                </article>
            </div>

        <article className="flex flex-col md:flex-row md:space-x-10 md:h-70 w-full  justify-center md:  pl-5 pt-5  bg-yellow-50   rounded-2xl hover:border-2 hover:border-yellow-100">
            <div className=" flex flex-col md:gap-5 md:w-3/4">
                <div className="flex items-center gap-3 pt-3">
                    <img className="" src="src/assets/marker.png" />
                    <span className="text-1xl  ">Projects</span>
                </div>
                <div className="flex md:flex-col  items-center md:block gap-10 md:space-y-20 pb-10 md:pb-0 ">
                <h2 className="text-2xl w-3/4 md:text-3xl font-bold">Keep every plan on track.</h2>
                <a className="bg-white  border border-none rounded-sm font-bold text-md" href="#"> -- </a> 
                </div>
            </div>
            <img className=" md:w- rounded" src="src/assets/launchnotion.jpg" /> 
        </article>

        <div className="flex flex-col md:flex-row items-center justify-center md:w-full gap-8 mt-8">   
                <article className="flex-1 flex-col justify-center  pl-5 pt-5 bg-gray-50   rounded-2xl hover:border-2 hover:border-gray-200">
                    <div className="w-full">
                        <div className="flex items-center gap-3  pt-3">
                            <img className="" src="src/assets/marker.png" />
                            <span className="text-1xl  ">Notion Mail</span>
                            <a className="bg-white px-2 border border-none rounded-full text-md" href="#">New</a>
                        </div>
                        <div className="flex items-center gap-10 md:gap-20 pb-10 ">
                        <h1 className="text-3xl w-3/4 font-bold  font-san serif">The inbox that thinks like you.</h1>
                        <a className="bg-white  border border-none rounded-sm font-bold text-md" href="#"> -- </a> 
                        </div>
                    </div>
                    <img className=" w-full rounded" src="src/assets/vincenotion.jpg" /> 
                </article>

                <article className="flex-1 flex-col justify-center pr-5 pl-5 pt-5  bg-blue-50   rounded-2xl hover:border-2 hover:border-blue-200">
                    <div className="">
                        <div className="flex items-center gap-3 pt-3">
                            <img className="" src="src/assets/marker.png" />
                            <span className="text-1xl  ">Business-in-a-box</span>
                            <a className="bg-white px-2 border border-none rounded-full text-md" href="#">New</a>
                        </div>
                        <div className="flex items-center gap-10  md:gap-20 pb-10 ">
                        <h1 className="text-2xl w-3/4 font-bold  font-san serif">Run your entire company.</h1>
                        <a className="bg-white  border border-none rounded-sm font-bold text-md" href="#"> -- </a> 
                        </div>
                    </div>
                    <img className=" w-full rounded" src="src/assets/publicnotion.jpg" /> 
                </article>
            </div>

        </diV>
    )
}