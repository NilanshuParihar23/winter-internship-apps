import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const News = () => {
  const [newsType, setNewsType] = useState('');
  const [newsDate, setNewsDate] = useState('');
  const [articles, setArticles] = useState([]);

  const searchNews = () => {
    // If you want to include the date in the API request, you can modify the URL accordingly
    let apiUrl = `https://newsapi.org/v2/everything?q=${newsType}&apiKey=fe34bce1d284463697f5323aaef6b8f4`;
    if (newsDate) {
      apiUrl += `&from=${newsDate}&to=${newsDate}`;
    }
    // console.log(searchNews)

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <form className="form-inline">
              <input className="form-control" type="date" id="newsDate" value={newsDate} onChange={(e) => setNewsDate(e.target.value)} />
              <input className="form-control" type="search" placeholder="Search" id="newsType" value={newsType} onChange={(e) => setNewsType(e.target.value)} />
              <button className="btn btn-secondary" type="button" onClick={searchNews}>Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container cards">
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <h3 className="card-header">{article.title}</h3>
                <div className="card-body">
                  <h5 className="card-title">{article.source.name}</h5>
                  <p className="card-text">{article.description}</p>
                </div>
                <img src={article.urlToImage} className="card-img-top" alt="News Image" />
                <div className="card-body">
                  <p className="card-text">{article.content}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{article.publishedAt}</li>
                </ul>
                <div className="card-body">
                  <a href={article.url} className="card-link" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;

