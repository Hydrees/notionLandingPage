export default function  CallToAction() {
    return (
        <section className="mx-5 md:mx-25">
            <div className="mt-10 w-full mb-5">
            <p className="font-bold text-left text-lg">@ Customer stories</p>
        </div>

        <div className="bg-gray-100   rounded-2xl mb-10 md:px-20 md:py-20">
        <article className="flex flex-col md:flex-row md:space-x-20 md:h-60 w-full  justify-center pr-5 md:pr-0 pl-5 pt-5  bg-gray-100   rounded-2xl" >
            <div className="flex flex-col  gap-5 md:space-y-0 pb-10 md:pb-0 ">
                <h1 className="text-3xl  font-bold">Open AI</h1>
                <h3 className="text-2xl md:text-4xl font-serif">"There s power in a single platform where you can do all your work. Notion is that single place."</h3>
                <a className=" text-md md:text-lg" href="#"> Read the full story-- </a>
            </div>
            <div className="h-50 md:w-3/4 aspect-video rounded-xl overflow-hidden">
                <iframe className="w-full h-full"
                src="https://youtu.be/HubmluaaFmc?si=hTD4mj16aX_HWhis"
                title="OpenAI turns shared knowledge into faster workflows"
                frameBorder="0"
                allow="autoplay; encrypted-media picture-in-picture"
                allowFullScreen></iframe>
            </div>
        </article>
        <hr className="mt-15 mb-5 text-gray-300 mx-5"/>

        <div className="flex flex-col md:flex-row gap-10 p-5 ">
            <div className="gap-5">
                <h2 className="text-1xl font-bold">TOYOTA</h2>
                <p>Streamlined workflows to reduce timelines by 3x.</p>
            </div>
            <div className="gap-5">
                <h2 className="text-2xl font-bold">ramp</h2>
                <p>"with Notion, every person at Ramp has an AI assistant."</p>
            </div>
            <div className="gap-5">
                <h2 className="text-2xl font-bold">Vercel</h2>
                <p>"Notion understands that you can solve a lot of problems with one tool."</p>
            </div>
        </div>
        <hr className="hidden md:block mt-15 mb-5 text-gray-300 mx-5"/>

        <div className="hidden  md:flex gap-10 p-5">
            <div className="gap-5">
                <h2 className="text-1xl font-bold">matchGroup</h2>
                <p>"Notion has been the most powerful and impactful way of streamlining our work flow."</p>
            </div>
            <div className="gap-5">
                <h2 className="text-1xl font-bold">deel</h2>
                <p>"Someone could join deel and onboard themselves without ever speaking to anybody" </p>
            </div>
            <div className="gap-5">
                <h2 className="text-1xl font-bold">planful</h2>
                <p>From six apps to one:Scailing faster with all teams running on Notion AI.</p>
            </div>
        </div>


        </div>
        <div className="overflow-hidden whitespace-nowrap ">
  <p className="inline-block animate-marquee text-lg font-semibold text-gray-600">
    62% of fortune 100 use Notion, Over 50% of YC companies, Over 100M users worldwide, #1 rated AI writing (G2), 1.4Million+ community members, 
  </p>
</div>
        
        </section>
    )
}



        /*<article className="flex flex-col md:flex-row md:space-x-100 md:h-70 w-full  justify-center md:  pl-5 pt-5  bg-gray-50   rounded-2xl">
            <div className="flex md:flex-col  items-center md:block gap-5 md:space-y-0 pb-10 md:pb-0 ">
                <h1 className="text-1xl  font-bold">Open AI</h1>
                <h3 className="text-1xl">There s power in a single platform where you can do all your work. Notion is that single place.</h3>
                <a className="bg-white  border border-none rounded-sm font-bold text-md" href="#"> Read the full story-- </a> 
            </div>
            
            <img className=" w-full rounded" src="src/Components/launchnotion.jpg" /> 
        </article>*/