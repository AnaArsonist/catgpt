const props = {
  message:
    "Meow! As a cat, I don't eat grilled cheese. But my human does! Here's a recipe:",
};

function Reply() {
  return (
    <div className="mt-2 scale-95 mr-16">
      <p className="bg-gray-200 rounded-3xl p-3 text-xs">{props.message}</p>
    </div>
  );
}

export default Reply;
