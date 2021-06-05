import "../styles/globals.css";
import NavBar from "../components/NavBar";
import { Toaster } from "react-hot-toast";
import { useUserData } from "../hooks/auth";
import { UserContext } from "../helpers/context";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  return (
    <UserContext.Provider value={userData}>
      <NavBar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
