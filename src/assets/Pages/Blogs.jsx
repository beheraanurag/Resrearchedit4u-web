import React, { useState } from 'react';
import '../../assets/style/style.css';

// Import MDX posts (reuse or add more MDX files as needed)
import Post15Aug from '../../blog/150825.mdx';

const samplePosts = [
  {
    id: 1,
    title: '10 Skincare Tips for Glowing Skin',
    excerpt: 'Simple daily habits and product tips to maintain healthy, glowing skin.',
    image: 'https://images.pexels.com/photos/beauty-291705/pexels-photo-291705.jpeg',
    category: 'Skincare'
  },
  {
    id: 2,
    title: 'How to Choose Right Sunscreen',
    excerpt: 'A quick guide to SPF, PA and broad-spectrum protection for every skin type.',
    image: 'https://images.pexels.com/photos/sunscreen-347878/pexels-photo-347878.jpeg',
    category: 'Sun Care'
  },
  {
    id: 3,
    title: 'Natural Remedies for Dry Hair',
    excerpt: 'Home masks and oils that bring back shine and strength.',
    image: 'https://images.pexels.com/photos/hair-260590/pexels-photo-260590.jpeg',
    category: 'Haircare'
  },
  {
    id: 4,
    title: 'Healthy Baby Skincare Routine',
    excerpt: 'Safe and gentle routines for baby skin. Pediatrician-approved tips.',
    image: 'https://images.pexels.com/photos/baby-lying-down-264969/pexels-photo-264969.jpeg',
    category: 'Baby Care'
  }
];

const BlogMimic = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // attach Component to posts (demo using Post15Aug for all)
  const postsWithComponent = samplePosts.map((p) => ({ ...p, Component: Post15Aug }));

  return (
    <div className="mimic-container">
      <div className="mimic-hero">
        <div className="mimic-hero-left">
          <h1>From the blog</h1>
          <p className="mimic-hero-sub">Latest tips, product guides and how-tos for self-care.</p>
        </div>
        <div className="mimic-hero-right">
          <img src="https://images.pexels.com/photos/60597/pexels-photo-60597.jpeg" alt="hero" />
        </div>
      </div>

      <section className="mimic-featured">
        <div className="mimic-featured-img">
          <img src={samplePosts[0].image} alt="featured" />
        </div>
        <div className="mimic-featured-body">
          <p className="mimic-category">{samplePosts[0].category}</p>
          <h2 className="mimic-title">{samplePosts[0].title}</h2>
          <p className="mimic-excerpt">{samplePosts[0].excerpt}</p>
          <button className="mimic-cta" onClick={() => setSelectedIndex(0)}>Read full article</button>
        </div>
      </section>

      <div className="mimic-grid">
        {postsWithComponent.slice(1).map((p, i) => (
          <article key={p.id} className="mimic-card">
            <div className="mimic-card-img"><img src={p.image} alt={p.title} /></div>
            <div className="mimic-card-body">
              <p className="mimic-category">{p.category}</p>
              <h3>{p.title}</h3>
              <p className="mimic-excerpt">{p.excerpt}</p>
              <button className="mimic-readmore" onClick={() => setSelectedIndex(i + 1)}>Read more →</button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal rendering of MDX post */}
      {selectedIndex !== null && (
        <div className="unique-overlay" onClick={() => setSelectedIndex(null)}>
          <div className="unique-wrapper" onClick={(e) => e.stopPropagation()}>
            <button className="unique-close" onClick={() => setSelectedIndex(null)}>✕</button>
            <div className="unique-hero">
              <img src={postsWithComponent[selectedIndex].image} alt={postsWithComponent[selectedIndex].title} />
            </div>
            <div className="unique-header">
              <p className="unique-category">{postsWithComponent[selectedIndex].category}</p>
              <h2 className="unique-title">{postsWithComponent[selectedIndex].title}</h2>
            </div>
            <div className="unique-body">
              {(() => {
                const MDXComponent = postsWithComponent[selectedIndex].Component;
                return <MDXComponent />;
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogMimic;
