// src/pages/Resources/Resources.js
import React from 'react';

const Resources = () => {
  const resourceLinks = [
    { title: 'School Calendar', url: 'https://www.example.com/school-calendar', description: 'Stay updated with important dates and events.' },
    { title: 'Course Catalog', url: 'https://www.example.com/course-catalog', description: 'Explore the courses offered at our school.' },
    { title: 'Student Handbook', url: 'https://www.example.com/student-handbook', description: 'Review the policies and guidelines.' },
    { title: 'Parent Resources', url: 'https://www.example.com/parent-resources', description: 'Information for parents to support their child\'s education.' },
    { title: 'Library Resources', url: 'https://www.example.com/library-resources', description: 'Access online databases, ebooks, and more.' },
    { title: 'Past Papers', url: 'https://www.example.com/past-papers', description: 'Practice with past exam papers to prepare for assessments.' },
    { title: 'Donations', url: 'https://www.example.com/donations', description: 'Support our school\'s programs and initiatives through donations.' },
  ];

  return (
    <div className="resources-page">
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Important Resources</h2>
                  <div className="image-container">
                    <img src="/images/school_building.jpg" alt="School Building" />
                    <img src="/images/books.jpg" alt="Books" />
                  </div>
                  <ul>
                    {resourceLinks.map((resource, index) => (
                      <li key={index}>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          {resource.title}
                        </a> - {resource.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="/images/students.jpg" alt="Students" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Additional Information</h2>
                </div>
                <ul>
                  <li>Join extracurricular activities to enhance your skills and meet new friends.</li>
                  <li>Stay connected with teachers and classmates through our online learning platform.</li>
                  <li>Visit the counseling office for academic and personal support.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="/images/schoolHall.jpg" alt="School Hall" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;