import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSend, isLoading }: ChatInputProps) => {
  const [input, setInput] = useState("");

  return (
    <div className="flex gap-2 w-full max-w-2xl">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 bg-transparent border p-2"
      />
      <Button onClick={() => onSend(input)} disabled={isLoading}>
        <Send />
      </Button>
    </div>
  );
};

export default ChatInput;
