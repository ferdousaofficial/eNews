import React from "react";

export default function News({ data }) {
  return (
    <div className="flex flex-wrap justify-center py-3 items-center ">
      {data.articles.map((article, index) => (
        <div
          key={index}
          className=" w-[360px] bg-white rounded-xl h-[430px] mx-5 my-7 relative"
        >
          <img src={article.urlToImage} alt="" className="w-full rounded-t-xl " />
          <div className="px-3 py-3 ">
            <h3 className=" font-bold text-[20px] pb-5 text-textColor">
              {article.title}
            </h3>
            <div className="absolute left-3 bottom-8">
              <span className="text-main pb-5 block">
                Source: {article.source.name}
              </span>
              <a
                href={article.url}
                target="_blank"
                className="bg-buttonBg text-white px-8 py-3 rounded-md my-10 transition-all duration-300 border-2 border-buttonBg hover:bg-transparent hover:text-main"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
