/** @type {import('next').NextConfig} */
export default {
  output: "standalone",
  // Fix file change polling on docker
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },  
};