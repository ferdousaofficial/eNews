import React, { useState, useEffect } from "react";
import topicAPI from "./Topic/TopicAPI";
import Loding from "./Loding";
import MoreNews from "./MoreNews";
import News from "./News";
import Topics from "./Topic/Topics";

export default function NewsItem() {
  const [data, setData] = useState(null);
  const [newLimit, setNewsLimit] = useState(12);
  const [selectedTopic, setSelectedTopic] = useState("business");

  useEffect(() => {
    // const apiKey = process.env.REACT_APP_NEWS_API;

    const fetchData = async function () {
      const topic = topicAPI[selectedTopic];

      const response = await fetch(
        `https://newsapi.org/v2/${topic.url}&pageSize=${newLimit}
        `
      );
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [selectedTopic, newLimit]);

  if (!data) {
    return <Loding />;
  }

  // increment News Limit
  const incrementNewsLimit = function () {
    const count = newLimit + 12;
    setNewsLimit(count);
  };

  // function to handle topic selection
  const handleTopicSelection = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <>
      <Topics
        topicAPI={topicAPI}
        handleTopicSelection={handleTopicSelection}
        selectedTopic={selectedTopic}
      />
      <News data={data} topic={selectedTopic} />
      <MoreNews incrementNewsLimit={incrementNewsLimit} />
    </>
  );
}
