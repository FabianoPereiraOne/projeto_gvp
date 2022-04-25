/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_VERCEL_SECRET_KEY: process.env.NEXT_PUBLIC_VERCEL_SECRET_KEY
  }
}
