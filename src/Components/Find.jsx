import Button from "./ui/Button"

export default function Find() {
    return (
        <section className="flex flex-col md:flex-row  pt-10 mx-5 md:mx-25 my-15 bg-white md:flex-row md:justify-right mb-10 md:space-x-15 ">
        <div className="flex flex-col">
                    <div className=" md:text-left md:items-start mr-10">
                    
                    <h1 className="text-3xl md:text-4xl font-bold mb-5">Find anything with one search.
                    </h1>
        
                    
                    <p className="text-md text-gray-600 max-w-2xl mx-auto mb-10">Search across your company knowledge and apps, right inside Notion.</p>
                   
                    
                    <div className="flex  md:flex-row gap-2 mb-5">
                        <Button text="Try for free"/>
                        <Button 
                        text="Request a Demo ->"
                        variant=""
                        />
                        </div>
                    </div>

                    <div className="flex gap-20 mb-10">
                    <div className=" md:text-left md:items-start">
                    
                    <h1 className="text-1xl md:text-1xl font-bold ">integrates with</h1>
                    <ul>
                        <li>Slack</li>
                        <li>Google Drive</li>
                        <li>GitHub</li>
                        <li>Jira</li>
                        <li>MS Teams</li>
                        <li>SharePoint</li>
                    </ul>
                    </div>

                    <div className=" md:text-left md:items-start">
                    <ul>
                        <li>OneDrive</li>
                        <li>Gmail</li>
                        <li>Linear</li>
                        <li className="font-bold">Coming soon</li>
                        <li>Zendesk</li>
                        <li>Salesforce</li>
                        <li>Box</li>
                    </ul>
                    </div>

                    </div>    
        </div>
                    
                    <div className="w-full justify-center h-100 pl-10 pr-10 pt-15 rounded-2xl bg-blue-50 ">
                        <img className="w-full rounded h-85 " src="public/images/productnotion.jpg" />
                    </div>
        </section>
    )
}

/*className=" w-full justify-center h-120  pl-10 md:pr-30 md:pl-30  pt-15 bg-blue-50 mb-10  rounded-2xl hover:border-2 hover:border-blue-200"
className=" w-full  md:ml rounded h-105"
*/
           
