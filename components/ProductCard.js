'use client';

import { useState } from 'react';

export default function ProductCard({ product, styles }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const charLimit = 120;
  const description = product.description || '';
  const needsTruncation = description.length > charLimit;
  
  const displayText = isExpanded 
    ? description 
    : (needsTruncation ? `${description.substring(0, charLimit)}...` : description);

  const toggleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={styles.card}
      onClick={() => window.open(product.affiliateLink, '_blank', 'noopener,noreferrer')}
    >
      <div className={styles.imageWrapper}>
        <img src={product.imageUrl} alt={product.title} loading="lazy" />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{product.title}</h3>
        <p className={styles.cardDesc}>
          {displayText}
          {needsTruncation && (
            <span 
              className={styles.readMoreLink} 
              onClick={toggleExpand}
              role="button"
              tabIndex={0}
            >
              {isExpanded ? ' Show less' : ' Read more'}
            </span>
          )}
        </p>
        <div className={styles.cardFooter}>
          <button className={styles.buyButton}>View Deal</button>
        </div>
      </div>
    </div>
  );
}
