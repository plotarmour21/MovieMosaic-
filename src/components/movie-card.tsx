import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link to={`/movie/${movie.id}`}>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold line-clamp-1">{movie.title}</h3>
              <p className="text-sm text-muted-foreground">
                Rating: {movie.vote_average.toFixed(1)}
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
