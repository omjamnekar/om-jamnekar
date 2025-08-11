"use client";

import { posts } from "@/data/posts";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function LatestBlogPosts() {
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="py-20">
      <Container>
        <div className="flex items-center justify-between mb-12">
          <SectionHeading>Latest blog posts</SectionHeading>
          <Link 
            href="/posts"
            className="group flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            <span>View all posts</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {latestPosts.map((post) => (
            <motion.article 
              key={post.slug} 
              variants={item}
              className="group"
            >
              <Link href={`/posts/${post.slug}`} className="block" style={{ textDecoration: 'none' }}>
                <div className="h-full bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1" style={{ textDecoration: 'none' }}>
                  {/* Meta Information */}
                  <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-bold text-xl text-gray-100 mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Summary */}
                  <p className="text-gray-200 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.summary}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-200 border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-300">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
