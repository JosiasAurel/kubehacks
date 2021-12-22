import React from "react";

import "../styles/global.css";

import { Toaster } from "react-hot-toast";

const KubeHacksApp = ({ Component, pageProps }) => {
  return (
    <>
    <Component {...pageProps} />
    <Toaster />
    </>
  )
};

export default KubeHacksApp;
