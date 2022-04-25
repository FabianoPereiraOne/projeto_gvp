/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_VERCEL_API_KEY: process.env.NEXT_PUBLIC_VERCEL_API_KEY,
    NEXT_PUBLIC_VERCEL_AUTHDOMAIN: process.env.NEXT_PUBLIC_VERCEL_AUTHDOMAIN,
    NEXT_PUBLIC_VERCEL_PROJECT_ID: process.env.NEXT_PUBLIC_VERCEL_PROJECT_ID,
    NEXT_PUBLIC_VERCEL_STORAGE_BUCKET:
      process.env.NEXT_PUBLIC_VERCEL_STORAGE_BUCKET,
    NEXT_PUBLIC_VERCEL_MESSAGING_SENDER_ID:
      process.env.NEXT_PUBLIC_VERCEL_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_VERCEL_APP_ID: process.env.NEXT_PUBLIC_VERCEL_APP_ID,
    DATABASE_URL: process.env.DATABASE_URL
  }
}
