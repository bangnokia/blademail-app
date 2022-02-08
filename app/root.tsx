import styles from "./styles/app.css";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix";
import type { MetaFunction } from "remix";
import Footer from "./components/footer";

export const meta: MetaFunction = () => {
    return { title: "Desktop App for Testing Email locally - Blade Mail" };
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
            </body>
        </html>
    );
}
