import { useState } from "react";

export interface Platform {
  name: string;
  size: number;
  browser_download_url: string;
}

export interface Release {
  name: string;
  version: string;
  description: string;
  published_at: string;
  platforms: {
    macos: Platform;
    win64: Platform;
    linux: Platform;
    debian: Platform;
  };
}

export enum PlatformType {
  Macos = "macos",
  Windows = "win64",
  Linux = "linux",
  Debian = "debian",
}

export default function Hero({ release }: { release: Release }) {
  const [platform, setPlatform] = useState<PlatformType>(PlatformType.Macos);

  const downloadUrl = release.platforms[platform].browser_download_url;

  return (
    <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div>
          <div className="flex items-center gap-8">
            <img
              className="h-24 w-auto  transform rounded-full border-2 border-yellow-400 transition hover:rotate-12 hover:border-rose-500"
              src="/images/logo.png"
              alt="Blade Mail"
            />
            <h2 className="text-4xl font-extrabold text-rose-500 lg:text-5xl">
              Blade Mail
            </h2>
          </div>
          <div className="mt-10">
            <div className="hidden">
              <a href="#" className="inline-flex space-x-4">
                <span className="rounded bg-rose-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-rose-500">
                  What's new
                </span>
                <span className="inline-flex items-center space-x-1 text-sm font-medium text-rose-500">
                  <span>Just shipped version 1.0.6</span>
                  <svg
                    className="h-5 w-5"
                    x-description="Heroicon name: solid/chevron-right"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div className="mt-6 sm:max-w-xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Desktop App for Email Testing locally
              </h1>
              <p className="mt-6 text-lg text-gray-500">
                Never send your email to any free services, Blade Mail will
                handle emails testing for you.
              </p>
            </div>
            <form action="#" className="mt-12 sm:flex sm:w-full sm:max-w-lg">
              <div className="mt-4 flex flex-col gap-4 sm:mt-0">
                <div className="flex w-full gap-2">
                  <select
                    className="w-full rounded border bg-white px-5 py-3 md:w-auto"
                    id="platform"
                    value={platform}
                    onChange={(e) =>
                      setPlatform(e.target.value as PlatformType)
                    }
                  >
                    <option value={PlatformType.Macos}>macOS</option>
                    <option value={PlatformType.Windows}>Windows</option>
                    <option value={PlatformType.Linux}>Linux</option>
                    <option value={PlatformType.Debian}>Debian</option>
                  </select>
                  <a
                    role="button"
                    href={downloadUrl}
                    className="block w-full rounded-md border border-transparent bg-yellow-400 px-5 py-3 text-base font-medium text-white shadow transition-colors hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10 md:w-auto"
                  >
                    Free download
                  </a>
                </div>
                <a
                  role="button"
                  href="https://bangnokia.gumroad.com/l/blade-mail/BLACKFRIDAY"
                  className="block w-full rounded-md border border-transparent bg-rose-500 px-5 py-3 text-center text-base font-medium text-white shadow transition-colors hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10 md:w-auto"
                >
                  Buy now
                </a>
                <div className="text-light text-sm text-gray-400">
                  Blade Mail may be downloaded and evaluated for free, however a
                  license must be purchased for continued use. There is
                  currently no enforced time limit for the evaluation.
                </div>
              </div>
            </form>
            <div className="mt-6">
              <div className="inline-flex items-center divide-x divide-gray-300">
                <div className="flex flex-shrink-0 pr-5">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    x-description="Heroicon name: solid/star"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    x-description="Heroicon name: solid/star"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    x-description="Heroicon name: solid/star"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    x-description="Heroicon name: solid/star"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    x-description="Heroicon name: solid/star"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3">
                  <span className="font-medium text-gray-900">
                    Rated 5 stars
                  </span>{" "}
                  by over{" "}
                  <span className="font-medium text-rose-500">
                    322 beta users
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
        <div className="py-16 sm:relative sm:mt-12 sm:py-12 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="hidden sm:block">
            <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" />
            <svg
              className="absolute right-1/2 top-8 -mr-3 lg:left-0 lg:m-0"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
              />
            </svg>
          </div>
          <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none">
            <img
              className="w-full rounded-md lg:h-full lg:w-auto lg:max-w-none"
              src="/images/blade-mail-screenshot.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
