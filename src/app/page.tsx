export default function Home() {
  return (
    <div className="h-[2000px]">
      <div className="h-full max-h-72 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-700 opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">
            Welcome to My Website
          </h1>
        </div>
      </div>
    </div>
  );
}
