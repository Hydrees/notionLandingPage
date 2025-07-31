 

export default function NavBar() {
    return (
        <nav className="flex fixed w-full top-0 left-0  items-center justify-between bg-white shadow-sm p-4">
            {/*logo*/}
            <div className="text-2xl font-bold ">NOTION</div>
            {/*navbar links*/}
            <ul className="hidden md:flex gap-5 text-md text-gray-700 font-medium">
                <li>
                  <form className="">
                    <select id="favLanguage" defaultValue="Notion" >
          <option value="1"><a href="#">Notion</a></option>
          <option value="2">Features</option>
          <option value="3">Enterprise</option>
          
          </select>
                </form>
                  </li>
                <li><a href="#">Mail</a></li>
                <li><a href="#">Calendar</a></li>
                <li><a href="#">AI</a></li>
                <li><a href="#">Enterprise</a></li>
                <li><a href="#">Pricing</a></li>
                <li>
                  <form className="">
                    <select id="favLanguage" defaultValue="Notion" >
          <option value="1"><a href="#">Explore</a></option>
          <option value="2">Features</option>
          <option value="3">Enterprise</option>
          
          </select>
                </form>
                  </li>
                <li><a href="#">Request a demo</a></li>
            </ul>

            <div className="flex items-center ">
            {/*navbar buttons*/}
            <div className="flex gap-4">
                <button className="text-sm font-medium text-gray-700 hover:text-black hidden md:block">Log in</button>
                <button className="text-white text-sm px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-800">Get Notion free</button>
            </div>

<div className="md:hidden">
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox=" 0 0 25 25"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</div>

</div>
        </nav>
    )
}