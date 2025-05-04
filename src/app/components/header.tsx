import { Container } from "@/components/container";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import { Docker, Flutter, Golang, NextjsIcon, Nodejs, React, Tailwindcss, Typescript } from "./svgs";

export function Header() {
  return (
    <div className="relative overflow-hidden pt-36 pb-10 md:pt-30 md:pb-10 flex items-start md:items-center">
      <Container className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1/2 flex flex-col justify-center after:content-[''] relative after:absolute after:bottom-10 after:-left-90 after:w-[500px] after:h-[300px] after:blur-[300px] after:mr-[-25%] after:mt-[-5%] after:[background:linear-gradient(260deg,green_0%,rgba(115,67,210,0)50%)] ">
            <span className="text-2xl font-bold">Hi! I am Edgar.</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-6 bg-linear-to-r to-[#72ab3a] from-lime-900 dark:from-lime-100 bg-clip-text text-transparent">
              Fullstack Web
              <br /> Developer
            </h1>
            <p className="mt-6">
              I enjoy building websites and innovative reliable systems. I also
              like learning new tools that would make the job done.
            </p>
            <TextGenerateEffect
              className="mt-6 font-bold text text-sm"
              words="Let me help you with your next project."
            />
          </div>
          <div className="flex-1/2 flex justify-center items-center">
            <Image
              src={"/edgar-tolete.webp"}
              alt="Edgar Tolete"
              priority={true}
              width={500}
              height={500}
              className="hidden sm:block"
            />
            <Image
              src={"/edgar-tolete.webp"}
              alt="Edgar Tolete"
              priority={true}
              width={280}
              height={280}
              className="sm:hidden"
            />
          </div>
        </div>
        <TechStack />
      </Container>

    </div>
  );
}

export function TechStack() {
  const size = 40;
  return (
    <div className="flex flex-col gap-2 pt-14">
      <h2 className="text-2xl font-bold text-center">Tech Stack</h2>
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-6 sm:w-xl m-auto">
      <Typescript width={size} height={size}/>
      <Tailwindcss width={size} height={size}/>
      <React width={size} height={size}/>
      <NextjsIcon width={size} height={size}/>
      <Nodejs width={size} height={size}/>
      <Flutter width={size} height={size}/>
      <Golang width={size} height={size}/>
      <Docker width={size} height={size}/>
      </div>
    </div>
  );
}


