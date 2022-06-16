export default function Features() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
            <div className="sm:flex sm:flex-col sm:align-center">
                <h2 id="pricing" className="text-5xl font-extrabold text-gray-900 sm:text-center">Built for efficiency and simplicity</h2>
                <p className="mt-5 text-xl text-gray-500 sm:text-center">Blade Mail was crafted with simplicity from heart.</p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                <div>
                    <div>
                        <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                            <svg className="w-12 h-12 text-rose-500" x-description="Heroicon name: outline/inbox" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg font-medium text-gray-900">Unlimited emails</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Catch and keep all your testing emails from application.
                        </p>
                    </div>
                </div>

                <div>
                    <div>
                        <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                            <svg className="w-12 h-12 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
                        </span>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg font-medium text-gray-900">Content preview</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Preview emails before sending to make sure you're not making any mistakes.
                        </p>
                    </div>
                </div>

                <div>
                    <div>
                        <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                            <svg className="w-12 h-12 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        </span>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg font-medium text-gray-900">Spam Assassin Report</h3>
                        <p className="mt-2 text-base text-gray-500">
                            <a href="https://spamassassin.apache.org/" target="_blank" className="text-rose-500">Spam Assassin</a> report to see if you've been blacklisted or not.
                        </p>
                    </div>
                </div>

                <div>
                    <div>
                        <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                            <svg className="w-12 h-12 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>                        </span>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg font-medium text-gray-900">Broken links checker</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Automated check all the links in an email are valid or not.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}