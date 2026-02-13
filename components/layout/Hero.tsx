import {
  ChevronRight,
  FileText,
  Github,
  Globe,
  Instagram,
  Link,
  MoveRight,
  SquarePlay,
} from "lucide-react";
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="flex gap-4 bg-surface bg-grid-fade py-40 w-full">
      <div className="md:flex-2/4 p-4">
      <h1 className="text-3xl sm:text-5xl font-semibold text-left py-8 ">
        Your Second Brain for Everything You Find Online.
      </h1>

      <p className="mt-4 md:text-base text-text-secondary text-left">
        Save Videos, Tweets, Links, Articles & Documents — All in One
        Beautifully Organized Space.
      </p>
      <div className="flex gap-4 py-10 ">
         <a href=""
          className="px-6 py-3 rounded-xl w-40 h-12 text-sm font-normal border bg-surface border-border items-center justify-center shadow-md flex cursor-pointer "
        >
          Get Extension 
        </a>
        <button
          onClick={() => router.push("/login")}
          className="px-6 py-3 rounded-xl bg-primary w-40 h-12 text-sm  font-normal text-white flex  items-center justify-center gap-1 cursor-pointer "
        >
          Get Started <ChevronRight size={20} strokeWidth={2}/>
        </button>
      </div>

      </div>
      <div className="flex justify-center flex-2/4">
      
      </div>
          {/* <p className="mt-4 text-sm text-text-secondary text-center">
  The extension saves pages instantly — nothing is shared publicly.
</p> */}
    </section>
  );
}



