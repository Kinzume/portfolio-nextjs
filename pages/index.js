import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leander | Web Developer</title>
        <meta
          name="description"
          content="Leander Abaya - Web Developer - Projects"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />
      </Head>
      <Main />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
