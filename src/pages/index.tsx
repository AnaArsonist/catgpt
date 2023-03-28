import ChatBox from "@/components/ChatBox";

function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center purple-bg">
      <img
        src="images/bg.svg"
        className="absolute block min-h-screen min-w-screen object-cover inset-0"
      />
      <ChatBox />
    </div>
  );
}

export default Home;
