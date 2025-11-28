import { motion } from "framer-motion"

export function HeroScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-6 h-10 border-2 border-adm-primary rounded-full flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-3 bg-adm-primary rounded-full mt-2"
        />
      </motion.div>
    </motion.div>
  )
}

