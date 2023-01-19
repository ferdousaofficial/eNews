const apiKey = process.env.REACT_APP_NEWS_API;

const topicAPI = {
  all: {
    title: "All",
    url: `everything?q=all&apiKey=${apiKey}`,
  },
  business: {
    title: "Business",
    url: `everything?q=business&apiKey=${apiKey}`,
  },
  world: {
    title: "World",
    url: `everything?q=world&apiKey=${apiKey}`,
  },
  health: {
    title: "Health",
    url: `everything?q=health&apiKey=${apiKey}`,
  },
  sports: {
    title: "Sports",
    url: `everything?q=sports&apiKey=${apiKey}`,
  },
  tech: {
    title: "Tech",
    url: `everything?q=tech&apiKey=${apiKey}`,
  },
  entertainment: {
    title: "Entertainment",
    url: `everything?q=entertainment&apiKey=${apiKey}`,
  },
  politics: {
    title: "Politics",
    url: `everything?q=politics&apiKey=${apiKey}`,
  },
};

export default topicAPI;
