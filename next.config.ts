import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  // Tắt việc Next tự ghi AGENTS.md/CLAUDE.md vào gốc repo khi chạy dev dưới AI agent.
  agentRules: false,
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
