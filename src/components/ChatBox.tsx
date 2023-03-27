import { ArrowNarrowUpIcon } from "@heroicons/react/solid";
import Reply from "./Reply";

function ChatBox() {
  return (
    <div>
      <div className="w-80 border-gray-200 shadow-sm border-2 p-4 rounded-2xl overflow-hidden">
        {/* <!--  Message header section starts    --> */}
        <div className="msg-header flex gap-8 items-center">
          <div className="h-12 w-12 justify-center items-center rounded-full border-2">
            <img className="scale-75" src="/images/cat-face.png" />
          </div>
          <div className="user-info">
            <h3 className="user-name text-gray-400 text-sm font-medium">
              CatGPT
            </h3>
            <p className="user-status text-green-400 text-xs animate-pulse">
              Active now
            </p>
          </div>
        </div>
        {/* {/* <!-- Message header section ends --> */}
        <div className="mt-2 bg-gray-300 w-72 h-[1.75px]"></div>
        {/* <!-- Chat inbox section starts --> */}
        <div className="chat-page">
          <div className="msg-inbox">
            <div className="chats h-64">
              <div className="msg-page mt-6">
                {/* <!-- Contains the incoming and outgoing messages --> */}
                <div className="msg">
                  <div className="scale-95 mr-16">
                    <p className="bg-gray-200 rounded-3xl p-3 text-xs">
                      Hi I'm CatGPT, what can I help you with?
                    </p>
                  </div>
                  <div className="mt-2 scale-95 ml-16">
                    <p className="bg-[#B2A4FF] text-white rounded-3xl p-3 text-xs">
                      Hi CatGPT, can I have a recipe for grilled cheese?
                    </p>
                  </div>
                  <Reply />
                </div>
              </div>
            </div>

            {/* <!--  Message bottom section starts --> */}
            <div className="msg-bottom mt-2">
              <div className="msg-input flex gap-2 items-center">
                <input
                  className="bg-[gray-200] border-2 rounded-3xl p-3 w-full text-xs"
                  placeholder="Type a message"
                />
                <button className="bg-[#B2A4FF] text-xs text-white rounded-full p-3">
                  <ArrowNarrowUpIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
