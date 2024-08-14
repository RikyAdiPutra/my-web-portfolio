"use client";

import { useState, useEffect } from "react";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  const images = ["/images/img2.jpg", "/images/img4.jpg", "/images/img3.png"];

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rikyadiputra76"
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.items);
      })
      .catch((error) => {
        console.error("Error fetching Medium articles:", error);
      });
  }, []);

  return (
    <section id="articles" className="py-16 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-100 mb-8 text-center font-hind">
          My Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gray-900 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={images[index]}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-2 font-hind">
                  {article.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {new Date(article.pubDate).toLocaleDateString()}
                </p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-700 font-semibold font-hind"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
