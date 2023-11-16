import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../pages/common/navbar";
import EmployeeTab from "./common/employee-tab";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
