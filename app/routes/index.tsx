import BlackFriday from "~/components/blackfriday";
import Faqs from "~/components/faqs";
import Features from "~/components/features";
import Hero from "~/components/hero";
import Pricing from "~/components/pricing";

export default function Index() {
    return (
        <div className="bg-white">
            <BlackFriday />
            <main>
                <Hero />
                <Features />
                <Pricing />
                <Faqs />
            </main>
        </div>
    );
}
