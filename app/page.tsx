import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Thomas&apos;s Portfolio</h1>
      <p>A portfolio of Thomas&apos;s work</p>
      <Image
     src="/portfolio/vercel.svg"
     alt="Vercel Logo"
     className={styles.vercelLogo}
     width={100}
     height={24}
     priority
   />
    </main>
  );
}
