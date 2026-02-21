import { Component } from 'react';
import './Portfolio.css';
import project1 from './project1.png';
import project2 from './project2.png';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: project1,
          title: "Web Scraping with Scrapy and MongoDB ",
          description: "Developed an ETL pipeline using Python’s Scrapy framework to build a scalable web scraper, extracting over 1,000 book entries (titles, prices, URLs) from a multi-page e-commerce site, handling 20 items per page and managing pagination across 50+ pages. Implemented storing scraped data in MongoDB, ensuring efficient data retrieval and zero duplicates through unique hashing and MongoDB’s _id field for deduplication.",
          technologies: ["Python", "Scrapy", "MongoDB"],
        },
        {
          project_image: project2,
          title: "Insurance Premium Prediction Model | Machine Learning Project ",
          description: "Developed a machine learning model to predict insurance premiums using Python and scikit-learn. The model was trained on a dataset of 10,000+ insurance records, incorporating features such as age, gender, BMI, and smoking status. Achieved an R² score of 0.85 on the test set and implemented cross-validation techniques to ensure robustness.",
          technologies: ["Python", "scikit-learn", "Pandas", "NumPy"],
        },
      ]
    };
  }

  render() {
    return (
      <div className="portfolio-section">
        <div className="portfolio-grid">
          {this.state.projects.map((proj, idx) => (
            <div className="project-card" key={idx}>
              <img
                className="project-image"
                src={proj.project_image || 'https://via.placeholder.com/400x230.png?text=Project+Image'}
                alt={proj.title}
              />

              <div className="project-body">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>

                <div className="tech-list">
                  {proj.technologies.map((t, i) => (
                    <span className="tech" key={i}>{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button onClick={() => alert("Live Demo clicked!")} className="btn primary">Live Demo</button>
                  <button onClick={() => alert("Source clicked!")} className="btn">Source</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;