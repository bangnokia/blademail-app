import Features from "~/components/features";
import Hero from "~/components/hero";
import Pricing from "~/components/pricing";
import { useLoaderData } from '@remix-run/react';
import { LoaderFunction } from "remix";

export default function Index() {
    return (
        <>
            <div className="bg-white">
                <main>
                    <Hero />

                    <Features />

                    <Pricing />
                </main>
            </div>
        </>
    );
}
