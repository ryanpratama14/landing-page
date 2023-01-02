import { motion } from "framer-motion";
import "./App.css";
import Cases from "./pages/Cases";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Cases />
    </motion.div>
  );
}

export default App;
