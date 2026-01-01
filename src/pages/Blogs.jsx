import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight, Loader } from 'lucide-react';
import SEO from '../components/SEO';

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ravishkaindrajith9.9'
        );
        const data = await response.json();

        if (data.status === 'ok') {
          const formattedPosts = data.items.map((item, index) => {
            // Create a temporary element to strip HTML from description
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = item.description;
            const plainText = tempDiv.textContent || tempDiv.innerText || '';
            const excerpt = plainText.substring(0, 150) + '...';

            // Extract first image from content if thumbnail is missing
            let image = item.thumbnail;
            if (!image) {
              const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
              if (imgMatch) {
                image = imgMatch[1];
              }
            }

            return {
              id: index,
              title: item.title,
              excerpt: excerpt,
              date: new Date(item.pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              }),
              readTime: '5 min read', // Medium RSS doesn't provide read time, defaulting
              tags: item.categories,
              image: image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
              link: item.link
            };
          });
          setPosts(formattedPosts);
        } else {
          setError('Failed to fetch blogs');
        }
      } catch (err) {
        setError('Error loading blogs');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="blogs-section">
      <SEO
        title="Blogs"
        description="Read my latest thoughts and tutorials on web development, design, and technology."
      />
      <div className="blogs-container">
        <motion.div
          className="blogs-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Latest Insights</h1>
          <p className="section-subtitle">Thoughts, tutorials, and tech trends from Medium.</p>
        </motion.div>

        {loading ? (
          <div className="loading-container">
            <Loader className="spinner" size={40} />
          </div>
        ) : error ? (
          <div className="error-container">
            <p>{error}</p>
          </div>
        ) : (
          <motion.div
            className="blogs-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {posts.map((post) => (
              <motion.article
                key={post.id}
                className="blog-card"
                variants={itemVariants}
                whileHover={{ y: -10, borderColor: 'var(--primary-color)' }}
                onClick={() => window.open(post.link, '_blank')}
              >
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-overlay">
                    <span className="read-btn">Read Article <ArrowRight size={16} /></span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date"><Calendar size={14} /> {post.date}</span>
                    {/* <span className="blog-time"><Clock size={14} /> {post.readTime}</span> */}
                  </div>
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-tags">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>

      <style>{`
        .blogs-section {
          padding: 120px 2rem 4rem;
          background: var(--bg-color);
          min-height: 100vh;
        }

        .blogs-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .blogs-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 1rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.2rem;
        }

        .loading-container, .error-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 200px;
          color: var(--text-secondary);
        }

        .spinner {
          animation: spin 1s linear infinite;
          color: var(--primary-color);
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
        }

        .blog-card {
          background: var(--surface-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .blog-card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .blog-image {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .blog-card:hover .blog-image img {
          transform: scale(1.1);
        }

        .blog-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .blog-card:hover .blog-overlay {
          opacity: 1;
        }

        .read-btn {
          color: white;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: var(--primary-color);
          border-radius: 30px;
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }

        .blog-card:hover .read-btn {
          transform: translateY(0);
        }

        .blog-content {
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .blog-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .blog-date, .blog-time {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .blog-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .blog-excerpt {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .blog-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .blog-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        @media (max-width: 768px) {
          .blogs-grid {
            grid-template-columns: 1fr;
          }
          
          .blogs-section {
            padding: 100px 1.5rem 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Blogs;
