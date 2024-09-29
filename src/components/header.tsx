import { motion } from "framer-motion";
import { Film } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full"
    >
      <div className="container flex h-10 items-center justify-center bg-sky-500 mx-auto px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Film className="h-6 w-6" />
          <span className="font-bold">MovieMosaic</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="/popular"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Popular
          </Link>
          <Link
            href="/top-rated"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Top Rated
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
