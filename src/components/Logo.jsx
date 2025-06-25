import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <motion.a
      href="#"
      className="absolute top-12 left-12 w-10 h-10 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      title="Portfolio"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full fill-text-primary hover:fill-primary transition-all duration-500">
  <path d="M30 20 V80 Q80 50 30 20 Z M40 30 H50 Q60 50 40 70 Z" />
</svg>
    </motion.a>
  )
}

export default Logo 