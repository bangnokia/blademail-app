import Features from "~/components/features";
import Hero from "~/components/hero";
import Pricing from "~/components/pricing";

export default function Index() {
    return (
        <>
            <div className="bg-white">
                <div className="sticky top-0 text-center bg-rose-500 z-50">
                    Use code <code className="px-2 py-0.5 text-rose-500 bg-white">BLACKFRIDAY</code> for 50% off
                </div>
                <main>
                    <Hero />

                    <Features />

                    <Pricing />
                </main>
            </div>
        </>
    );
}
