import { ArrowNarrowUpIcon } from "@heroicons/react/solid";
import Reply from "./Reply";
import { useState, useRef } from "react";
import { Message } from "@/lib/openai";
import { motion } from "framer-motion";

function ChatBox() {
  const messagesRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  console.log(messages);
  // send message to API /api/chat endpoint
  const sendMessage = async () => {
    setLoading(true);

    const newMessages = [
      ...messages,
      { role: "user", content: message } as Message,
    ];

    setMessage("");

    setMessages(newMessages);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: newMessages.slice(-10), // remember last 10 messages
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    if (!response.body) return;

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let done = false;

    let lastMessage = "";

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);

      lastMessage = lastMessage + chunkValue;

      setMessages([
        ...newMessages,
        { role: "assistant", content: lastMessage } as Message,
      ]);

      messagesRef.current?.scrollIntoView({ block: "end" });

      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-[80vh] sm:h-fit sm:w-96 p-4 rounded-2xl bg-white/20 backdrop-filter backdrop-blur-lg backdrop-saturate-150">
      <div className="h-full flex flex-col sm:h-fit bg-gray-100 border-gray-200 shadow-sm border-2 p-4 rounded-2xl">
        {/* <!--  Message header section starts    --> */}
        <div className="msg-header flex gap-8 items-center">
          <div className="h-12 w-12 justify-center items-center rounded-full border-2">
            <img className="scale-75" src="/images/cat-face.png" />
          </div>
          <div className="">
            <h3 className="text-[#8870FF] text-base font-bold">CatGPT</h3>
            <p className="text-green-400 text-xs animate-pulse">Active now</p>
          </div>
        </div>
        {/* {/* <!-- Message header section ends --> */}
        <div className="mt-2 bg-gray-300 w-72 h-[1.75px]"></div>
        {/* <!-- Chat inbox section starts --> */}
        <div className="grow md:h-[52vh]">
          <div className="h-full">
            <div className="h-full overflow-auto scrollbar" id="style-1">
              <div className="mt-6 transition-all">
                {/* <!-- Contains the incoming and outgoing messages --> */}
                <div ref={messagesRef} className="">
                  <motion.div
                    animate={{
                      opacity: [0, 1],
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2,
                    }}
                    className="scale-95 mr-16"
                  >
                    <p className="bg-gray-200 rounded-3xl p-3 text-base">
                      Hi I'm CatGPT, what can I help you with?
                    </p>
                  </motion.div>

                  {messages.map((message, index) => (
                    <Reply
                      key={index}
                      message={message.content}
                      role={message.role}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* <!--  Message bottom section starts --> */}
          </div>
        </div>
        <div className="msg-bottom mt-2">
          <div className="msg-input flex gap-2 items-center">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              className="bg-gray-200 border-2 rounded-3xl p-3 w-full text-base focus:outline-none"
              placeholder="Type a message"
            />
            <button
              onClick={sendMessage}
              className="bg-[#B2A4FF] text-base text-white rounded-full p-3"
            >
              <ArrowNarrowUpIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
