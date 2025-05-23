import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/Arun_kumar.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Arun_Kumar_Resume.pdf"',
          },
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
