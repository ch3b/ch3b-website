import { Navigation } from './components/nav';

function LandingTitle() {
  return(
    <p>
      Hi, I&apos;m Cameron
    </p>
  )
}

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
        <h1 className="flex items-center z-10 text-2xl hover:scale-110 text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-white p-5">
          <LandingTitle />
        </h1>
        <div className="my-200 text-center animate-fade-in">
          <h2 className="text-lg text-zinc-500">
            <p>Welcome to my portfolio.</p>
          </h2>
        </div>
      </div>
    </main>
  );
}
