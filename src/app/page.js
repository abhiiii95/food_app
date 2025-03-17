import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import MainHeader from "@/components/MainHeader/MainHeader";
import HomeBanner from "@/components/HomeModule/HomeBanner/HomeBanner";

export default function Home() {
  return (
    <>
    <MainHeader />
    <HomeBanner />
    </>
  );
}
