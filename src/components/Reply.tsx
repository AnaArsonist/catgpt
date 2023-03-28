import { Agent } from "@/lib/openai"

const convertNewLines = (text: string) =>
  text.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ))

function Reply({ message, role}: {role: Agent, message: string}) {

  if (!message) return null
    const formattedMessage = convertNewLines(message)

  if (role === 'system') {
    return null
  }

  if (role === 'user') {
    return (
      <div className="mt-2 scale-95 flex items-center justify-end">
        <p className="bg-[#B2A4FF] text-white rounded-3xl p-3 text-xs">
         {formattedMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="mt-2 scale-95 flex items-center justify-start pr-8">
      <p className="bg-gray-200 rounded-3xl p-3 text-xs">{formattedMessage}</p>
    </div>
  );
}

export default Reply;
