import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-[#0f0f3e] to-black text-white p-8">
      <Image
        src="/vercel.svg" 
        alt="Flux UI Logo"
        width={100}
        height={100}
        className="mb-6"
        style={{
          animation: "spin 10s linear infinite",
        }}
      />
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
        Welcome to Flux UI
      </h1>
      <p className="text-lg sm:text-xl text-center max-w-xl mb-6 text-[#d1d1ff]">
        A futuristic, playful UI component library designed for creatives and bold brands.
        Simple, sleek, and developer-friendly.
      </p>
      <div className="flex gap-4">
        <a
          href="#"
          className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-[#e2e2e2] transition"
        >
          Learn More
        </a>
        <a
          href="#"
          className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
