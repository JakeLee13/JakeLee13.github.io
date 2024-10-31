import React, { useState } from 'react';
import './Blog.css'; // Make sure this file exists and is linked

const Blog = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(prevShowDetails => !prevShowDetails); // Toggle details on click
  };

  return (
    <div className="blog">
      <h2 onClick={handleClick} className="clickable">
        Blog
      </h2>
      {showDetails && (
        <div className="details">
          <p>In Progress</p>
          <div className="content">
            {/* You can add more blog content here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
