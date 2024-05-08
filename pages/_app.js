import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Fragment } from "react";
// Import css files
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const Layout = dynamic(() => import("../component/layout"), {
  ssr: true,
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      {/* <ErrorBoundary> */}
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
      {/* </ErrorBoundary> */}
    </Fragment>
  );
};

export default MyApp;
