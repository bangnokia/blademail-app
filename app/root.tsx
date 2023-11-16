import styles from "./styles/app.css";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix";
import type { MetaFunction } from "remix";
import Footer from "./components/footer";

export const meta: MetaFunction = () => {
    const description = "Blade mail is a lightweight and blazingly fast desktop app for emails testing locally, Never send your test emails to client";
    const title = "Blade Mail - Desktop App for Testing Emails locally"
    const image = "https://blademail.app/images/og_image.png";

    return {
        title: title,
        description: description,
        "twitter:domain": "blademail.app",
        "twitter:url": "https://blademail.app",
        "twitter:card": "summary_large_image",
        "twitter:title": title,
        "twitter:description": description,
        "twitter:author": "@bangnokia",
        "twitter:site": "@blademail_app",
        "twitter:image": image,
        "og:url": "https://blademail.app",
        "og:type": "website",
        "og:title": title,
        "og:description": description,
        "og:image": image
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
            </head>
            <body>
                <Outlet />
                <Footer />
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === "development" && <LiveReload />}

                {`
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LPQD4C2DSN"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LPQD4C2DSN');
</script>
                `}
            </body>
        </html>
    );
}
