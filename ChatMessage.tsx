import { motion } from "framer-motion";
import { User, Cpu } from "lucide-react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <div className={isUser ? "text-right" : "text-left"}>
      <p>{content}</p>
    </div>
  );
};

export default ChatMessage;
