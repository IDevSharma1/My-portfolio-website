import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const SponsorLink = () => {
  return (
    <motion.a
      href="https://github.com/sponsors"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-12 left-12 flex items-center gap-2 text-text-secondary hover:text-primary transition-all duration-500 z-50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
      >
        <Heart className="w-4 h-4 fill-secondary" />
      </motion.div>
      <span className="text-sm mono">Sponsor</span>
    </motion.a>
  )
}

export default SponsorLink 