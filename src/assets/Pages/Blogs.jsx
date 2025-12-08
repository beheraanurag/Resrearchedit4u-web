import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import MDX posts
import Post15Aug from "../../blog/150825.mdx";
import Post14Aug from "../../blog/150825.mdx";
import Post13Aug from "../../blog/150825.mdx";
import Post12Aug from "../../blog/150825.mdx";
import Post11Aug from "../../blog/150825.mdx";

import BIMG from "../images/blog.webp";

// Blog posts data - shared with BlogPost.jsx
export const posts = [
  {
    id: 1,
    slug: "how-to-write-a-research-problem-statement",
    title: "How to Write a Research Problem Statement",
    date: "Aug 15, 2025",
    cover: BIMG,
    Component: Post15Aug,
    readTime: "5 min read"
  },
  {
    id: 2,
    slug: "team-event-highlights",
    title: "Team Event Highlights",
    date: "Aug 14, 2025",
    cover: BIMG,
    Component: Post14Aug,
    readTime: "3 min read"
  },
  {
    id: 3,
    slug: "office-culture-insights",
    title: "Office Culture Insights",
    date: "Aug 13, 2025",
    cover: BIMG,
    Component: Post13Aug,
    readTime: "4 min read"
  },
  {
    id: 4,
    slug: "project-launch-update",
    title: "Project Launch Update",
    date: "Aug 12, 2025",
    cover: BIMG,
    Component: Post12Aug,
    readTime: "6 min read"
  },
  {
    id: 5,
    slug: "behind-the-scenes",
    title: "Behind the Scenes",
    date: "Aug 11, 2025",
    cover: BIMG,
    Component: Post11Aug,
    readTime: "4 min read"
  },
  {
    id: 6,
    slug: "behind-the-scenes-2",
    title: "Behind the Scenes",
    date: "Aug 11, 2025",
    cover: BIMG,
    Component: Post11Aug,
    readTime: "4 min read"
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#0b1220] py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights, tips, and updates from our team
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {posts.map(({ id, slug, title, date, cover, readTime }) => (
            <Card
              key={id}
              className="bg-black border border-gray-600 rounded-2xl overflow-hidden shadow-lg max-w-[360px] w-full transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <Link to={`/blog/${slug}`} className="block">
                <div className="relative w-full aspect-[12/9] bg-gray-700 overflow-hidden">
                  <img
                    src={cover}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover block transition-transform hover:scale-105"
                  />
                </div>

                <CardContent className="p-5">
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl font-bold m-0 mb-1.5 text-white hover:text-[#025464] transition-colors">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm text-gray-400">{date}</p>
                    <p className="text-xs text-gray-500">{readTime}</p>
                  </div>

                  <Button
                    className="bg-[#025464] text-white rounded-xl px-4 py-2.5 text-sm cursor-pointer transition-all hover:bg-[#006989] shadow-md w-full"
                    asChild
                  >
                    <span>Read more</span>
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
