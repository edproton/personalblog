/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'user-images.githubusercontent.com',
            },
            {
                hostname: 'github.com'
            }
        ],
    },
    i18n: {
        locales: ['en', 'pt-PT'],
        defaultLocale: 'en',
    }
};

export default nextConfig;
