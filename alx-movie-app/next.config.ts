import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig: NextConfig = {
  /* config options here */
  /* The code snippet you provided is configuring options for a Next.js application using TypeScript.
Here's an explanation of the specific configuration options: */
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"],
  },
};

export default withPWA({ ...nextConfig });
