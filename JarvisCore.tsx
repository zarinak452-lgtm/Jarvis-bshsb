import { motion } from "framer-motion";

interface JarvisCoreProps {
  isListening: boolean;
  isProcessing: boolean;
}

const JarvisCore = ({ isListening, isProcessing }: JarvisCoreProps) => {
  return (
    <div className="text-center">
      <div className="text-xl">
        {isListening ? "Listening..." : isProcessing ? "Processing..." : "Ready"}
      </div>
    </div>
  );
};

export default JarvisCore;
