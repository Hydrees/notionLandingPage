export default function Footer() {
    return (
        <section className="flex flex-col md:flex-row mb-10 space-y-10 md:space-x-30 mx-5 md:mx-25">
            <div className="gap-5 text-gray-500">
                <form className="">
                    <select id="favLanguage" defaultValue="English (US)" className="border rounded bg-gray-200 mb-5">
          <option value="1">English (US)</option>
          <option value="2">English (UK)</option>
          <option value="3">English (US)</option>
          <option value="4">Francais (france)</option>
          </select>
                </form>
                <p>Cookies settings</p>
                <p>@ 2025 Notion Labs, Inc.</p>
            </div>

            <div className="flex space-x-20">
                <div >
                    <ul>
                        <li className="font-bold">Company</li>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Security</li>
                        <li>Status</li>
                        <li>Terms & privacy</li>
                        <li>Our privacy rights</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="font-bold">Download</li>
                        <li>iOS & Android</li>
                        <li>Mac & Windows</li>
                        <li>Calendar</li>
                        <li>Web Clipper</li>
                    </ul>
                </div>
            </div>

            <div className="flex space-x-30">
                <div>
                    <ul>
                        <li className="font-bold">Resources</li>
                        <li>Help center</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li>Community</li>
                        <li>Integrations</li>
                        <li>Templates</li>
                        <li>Affiliates</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-15">
                    <ul>
                        <li className="font-bold">Notion for</li>
                        <li>Enterprise</li>
                        <li>Small business</li>
                        <li>Personal</li>
                    </ul>

                    <h2 className="text-1xl font-bold">Explore --</h2>
                </div>
            </div>
        </section>
    )
}