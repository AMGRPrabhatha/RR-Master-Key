import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';
import './Blog.css';
import './Shop.css'; // Reusing page hero styles

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    { 
      title: 'The Evolution of Toyota Raize in the Sri Lankan Market', 
      date: 'October 12, 2025', 
      readTime: '5 min read',
      category: 'Market Trends',
      img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1000',
      content: `
        <p>The Toyota Raize has taken the Sri Lankan automotive market by storm since its introduction. As a compact SUV that perfectly balances urban maneuverability with a commanding road presence, it's no surprise that it has become a favorite among local drivers.</p>
        <p>In this article, we explore the key factors behind its success, including its impressive fuel efficiency, advanced safety features, and the reliability that comes with the Toyota badge. We also look at how its popularity has affected the resale market in Colombo and beyond.</p>
        <p>Whether you're a first-time buyer or looking to upgrade, understanding the Raize's journey in Sri Lanka is essential for any modern motorist.</p>
      `
    },
    { 
      title: 'Why Japanese Domestic Market (JDM) Cars Are Unbeatable', 
      date: 'September 28, 2025', 
      readTime: '7 min read',
      category: 'Guides',
      img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000',
      content: `
        <p>JDM cars have a legendary status among enthusiasts worldwide, and for good reason. Built to the highest standards of Japanese engineering, these vehicles offer a level of performance, reliability, and technological innovation that is often years ahead of international models.</p>
        <p>From the iconic sports cars of the 90s to the ultra-efficient hybrids of today, JDM vehicles represent a commitment to excellence that is hard to find elsewhere. We dive into the specific features that make JDM cars a smart choice for Sri Lankan importers.</p>
        <p>We'll also discuss the rigorous inspection processes (like JEVIC and QISJ) that ensure every car leaving Japan meets the highest quality standards before reaching our shores.</p>
      `
    },
    { 
      title: 'Import Guide: Bringing Your Dream Car from Tokyo to Colombo', 
      date: 'September 15, 2025', 
      readTime: '10 min read',
      category: 'Importing',
      img: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1000',
      content: `
        <p>Importing a vehicle from Japan might seem daunting, but with the right partner, it's a seamless and rewarding process. This comprehensive guide walks you through every step of the journey, from selecting your vehicle at auction to clearing customs in Sri Lanka.</p>
        <p>Learn about the latest import regulations, tax structures, and the necessary documentation required for a successful import. We also provide tips on how to choose a reliable agent and what to look for in auction sheets.</p>
        <p>At RR MasterKey Motors, we handle the complexities so you can focus on the excitement of your new arrival. Discover how our end-to-end service ensures you get the best car at the best price.</p>
      `
    },
  ];

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
        <div className="blog-grid">
          {articles.map((article, idx) => (
            <motion.div 
              className="blog-card"
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedArticle(article)}
            >
              <div className="blog-card-image">
                <span className="blog-category">{article.category}</span>
                <img src={article.img} alt={article.title} />
              </div>
              <div className="blog-card-content">
                <div className="blog-date">
                  <Calendar size={14} style={{ marginRight: '5px' }} /> {article.date}
                </div>
                <h3>{article.title}</h3>
                <div className="blog-card-footer">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            className="blog-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div 
              className="blog-modal"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={() => setSelectedArticle(null)}>
                <X size={24} />
              </button>
              
              <div className="modal-hero">
                <img src={selectedArticle.img} alt={selectedArticle.title} />
              </div>
              
              <div className="modal-body">
                <div className="modal-meta">
                  <span><Calendar size={14} /> {selectedArticle.date}</span>
                  <span><Clock size={14} /> {selectedArticle.readTime}</span>
                  <span style={{ color: 'var(--color-primary)', fontWeight: '700' }}>{selectedArticle.category}</span>
                </div>
                
                <h2>{selectedArticle.title}</h2>
                
                <div 
                  className="modal-content-text"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
