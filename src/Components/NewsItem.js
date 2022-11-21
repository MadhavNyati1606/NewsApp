import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
      <div>
       <div className="card my-4" style={{width: "18rem" , height: "auto"}}>
            <img src={!imageUrl?"https://img.etimg.com/thumb/msid-95620742,width-1070,height-580,imgsize-44074,overlay-economictimes/photo.jpg":imageUrl} style = {{height: "160px"}} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target = "_ blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
