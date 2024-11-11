import React from 'react';

function Gallery() {
  const images = [
    { src: '/images/celebrating21.jpg', alt: 'Celebrating 21' },
    { src: '/images/hallSmiles.jpg', alt: 'Hall Smiles' },
    { src: '/images/grads.jpg', alt: 'Grads' },
    { src: '/images/classOf23.jpg', alt: 'Class of 23' },
    { src: '/images/staff.jpg', alt: 'Staff' },
    { src: '/images/study_theatre.jpg', alt: 'Study Theatre' },
    { src: '/images/computer_room.jpg', alt: 'Computer Room' },
    { src: '/images/speaker.jpg', alt: 'Speaker' },
  ];

  return (
    <div className="gallery">
      <div className="container">
        <h2>Our Gallery</h2>
        <div className="gallery-container">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;