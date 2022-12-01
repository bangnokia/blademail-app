export default function Pricing() {
    return (
        <div className="max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:flex-col sm:align-center">
                <h2 id="pricing" className="text-5xl font-extrabold text-gray-900 sm:text-center">Pricing Plan</h2>
                {/* <p className="mt-5 text-xl text-gray-500 sm:text-center">Start using Blade Mail for free. I'm rich plan unlocks additional features.</p> */}
            </div>
            <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-xl lg:mx-auto">
                {/* <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                     <div className="p-6">
                        <h2 className="text-lg leading-6 font-medium text-gray-900">Hobby</h2>
                        <p className="mt-4 text-sm text-gray-500">All the basics features for testing emails.</p>
                        <p className="mt-8">
                            <span className="text-4xl font-extrabold text-gray-900">$0</span>
                            <span className="text-base font-medium text-gray-500">/year</span>
                        </p>
                        <a href="https://bangnokia.gumroad.com/l/blade-mail" className="mt-8 block w-full bg-gray-500 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-rose-500 transition-colors">
                            Download
                        </a>
                    </div>
                    <div className="pt-6 pb-8 px-6">
                        <h3 className="text-sm font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                        <ul className="mt-6 space-y-4">
                            <FeatureItem>Simple email preview</FeatureItem>
                            <FeatureItem>Catching all local emails</FeatureItem>
                            <FeatureItem>Dead links checker</FeatureItem>
                            <FeatureItem>Spam score report</FeatureItem>
                            <FeatureItem><s>Commercial use</s></FeatureItem>
                            <FeatureItem>Active on unlimited computers</FeatureItem>
                            <FeatureItem>Email support</FeatureItem>
                        </ul>
                    </div>
                </div> */}
                <div className="border border-rose-500 rounded-lg shadow-lg divide-y divide-gray-200">
                    <div className="p-6">
                        <h2 className="text-lg leading-6 font-medium text-gray-900">Personal</h2>
                        <p className="mt-4 text-sm text-gray-500">All the features and you love this app.</p>
                        <p className="mt-8">
                            <span className="text-4xl font-extrabold text-gray-900">$12</span>
                            <span className="text-base font-medium text-gray-500">/year</span>
                        </p>
                        <a href="https://bangnokia.gumroad.com/l/blade-mail" className="mt-8 block w-full bg-rose-500 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-rose-600 transition-colors">
                            Get Blade Mail
                        </a>
                    </div>
                    <div className="pt-6 pb-8 px-6">
                        <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                        <ul className="mt-6 space-y-4">
                            <FeatureItem>Simple email preview</FeatureItem>
                            <FeatureItem>Catching all local emails</FeatureItem>
                            <FeatureItem>Dead links checker</FeatureItem>
                            <FeatureItem>Spam score report</FeatureItem>
                            <FeatureItem>Commercial use</FeatureItem>
                            <FeatureItem>Active on unlimited computers</FeatureItem>
                            <FeatureItem><span className="text-rose-500">Email support but faster</span></FeatureItem>
                            <FeatureItem><span className="text-rose-500">Preview email in the browser</span></FeatureItem>
                        </ul>
                    </div>
                </div>

            </div >
        </div >
    )
}

function FeatureItem({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex space-x-3">
            <svg className="flex-shrink-0 h-5 w-5 text-green-500" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-500">{children}</span>
        </li>
    )
}
