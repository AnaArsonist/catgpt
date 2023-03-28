import ChatBox from "@/components/ChatBox";

function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <div className="lg:scale-150">
        <ChatBox />
      </div>
    </div>
  );
}

export default Home;
