import "../styles/global.scss";
import "../styles/primary.scss";
import "bootstrap/scss/bootstrap.scss";

import { store } from "../store";
import { Provider } from "react-redux";
import Header from "../component/Header";
import { SessionProvider } from "next-auth/react";

function NextShopping({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default NextShopping;
