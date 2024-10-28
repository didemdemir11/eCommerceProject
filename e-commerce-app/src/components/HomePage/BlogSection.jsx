import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faComment } from "@fortawesome/free-solid-svg-icons";

const blogPosts = [
  {
    id: 1,
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
    imageUrl: "/images/contentcard1.jpg",
  },
  {
    id: 2,
    title: "The Future of Work",
    description:
      "Explore the innovations transforming workspaces across the globe.",
    date: "18 April 2021",
    comments: "8 comments",
    imageUrl: "/images/contentcard2.jpg",
  },
  {
    id: 3,
    title: "Understanding AI",
    description:
      "Delve into the world of artificial intelligence and its impact on society.",
    date: "15 April 2021",
    comments: "15 comments",
    imageUrl: "/images/contentcard3.jpg",
  },
];

const BlogSection = () => {
  return (
    <section className="p-4 bg-white text-center">
      {/* Başlık Alanı */}
      <h6 className="text-[#23A6F0] font-bold text-sm mb-2">Practice Advice</h6>
      <h2 className="text-[#252B42] font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
        Featured Products
      </h2>
      <h4 className="text-[#737373] font-normal text-sm sm:text-lg md:text-xl mb-10">
        Problems trying to resolve the conflict between the two major
      </h4>

      {/* Content Kartları */}
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-2.5 max-w-6xl mx-auto px-4">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="content-card bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs mx-auto md:max-w-sm"
            style={{ width: "100%", height: "auto" }}
          >
            {/* Görsel ve NEW Etiketi */}
            <div className="relative h-48 md:h-64">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-5 left-5 bg-[#E74040] text-white text-xs font-semibold px-2 py-1 rounded-md">
                NEW
              </span>
            </div>

            {/* İçerik Alanı */}
            <div className="p-6 text-left space-y-4">
              <h4 className="text-lg font-bold text-[#252B42]">{post.title}</h4>
              <p className="text-[#737373] text-sm">{post.description}</p>

              {/* Tarih ve Yorumlar */}
              <div className="flex items-center text-sm text-[#737373] space-x-4">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faClock} className="mr-1" />{" "}
                  {post.date}
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faComment} className="mr-1" />{" "}
                  {post.comments}
                </div>
              </div>

              {/* Learn More Butonu */}
              <a
                href="#"
                className="text-[#737373] font-semibold text-sm flex items-center"
              >
                Learn More <span className="text-[#23A6F0] ml-2">&gt;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
