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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        className="w-full h-full fill-text-primary hover:fill-primary transition-all duration-500"
      >
        {/* Abstract geometric logo */}
        <path d="M300,250a50,50,0,0,1-100,.78H150a100,100,0,0,0,200,0h0V76.85a198.63,198.63,0,0,0-50-20.52Z" transform="translate(-50 -50)" />
        <path d="M400,382.13a199.13,199.13,0,0,0,50-131.35h0c0-.26,0-.52,0-.78a199.11,199.11,0,0,0-50-132.11V250c0,82.71-67.29,150-150,150S100,332.71,100,250s67.29-150,150-150V50C139.72,50,50,139.72,50,250s89.72,200,200,200a199.56,199.56,0,0,0,150-67.87Z" transform="translate(-50 -50)" />
        <path d="M100,249.22h0V250C100,249.74,100,249.48,100,249.22Z" transform="translate(-50 -50)" />
      </svg>
    </motion.a>
  )
}

export default Logo 