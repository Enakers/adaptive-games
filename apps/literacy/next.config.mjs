/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
import nextSafe from "next-safe";

function defineNextConfig(config) {
  return config;
}

const isDev = process.env.NODE_ENV !== "production";

export default defineNextConfig({
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"]
  },
  output: "standalone",
  headers() {
    return [
      {
        source: "/:path*",
        headers: [
          ...nextSafe({
            isDev,
            contentSecurityPolicy: {
              "script-src": ["'sha256-fDVtD703YIdPFRhb6ZJE/SvcwyA7gZRWfRRM6K6r9EA='", "'self'"],
              "img-src": ["'self'", "data:"]
            }
          }),
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload"
          }
        ]
      }
    ];
  }
});
