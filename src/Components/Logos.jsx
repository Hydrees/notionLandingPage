import cursorImage from "../assets/pictures/cursor.png"
import openAiImage from "../assets/pictures/OpenAI.png"
import rampImage from "../assets/pictures/ramp.png"
import volvoImage from "../assets/pictures/volvo.png"


export default function Logos() {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center mx-5 md:mx-15  bg-white mb-8">

            <div className="flex  mx-10">
            <h2 className="text-gray-600 text-sm md: pb-5 md:pb-0 ">Trusted by top teams</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center mx- gap-5 md:gap-8 px-5">
                <img src={cursorImage} className="w-20 h-5"/>
                <img src={openAiImage} className="w-20 h-5"/>
                <img src={rampImage} className="w-20 h-5"/>
                <img src={volvoImage} className="w-20 h-5"/>
                <img src={cursorImage} className="w-20 h-5"/>
                <span className="hidden md:block md:flex md:flex-wrap md:justify-center md:items-center md:mx-0 md:gap-5 md:px-15">
                <img src={volvoImage} className="w-20 h-5"/>
                <img src={rampImage} className="w-20 h-5"/>
                <img src={openAiImage} className="w-20 h-5"/>
                
                </span>
            </div>
            
        </section>
    )
}

/*<div className="flex flex-wrap justify-center items-center gap-5 max-w-4xl mx-auto">
                {["figma", "pixer", "nike", "spotify", "amazon", "meta"].map((company, index) => (
                    <div key={index} className="w-24 h-10 flex items-center justify-center border rounder bg-gray-50 text-gray-500 text-sm">{company}</div>
                ))}
            </div>*/