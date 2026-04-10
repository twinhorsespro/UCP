import React, { Component } from 'react';
import Action from '../../Reusable/Action/Action.js';
import Navbar from '../../Reusable/Navbar/Navbar.js';
import './News.css';

const newsItems = [
  { id: 1, image: '/images/projects/ucpphotos/ucp-project-photo-01.jpg' },
  { id: 2, image: '/images/projects/ucpphotos/ucp-project-photo-02.jpg' },
  { id: 3, image: '/images/projects/ucpphotos/ucp-project-photo-03.jpg' },
  { id: 4, image: '/images/projects/ucpphotos/ucp-project-photo-04.jpg' },
  { id: 5, image: '/images/projects/ucpphotos/ucp-project-photo-05.jpg' },
  { id: 6, image: '/images/projects/ucpphotos/ucp-project-photo-06.jpg' },
  { id: 7, image: '/images/projects/ucpphotos/ucp-project-photo-07.jpg' },
  { id: 8, image: '/images/projects/ucpphotos/ucp-project-photo-08.jpg' },
];

class News extends Component {
  render() {
    return (
      <div>
        <Action />
        <Navbar />
        <div className="news-page">
          <div className="news-hero" style={{
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${process.env.PUBLIC_URL}/images/projects/ucpphotos/ucp-project-photo-09.jpg) center/cover no-repeat`
          }}>
            <h1>IN THE NEWS</h1>
          </div>
          <div className="container">
            <div className="news-intro">
              <p>Urban Crown Projects featured in leading publications across Hyderabad.</p>
            </div>
            <div className="news-grid">
              {newsItems.map((item) => (
                <div key={item.id} className="news-card">
                  <img src={item.image} alt={`Press coverage ${item.id}`} className="news-image" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
