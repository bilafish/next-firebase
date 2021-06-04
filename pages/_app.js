import "../styles/globals.css";
import NavBar from "../components/NavBar";
import { Toaster } from "react-hot-toast";

import { UserContext } from "../helpers/context";

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={{}}>
      <NavBar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
