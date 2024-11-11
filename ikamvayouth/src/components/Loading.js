import React from 'react';

function Loading() {
  return (
    <div className="loading">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}