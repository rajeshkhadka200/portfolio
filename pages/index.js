import Head from "next/head";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rajesh Khadka</title>
        <meta
          name="description"
          content="Rajesh khadka, a web developer from nepal"
        />
      </Head>
      {/* hero section  */}
      <HeroSection />
    </>
  );
}
