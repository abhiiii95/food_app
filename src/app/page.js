import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Food Web App</h1>
    <Link href="/resturant">
    Resturant Page
    </Link>
    </>
  );
}
