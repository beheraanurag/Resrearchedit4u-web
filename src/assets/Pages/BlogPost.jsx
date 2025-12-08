import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { posts } from "./Blogs";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the post by slug
  const post = posts.find((p) => p.slug === slug);

  // If post not found, show 404
  if (!post) {
    return (
      <div className="min-h-screen bg-[#0b1220] text-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-gray-400 mb-6">Blog post not found</p>
          <Button
            onClick={() => navigate("/blogs")}
            className="bg-[#025464] text-white hover:bg-[#006989]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Button>
        </div>
      </div>
    );
  }

  const { title, date, cover, Component, readTime } = post;

  // Find previous and next posts
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#0b1220] text-white">
      {/* Header with back button */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Button
          onClick={() => navigate("/blogs")}
          variant="ghost"
          className="text-gray-400 hover:text-white mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blogs
        </Button>
      </div>

      {/* Cover Image */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-8">
        <div className="relative w-full aspect-[16/9] bg-gray-700 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={cover}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 pb-12">
        {/* Title and Meta */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>
        </header>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Blog Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="leading-7 text-gray-200 [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&_p]:text-gray-200 [&_li]:text-gray-200 [&_a]:text-[#025464] [&_a]:hover:text-[#006989] [&_strong]:text-white [&_code]:bg-gray-800 [&_code]:text-[#025464] [&_pre]:bg-gray-900 [&_blockquote]:border-l-4 [&_blockquote]:border-[#025464] [&_blockquote]:pl-4 [&_blockquote]:italic">
            <Component />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 mb-8"></div>

        {/* Navigation between posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {previousPost && (
            <Button
              onClick={() => navigate(`/blog/${previousPost.slug}`)}
              variant="outline"
              className="text-left h-auto p-4 border-gray-700 hover:bg-gray-800"
            >
              <div>
                <p className="text-xs text-gray-400 mb-1">Previous Post</p>
                <p className="text-sm font-semibold">{previousPost.title}</p>
              </div>
            </Button>
          )}
          {nextPost && (
            <Button
              onClick={() => navigate(`/blog/${nextPost.slug}`)}
              variant="outline"
              className="text-left md:text-right h-auto p-4 border-gray-700 hover:bg-gray-800 md:ml-auto"
            >
              <div className="md:text-right">
                <p className="text-xs text-gray-400 mb-1">Next Post</p>
                <p className="text-sm font-semibold">{nextPost.title}</p>
              </div>
            </Button>
          )}
        </div>

        {/* Back to Blogs Button */}
        <div className="flex justify-center">
          <Button
            onClick={() => navigate("/blogs")}
            className="bg-[#025464] text-white hover:bg-[#006989] px-6 py-3"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Blogs
          </Button>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
