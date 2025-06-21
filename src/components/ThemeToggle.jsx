import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = ({ isDark, setIsDark }) => {
  return (
    <motion.button
      className="absolute bottom-12 right-12 w-10 h-10 bg-dark-gray hover:bg-primary text-text-primary rounded-full shadow-lg flex items-center justify-center transition-all duration-500 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle 