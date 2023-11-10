import BlackFriday from "~/components/blackfriday";
import Faqs from "~/components/faqs";
import Features from "~/components/features";
import Hero from "~/components/hero";
import Pricing from "~/components/pricing";
import {useLoaderData} from "@remix-run/react";
import {LoaderFunction} from "remix";

export let loader: LoaderFunction = async () => {
    let response = await fetch("https://lab.daudau.cc/api/apps/blade-mail/latest-release");

    return response.json();
}

export default function Index() {
    const release = useLoaderData();

    return (
        <div className="bg-white">
            <main>
                <BlackFriday />
                <Hero release={release} />
                <Features />
                <Pricing />
                <Faqs />
            </main>
        </div>
    );
}
