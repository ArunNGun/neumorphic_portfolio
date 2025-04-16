import type { Metadata, Viewport } from "next";
import { metadata as appMetadata, viewport as appViewport } from "./metadata";

export const metadata: Metadata = appMetadata;
export const viewport: Viewport = appViewport;

export default function RootLayoutServer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
