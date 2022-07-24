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

export default defineNextConfig({
  reactStrictMode: true,
  output: "standalone",
  headers() {
    return [
      {
        source: "/:path*",
        headers: [
          ...nextSafe({
            isDev: process.env.NODE_ENV !== "production",
            contentSecurityPolicy: {
              "script-src": ["'self'"],
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
