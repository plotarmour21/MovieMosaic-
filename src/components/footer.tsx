import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center">
        <p className="text-sm text-muted-foreground">
          © 2023 MovieMosaic. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}