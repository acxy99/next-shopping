import "../styles/global.scss";
import "../styles/primary.scss";
import "bootstrap/scss/bootstrap.scss";

import { store } from "../store";
import { Provider } from "react-redux";
import Header from "../component/Header";

function NextShopping({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default NextShopping;
