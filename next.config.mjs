// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     module.exports = {
//         images: {
//           remotePatterns: [
//             {
//               protocol: 'https',
//               hostname: '**.example.com',
//               port: '',
//               search: '',
//             },
//           ],
//         },
//       }
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'm.media-amazon.com',
        },
      ],
    },
  };
  
  export default nextConfig;
  
