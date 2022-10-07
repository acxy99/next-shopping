import "../styles/global.scss";
import "../styles/primary.scss";
import "bootstrap/scss/bootstrap.scss";

import { store } from "../store";
import { Provider } from "react-redux";

function NextShopping({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default NextShopping;
