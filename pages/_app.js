import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

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
