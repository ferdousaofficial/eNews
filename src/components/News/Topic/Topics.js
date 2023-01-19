export default function Topics({
  topicAPI,
  handleTopicSelection,
  selectedTopic,
}) {
  return (
    <div className="flex space-x-10 items-center xl:justify-center py-14 overflow-x-scroll px-10 scrollbar-hide">
      {Object.keys(topicAPI).map((topic) => {
        return (
          <>
            <button
              key={topic}
              onClick={() => handleTopicSelection(topic)}
              className={`text-white py-2 px-10 cursor-pointer text-center rounded-md transition-all duration-300 hover:scale-110 ${
                topic === selectedTopic ? "bg-activeColor" : "bg-buttonBg"
              }`}
            >
              {topicAPI[topic].title}
            </button>
          </>
        );
      })}
    </div>
  );
}
