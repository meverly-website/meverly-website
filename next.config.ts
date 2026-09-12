import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      /*
       * /contact était en production et indexée. La page est supprimée : on
       * redirige en 308 plutôt que de laisser un 404 sur une URL déjà connue
       * des moteurs. Le contact passe désormais par Instagram.
       */
      {
        source: "/contact",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
