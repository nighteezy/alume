import { ReactNode } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import "../styles/globals.scss";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="eng">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ALUME </title>
      </head>
      <body>
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
