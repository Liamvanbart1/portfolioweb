import styles from "./page.module.css";
import Hero from "@/components/Hero";
import About from "@/components/About";
// import Camera from "@/components/Camera";
import Separator from "@/components/Separator";

export default function Home() {
  return (
    <>
      <Hero />
      <Separator />
      <About />
    </>
  );
}
