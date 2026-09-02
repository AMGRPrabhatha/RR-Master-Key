import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Blog.css';
import './Shop.css'; // Reusing page hero styles

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedArticle]);

  const articles = [
    { 
      id: 1,
      title: 'The Evolution of Toyota Raize in the Sri Lankan Market', 
      date: '12 October 2025', 
      author: 'John Doe',
      authorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      category: 'Market Trends',
      excerpt: 'The Toyota Raize has taken the Sri Lankan automotive market by storm. Here is how to secure yours!',
      img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1000',
      content: `
        <p>The Toyota Raize has taken the Sri Lankan automotive market by storm since its introduction. As a compact SUV that perfectly balances urban maneuverability with a commanding road presence, it's no surprise that it has become a favorite among local drivers.</p>
        <p>In this article, we explore the key factors behind its success, including its impressive fuel efficiency, advanced safety features, and the reliability that comes with the Toyota badge. We also look at how its popularity has affected the resale market in Colombo and beyond.</p>
        <p>Whether you're a first-time buyer or looking to upgrade, understanding the Raize's journey in Sri Lanka is essential for any modern motorist.</p>
      `
    },
    { 
      id: 2,
      title: 'Why Japanese Domestic Market (JDM) Cars Are Unbeatable', 
      date: '28 September 2025', 
      author: 'Jane Smith',
      authorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      category: 'Guides',
      excerpt: 'RR MasterKey provides luxury vehicle sourcing. Here is what you need to know before booking your import...',
      img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000',
      content: `
        <p>JDM cars have a legendary status among enthusiasts worldwide, and for good reason. Built to the highest standards of Japanese engineering, these vehicles offer a level of performance, reliability, and technological innovation that is often years ahead of international models.</p>
        <p>From the iconic sports cars of the 90s to the ultra-efficient hybrids of today, JDM vehicles represent a commitment to excellence that is hard to find elsewhere. We dive into the specific features that make JDM cars a smart choice for Sri Lankan importers.</p>
        <p>We'll also discuss the rigorous inspection processes (like JEVIC and QISJ) that ensure every car leaving Japan meets the highest quality standards before reaching our shores.</p>
      `
    },
    { 
      id: 3,
      title: 'Import Guide: Bringing Your Dream Car from Tokyo to Colombo', 
      date: '15 September 2025', 
      author: 'Michael Lee',
      authorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      category: 'Importing',
      excerpt: 'Did you know that importing a vehicle to Sri Lanka can be fully handled by our experts in just a few steps?',
      img: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1000',
      content: `
        <p>Importing a vehicle from Japan might seem daunting, but with the right partner, it's a seamless and rewarding process. This comprehensive guide walks you through every step of the journey, from selecting your vehicle at auction to clearing customs in Sri Lanka.</p>
        <p>Learn about the latest import regulations, tax structures, and the necessary documentation required for a successful import. We also provide tips on how to choose a reliable agent and what to look for in auction sheets.</p>
        <p>At RR MasterKey Motors, we handle the complexities so you can focus on the excitement of your new arrival. Discover how our end-to-end service ensures you get the best car at the best price.</p>
      `
    },
  ];

  if (selectedArticle) {
    const recommended = articles.filter(a => a.id !== selectedArticle.id);
    return (
      <div className="page-wrapper blog-detail-wrapper">
        <div className="slim-nav-bg"></div>
        <div className="container blog-detail-container">
          <div className="blog-detail-layout">
            
            <div className="blog-detail-main">
              <h1 className="blog-detail-title">{selectedArticle.title}</h1>
              
              <div className="blog-detail-author">
                <img src={selectedArticle.authorImg} alt={selectedArticle.author} />
                <div className="author-text">
                  <div className="author-name">{selectedArticle.author}</div>
                  <div className="author-date">Last updated {selectedArticle.date}</div>
                </div>
              </div>
              
              <img className="blog-detail-hero-img" src={selectedArticle.img} alt={selectedArticle.title} />
              
              <div 
                className="blog-detail-content"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </div>
            
            <div className="blog-detail-sidebar">
              <h3 className="sidebar-title">Recommended for you</h3>
              <div className="sidebar-list">
                {recommended.map(rec => (
                  <div className="sidebar-item" key={rec.id} onClick={() => setSelectedArticle(rec)}>
                    <img src={rec.img} alt={rec.title} />
                    <div className="sidebar-item-text">
                      <h4>{rec.title}</h4>
                      <span>{rec.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper blog-page">
      <div className="modern-page-hero">
        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" alt="Driving" className="modern-hero-bg" />
        <div className="page-header">
          <div className="container">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              MasterKey Insights
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Your ultimate guide to premium Japanese vehicle importation.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container section-padding">
        <div className="featured-posts-header">
          <h2>Featured posts</h2>
        </div>
        
        <div className="new-blog-grid">
          {articles.map((article, idx) => (
            <div 
              className="new-blog-card"
              key={idx} 
              onClick={() => setSelectedArticle(article)}
            >
              <img src={article.img} alt={article.title} className="new-blog-img" />
              <div className="new-blog-category">{article.category}</div>
              <h3 className="new-blog-title">{article.title}</h3>
              <p className="new-blog-excerpt">{article.excerpt}</p>
              <div className="new-blog-date">{article.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
