export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col p-5 md:p-14 mt-10 mb-10 md:mt-20 max-w-xs sm:max-w-sm md:max-w-6xl md:w-8/12 bg-card rounded-xl text-white">
      {children}
    </div>
  );
}
