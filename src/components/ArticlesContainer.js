import React, { Component } from 'react'
import axios from 'axios'

class ArticlesContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
  axios.get('http://localhost:3001/api/v1/articles.json')
  .then(response => {
    console.log(response)
    this.setState({articles: response.data})
  })
  .catch(error => console.log(error))
}

  render() {
    return (
      <div>
        {this.state.articles.map((article) => {
          return(
            <div className="tile" key={article.id} >
              <h4>{article.title}</h4>
              <p>{article.content}</p>
              <p>{article.slug}</p>
            </div>
          )
        })}
        </div>
      );
    }
}

export default ArticlesContainer
