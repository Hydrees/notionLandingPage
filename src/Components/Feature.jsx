export default function Feature() {
    return (
        <section className="flex flex-col mx-5 md:mx-25 items-center">
        <div className="mt-10 flex flex-col justify-center items-center h-50">
            <h2 className="text-1xl md:text-4xl font-serif">"Your AI everything app."</h2>
            <h1 className="text-3xl md:text-4xl font-bold">Forbes</h1>
        </div>
        <div className="mt- flex flex-col justify-center items-center space-y-3 md:space-y-5 mb-10">
            <h1 className="text-4xl md:text-5xl text-center font-bold">One space for every team. </h1>
            <ul className="flex gap-5 flex-wrap items-center justify-center ">
                <li className="bg-gray-200 rounded-full px-2 py-1">Product</li>
                <li>Engineering</li>
                <li>Design</li>
                <li>IT</li>
                <li>Marketing</li>
                <li>Startups</li>
            </ul>
        </div>
        <article className=" w-full justify-center h-120  pl-10 md:pr-30 md:pl-30  pt-15 bg-blue-50 mb-10  rounded-2xl hover:border-2 hover:border-blue-200">
                    
                    <img className=" w-full  md:ml rounded h-105" src="/images/roadmapnotion.jpg" /> 
        </article>

        <div className="mt- flex flex-col justify-center items-center  my-20 ">
            <h1 className="text-base md:text-lg text-center font-bold">More productivity. Fewer tools. </h1>
            <div className="flex">
            <div className="relative w-full flex  justify-center items-center ">   
            <ul className="flex relative items-start  gap-2 md:gap-10 text-xs md:text-lg  ">
                <li>Confluence</li>
                <li>Google Docs</li>
                <li>Asana</li>
                <li>Evernote</li>
                <li>Monday</li>
                <li>SharePoint</li>
            </ul>
           <hr className="absolute  border-t-2 border-black w-full"/>
            </div>
            <img className="hidden md:block pt-10" src="public/images/writenotion.jpg" />
            </div>
        </div>
        
        </section>
    )
}      