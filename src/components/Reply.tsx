import { Agent } from "@/lib/openai";
import { motion } from "framer-motion";

const convertNewLines = (text: string) => {
  const linkRegex = /(^|\s)(https?:\/\/\S+)/g;
  return text.split("\n").map((line, i) => {
    const matches = line.match(linkRegex);
    if (matches) {
      const parts = line.split(linkRegex);
      return (
        <span key={i}>
          {parts.map((part, j) => {
            if (part.match(linkRegex)) {
              return (
                <a
                  className="text-[#8870FF] hover:underline"
                  key={j}
                  href={part.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {part.trim()}
                </a>
              );
            } else {
              return <span key={j}>{part}</span>;
            }
          })}
          <br />
        </span>
      );
    } else {
      return (
        <span key={i}>
          {line}
          <br />
        </span>
      );
    }
  });
};

function Reply({ message, role }: { role: Agent; message: string }) {
  if (!message) return null;
  const formattedMessage = convertNewLines(message);

  if (role === "system") {
    return null;
  }

  if (role === "user") {
    return (
      <motion.div
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 0.2,
          delay: 0.2,
        }}
        className="mt-2 scale-95 flex items-center justify-end"
      >
        <p className="bg-[#B2A4FF] text-white rounded-3xl p-3 px-4">
          {formattedMessage}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      animate={{
        opacity: [0, 1],
      }}
      transition={{
        duration: 0.2,
        delay: 0.2,
      }}
      className="mt-2 scale-95 flex items-center justify-start pr-8"
    >
      <p className="bg-[#DCD6FF] rounded-3xl p-3">{formattedMessage}</p>
    </motion.div>
  );
}

export default Reply;
