import React from 'react'
import './newsitem.css'

const NewsItem = ({ 
    title, 
    description, 
    url, 
    urlToImage, 
    kkontent, 
    yazar 
}) => {
    return (
        <div className="news-app">
            <div >
            <div className='news-item'>
                <img className='news-img' src={urlToImage} alt={urlToImage} />
                <h3 ><a href={url}>{title}</a></h3>
                <p style={{backgroundColor: "lightblue"}}>{description}</p>
                <p style={{backgroundColor: "lightyellow"}}>{kkontent}</p>   
                 <h1 > Yazan: {yazar}</h1>
            </div>
            </div>
        </div>
    )
}

export default NewsItem