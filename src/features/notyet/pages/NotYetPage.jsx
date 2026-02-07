import { BackgroundBeams } from "@/components/ui/background-beams";

export default function NotYetPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black py-8 overflow-hidden">
      <BackgroundBeams />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-400">
          This feature is not yet available
        </p>
      </div>
    </div>
  );
}
