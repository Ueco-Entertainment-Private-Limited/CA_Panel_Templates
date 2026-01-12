import { motion } from "motion/react";

export default function App() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="p-10"
    >
      <div className="bg-primary text-primary-foreground p-4 rounded-lg">
        Motion is Working
      </div>
    </motion.div>
  )
}
