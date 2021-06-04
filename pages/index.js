import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello World</h1>
      <button onClick={() => toast.success("hello toast!")}>Toast Me</button>
    </div>
  );
}
