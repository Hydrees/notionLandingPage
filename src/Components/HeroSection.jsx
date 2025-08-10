import Button from "./ui/Button"
import notionImage from "../assets/pictures/notion.jpg"

export default function HeroSection() {
    return (
        <section className="flex flex-col-reverse text-center pt-25 md:pt-30 mx-5 md:mx-25 bg-white md:flex-row md:justify-right  md:mb-10 md:gap-5 ">

            <div className=" md:text-left md:items-start">
            {/*headline*/}
            <h1 className="text-4xl md:text-6xl font-bold mb-5 md:mb-3">The AI workspace that works for you.
            </h1>

            {/*sub headline*/}
            <p className="text-md md:text-2xl  max-w-2xl mx-10 md:mx-0 mb-10 md:mb-5">One place where teams find every answer, automate the busywork, and get projects done.</p>
           
            {/*CTA buttons*/}
            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-5 md:gap-3 mb-10">
                <Button text="Get Notion Free"/>
                <Button 
                text="Watch Demo"
                variant="outline"
                />
                </div>
            </div>    

            {/*the visual placeholder*/}
            <div className="mb-5 p-5 md:w-3/4">
                <img className="" src={notionImage} />
            </div>
        </section>
    )
}