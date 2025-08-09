export default function GetStarted() {
    return (
        <section className="flex flex-col mb-10">
        <div className="flex flex-col md:flex-row gap-5 mx-5 md:mx-25 mb-5">
        <article className="flex-1 flex-col md:w-1/2  pl-5 pt-5 bg-gray-100   rounded-2xl">
                    <div className="flex flex-col gap-3 mb-10">
                        <div className="flex flex-col  gap-3  pt-3">
                            <h1 className="text-2xl font-bold">NOTION</h1>
                            <div className="gap-1">
                            <h2 className="text-2xl font-bold ">Get started on Notion</h2>
                            <p className="text-md" >Your AI workspace</p>
                            </div>
                        </div>
                        
                        <div className="gap-1 flex flex-col ">
                            <button className="bg-blue-500 md:bg-black px-5 py-1 w-fit text-sm   text-white rounded">Download for Windows</button>
                            <button className="hidden md:block bg-black px-8 w-fit text-sm py-1 text-white rounded">Download from the <br/> <span className="text-lg">Microsoft Store</span></button>
                        </div>
                    </div>
                    <img className=" w-full rounded" src="/images/designnotion.jpg" /> 
       </article>

       <div className="flex flex-col gap-5 md:w-1/2">
       <article className="flex flex-col md:flex-row  md:h-80 md:space-x-25  justify-center  pl-5 pt-5  bg-gray-100  rounded-2xl">
            <div className=" flex flex-col gap-2 md:gap-5">
                <div><h1 className="font-bold text-2xl">NOTION</h1></div>
                <div className="flex flex-col  md:block gap-1 md:space-y-0 pb-2 md:pb-0 ">
                <h1 className="text-2xl  font-bold">Notion Mail.</h1>
                <p className=" text-md">The inbox that thinks like you. </p> 
                </div>
                <div>
                    <button className="bg-white mb-5 px-5 py-1 w-fit text-sm   text-black rounded border-gray-100">Download</button>
                </div>
            </div>
            <img className="hidden md:block w-1/2 rounded" src="/images/Recrunotion.jpg" /> 
        </article>

        <article className="flex flex-col md:flex-row md:space-x-25 md:h-80   justify-center   pl-5 pt-5  bg-gray-100  rounded-2xl">
            <div className=" flex flex-col gap-2 md:gap-5">
                <div><h1 className="font-bold text-2xl">NOTION</h1></div>
                <div className="flex flex-col  md:block gap-1 md:space-y-0 pb-2 md:pb-0 ">
                <h1 className="text-2xl  font-bold">Notion Calender.</h1>
                <p className=" text-md">Time and work, together. </p> 
                </div>
                <div>
                    <button className="bg-white mb-5 px-5 py-1 w-fit text-sm   text-black rounded border-gray-100">Download</button>
                </div>
            </div>
            <img className="hidden md:block w-1/2 rounded" src="/images/calendernotion.jpg" /> 
        </article>
        </div>

       </div>

       <div className="mx-5 md:mx-25 mb-20">
        <p className="text-gray-500 text-md">Notion is always at home right <span className="underline text-gray-500 hover:text-blue-500"> in your browser </span></p>
       </div>
       <hr className="text-gray-300 "/>
       </section>
    )
}