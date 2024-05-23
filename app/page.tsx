import Image from "next/image";

export default function Home() {
  return (
    <div className="prose mx-auto">
      <h1 className="text-5xl font-bold mb-4">Thomas&apos;s Portfolio</h1>
      <p className="mb-8 text-lg">Welcome to my portfolio. This is a work in progress. I hope to have an outline of my work as well as a blog to share some helpful info.</p>

      <div className="flex flex-col gap-4 w-full">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-8/12"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-5/12"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-5/12"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>  
    </div>
  );
}
