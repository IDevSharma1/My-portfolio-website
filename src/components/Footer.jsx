import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 text-text-secondary mb-4">
            <span className="text-sm">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-secondary" />
            </motion.div>
            <span className="text-sm">by Dev Sharma</span>
          </div>
          <p className="text-sm text-text-secondary">
            © {currentYear} All rights reserved. Built with React, Framer Motion & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
