import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'


const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=football&apiKey=cada82f4346c428eaa65a4dbb04954f1`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [])
    return (
        <div>
            {articles.map(article => {
                return(
                    <NewsItem 
                        
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                        kkontent={article.content}
                        yazar={article.author}

                    />
                )
            })}
        </div>
    )
}

export default NewsList