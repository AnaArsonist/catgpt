import ChatBox from "@/components/ChatBox";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="flex-col h-screen w-screen flex items-center justify-center purple-bg font-nunito">
      <img
        src="images/bg.svg"
        className="absolute block min-h-screen min-w-screen object-cover inset-0"
      />
      <ChatBox />
      <div className="sm:absolute sm:bottom-0 p-4 sm:p-0 z-10 sm:right-0 sm:mb-4 sm:mr-4 flex gap-2 items-center group">
        <div className="hidden sm:block transition-all duration-300 text-white/0 group-hover:text-white/60">
          follow me on twitter! 🐱
        </div>
        <a
          href="https://twitter.com/AnaArsonist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-8 h-8 hover:scale-110 hover:rotate-[-12deg] duration-300 transition-all text-white/80 hover:text-white/90 fill-current"
            width="256px"
            height="209px"
            viewBox="0 0 256 209"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path d="M256,25.4500259 C246.580841,29.6272672 236.458451,32.4504868 225.834156,33.7202333 C236.678503,27.2198053 245.00583,16.9269929 248.927437,4.66307685 C238.779765,10.6812633 227.539325,15.0523376 215.57599,17.408298 C205.994835,7.2006971 192.34506,0.822 177.239197,0.822 C148.232605,0.822 124.716076,24.3375931 124.716076,53.3423116 C124.716076,57.4586875 125.181462,61.4673784 126.076652,65.3112644 C82.4258385,63.1210453 43.7257252,42.211429 17.821398,10.4359288 C13.3005011,18.1929938 10.710443,27.2151234 10.710443,36.8402889 C10.710443,55.061526 19.9835254,71.1374907 34.0762135,80.5557137 C25.4660961,80.2832239 17.3681846,77.9207088 10.2862577,73.9869292 C10.2825122,74.2060448 10.2825122,74.4260967 10.2825122,74.647085 C10.2825122,100.094453 28.3867003,121.322443 52.413563,126.14673 C48.0059695,127.347184 43.3661509,127.988612 38.5755734,127.988612 C35.1914554,127.988612 31.9009766,127.659938 28.694773,127.046602 C35.3777973,147.913145 54.7742053,163.097665 77.7569918,163.52185 C59.7820257,177.607983 37.1354036,186.004604 12.5289147,186.004604 C8.28987161,186.004604 4.10888474,185.75646 0,185.271409 C23.2431033,200.173139 50.8507261,208.867532 80.5109185,208.867532 C177.116529,208.867532 229.943977,128.836982 229.943977,59.4326002 C229.943977,57.1552968 229.893412,54.8901664 229.792282,52.6381454 C240.053257,45.2331635 248.958338,35.9825545 256,25.4500259"></path>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Home;
