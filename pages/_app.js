import "../styles/globals.css";
import "../styles/styles.scss";
import ErrorPage from "../components/ErrorPage";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  if (pageProps.error) {
    return <ErrorPage error={pageProps.error} />;
  }

  return (
    <div id="full-app-container">
      <Header />
      <div id="content-container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
