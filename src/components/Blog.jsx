import React, { useState } from 'react'
import { blogPosts } from '../data/blogData'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Blog = () => {
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  const [selectedPost, setSelectedPost] = useState(null)
  
  const BlogCard = ({ post, index }) => {
    const [cardRef, cardRevealed] = useScrollReveal({ threshold: 0.1 })
    
    return (
      <div 
        ref={cardRef}
        onClick={() => handlePostClick(post)}
        className={`glass rounded-xl p-6 backdrop-blur-lg hover:bg-white/40 transition-all transform hover:scale-110 hover:shadow-2xl cursor-pointer h-full flex flex-col scroll-reveal-scale ${cardRevealed ? 'revealed' : ''}`}
        style={{ transitionDelay: `${index * 0.1}s` }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{post.date}</p>
        <p className="text-gray-700 mb-4 flex-grow">{post.description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {post.tags.map((tag, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded transform transition-transform hover:scale-110">
              {tag}
            </span>
          ))}
        </div>
        <span className="text-blue-600 hover:text-blue-700 font-semibold text-sm mt-auto">
          Read more →
        </span>
      </div>
    )
  }

  const handlePostClick = (post) => {
    setSelectedPost(post)
  }

  const handleBack = () => {
    setSelectedPost(null)
  }

  // If a post is selected, show the full content
  if (selectedPost) {
    return (
      <section id="blog" className="container mx-auto px-6 py-16">
        <button
          onClick={handleBack}
          className="mb-6 text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </button>
        <article className="glass rounded-2xl p-8 backdrop-blur-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{selectedPost.title}</h1>
          <p className="text-gray-600 text-sm mb-6">{selectedPost.date}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedPost.tags.map((tag, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">{selectedPost.description}</p>
            {selectedPost.content && (
              <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                {selectedPost.content}
              </div>
            )}
          </div>
        </article>
      </section>
    )
  }

  // Show blog posts grid
  return (
    <section id="blog" className="container mx-auto px-6 py-16">
      <h2 
        ref={titleRef}
        className={`text-4xl font-bold text-gray-900 text-center mb-12 scroll-reveal-up ${titleRevealed ? 'revealed' : ''}`}
      >
        Blog Posts
      </h2>
      {!blogPosts || blogPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No blog posts yet. Add your first post in <code className="bg-gray-200 px-2 py-1 rounded">src/data/blogData.js</code></p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts && blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Blog

