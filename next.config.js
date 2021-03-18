module.exports = {
  async rewrites() {
    return process.env.APP_NAME === "first_app"
      ? [
          {
            source: "/api/:path*",
            destination: "/api/:path*",
          },
          {
            source: "/:path*",
            destination: "/first-app/:path*",
          },
          {
            source: "/",
            destination: "/first-app",
          },
        ]
      : [
            {
                source: "/api/:path*",
                destination: "/api/:path*",
            },
            {
                source: "/:path*",
                destination: "/second-app/:path*",
            },
            {
                source: "/",
                destination: "/second-app",
            },
        ];
  },

  async redirects() {
    return process.env.APP_NAME === "first_app"
      ? [
          {
            source: "/second-app",
            destination: "/error",
            permanent: false,
          },
        ]
      : [
          {
            source: "/first-app",
            destination: "/error",
            permanent: false,
          },
        ];
  },
};
