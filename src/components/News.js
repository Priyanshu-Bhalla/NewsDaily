import React from 'react'
import LoadSpinner from './LoadSpinner';
import NewsItems from './NewsItems'
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function News(props) {

    const [articles, setArticle] = useState([]);
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)

    const UpdateTime = async () => {
        props.setProg(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0c0b7628cb844e8896a658c907ce144d&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProg(30)
        let parsedData = await data.json();
        props.setProg(70);
        setArticle(parsedData.articles);
        setLoading(false);
        setTotalResults(parsedData.totalResults);
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false

        // });
        props.setProg(100)
    }

    useEffect(() => {
        UpdateTime()
    }, [])

    const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0c0b7628cb844e8896a658c907ce144d&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticle(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults)

    };

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <nav style={{ marginTop: '70px', maxWidth: "240px" }} className={`aside-nav ${props.inactive ? 'inactive' : ''} navbar-expand-md navbar-${props.mode} bg-${props.mode}`} >
                <ul>
                    <li className="side_list" ><i className={`fas fa-home fa-lg text-${props.mode === "light" ? "dark" : "light"}`}></i><Link className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`} to="/general">Home</Link></li>
                    <li className="side_list"><i className={`fas fa-search fa-lg text-${props.mode === "light" ? "dark" : "light"}`}></i><Link className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`} to="/general">Saved Search</Link></li>
                    <li className="side_list"><i className={`fas fa-layer-group fa-lg text-${props.mode === "light" ? "dark" : "light"}`}></i><Link className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`} to="/general">Showcases</Link></li>
                </ul>
                <br />
                <hr style={{ marginLeft: "10px", marginRight: "10px" }} />


                <h4 className={`text-center text-${props.mode === "light" ? "dark" : "light"}`} >Categories</h4>
                <ul className="Category">
                    <li className="category_list"><i className={`fas fa-briefcase fa-lg text-${props.mode === "light" ? "dark" : "light"}`}></i><Link className={`dropdown-item text-${props.mode === "light" ? "dark" : "light"}`} to="/business">Business</Link></li>
                    <li className="category_list"><i className={`fas fa-stethoscope fa-lg text-${props.mode === "light" ? "dark" : "light"}`}></i><Link className={`dropdown-item text-${props.mode === "light" ? "dark" : "light"}`} to="/health">Health</Link></li>
                    <li className="category_list"><i className={`far fa-newspaper fa-lg text-${props.mode === "light" ? "dark" : "light"}`}></i><Link className={`dropdown-item text-${props.mode === "light" ? "dark" : "light"}`} to="/general">General</Link></li>
                    <li className="category_list"><i className={`fas fa-microchip fa-lg text-${props.mode === "light" ? "dark" : "light"}`}></i><Link className={`dropdown-item text-${props.mode === "light" ? "dark" : "light"}`} to="/technology">Technology</Link></li>
                    <li className="category_list"><i className={`fas fa-microscope fa-lg text-${props.mode === "light" ? "dark" : "light"}`}></i><Link className={`dropdown-item text-${props.mode === "light" ? "dark" : "light"}`} to="/science">Science</Link></li>
                    <li className="category_list"><i className={`fas fa-biking fa-lg text-${props.mode === "light" ? "dark" : "light"}`}></i><Link className={`dropdown-item text-${props.mode === "light" ? "dark" : "light"}`} to="/sports">Sports</Link></li>
                    <li className="category_list"><i className={`fas fa-film fa-lg text-${props.mode === "light" ? "dark" : "light"}`}></i><Link className={`dropdown-item text-${props.mode === "light" ? "dark" : "light"}`} to="/entertainment">Entertainment</Link></li>
                </ul>
            </nav>
            <div className="center_section " style={{ overflowY: "scroll" }} id="scrollableDiv">
                <h1 className={`text-center text-${props.mode === "light" ? "dark" : "light"}`} style={{ marginTop: '100px' }}>Get your Daily Dose of News</h1>
                {loading && <LoadSpinner />}

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<LoadSpinner />}
                    scrollableTarget="scrollableDiv"
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-12" key={element.url}>
                                    <NewsItems title={element.title ? element.title.slice(0, 65) : ""} description={element.description ? element.description.slice(0, 148) : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>


        </div >
    )

}

News.defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 6
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}
