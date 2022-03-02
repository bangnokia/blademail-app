import Features from "~/components/features";
import Footer from "~/components/footer";
import Hero from "~/components/hero";
import Pricing from "~/components/pricing";
import { useLoaderData } from '@remix-run/react';
import { LoaderFunction } from "remix";
import { Scripts } from '@remix-run/react';

// export let loader: LoaderFunction = () => {
//     return {
//         "name": "v0.1.5",
//         "version": "v0.1.5",
//         "description": "hello world",
//         "published_at": "2022-02-24T13:22:02.000000Z",
//         "platforms": {
//             "macos": {
//                 "name": "Blade.Mail_0.1.5_x64.dmg",
//                 "size": 3610262,
//                 "browser_download_url": "https://github.com/bangnokia/blademail/releases/download/v0.1.5/Blade.Mail_0.1.5_x64.dmg"
//             },
//             "win64": {
//                 "name": "Blade.Mail_0.1.5_x64.msi",
//                 "size": 4427776,
//                 "browser_download_url": "https://github.com/bangnokia/blademail/releases/download/v0.1.5/Blade.Mail_0.1.5_x64.msi"
//             },
//             "linux": {
//                 "name": "blade-mail_0.1.5_amd64.AppImage",
//                 "size": 70468800,
//                 "browser_download_url": "https://github.com/bangnokia/blademail/releases/download/v0.1.5/blade-mail_0.1.5_amd64.AppImage"
//             },
//             "debian": {
//                 "name": "blade-mail_0.1.5_amd64.deb",
//                 "size": 6031444,
//                 "browser_download_url": "https://github.com/bangnokia/blademail/releases/download/v0.1.5/blade-mail_0.1.5_amd64.deb"
//             }
//         }
//     }
// }
export let loader: LoaderFunction = async () => {
    let response = await fetch("https://lab.daudau.cc/api/apps/blade-mail/latest-release");

    return response.json();
}

export default function Index() {
    const release = useLoaderData();
    return (
        <>
            <div className="bg-white">
                <main>
                    <Hero release={release} />

                    <Features />

                    <Pricing />
                </main>
            </div>
        </>
    );
}
