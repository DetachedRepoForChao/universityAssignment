import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AutoLogoutProvider } from "../components/AutoLogoutProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AutoLogoutProvider>
      <Component {...pageProps} />
    </AutoLogoutProvider>
  );
}
