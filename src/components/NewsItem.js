import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description,imgURL,newsUrl,author,date,source}  = this.props
    return (
      <div>
        <div className="card my-3" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}
                    </span>
            <img src={imgURL?imgURL:"https://c.ndtvimg.com/2023-01/jhlatddg_kiara-advani_625x300_17_January_23.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem


