import styles from "./styles/app.css";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix";
import type { MetaFunction } from "remix";
import Footer from "./components/footer";

export const meta: MetaFunction = () => {
    const description = "Blade mail is a lightweight and blazingly fast desktop app for emails testing locally, Never send your test emails to client";
    const title = "Blade Mail - Desktop App for Testing Emails locally"

    return {
        title: title,
        description: description,
        "twitter:card": "summary_large_image",
        "twitter:author": "@bangnokia",
        "twitter:description": description,
        "twitter:site": "@blademail_app",
        "og:title": title,
        "og:description": description,
        "og:image": "https://blademail.app/images/blade-mail-screenshot.png"
    };
};

export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "icon", href: "/favicon.png", type: "image/png" }
    ];
}

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />
                <Links />
                <script async src="https://cdn.splitbee.io/sb.js"></script>
            </head>
            <body>
                <Outlet />
                <Footer />
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === "development" && <LiveReload />}
            </body>
        </html>
    );
}
