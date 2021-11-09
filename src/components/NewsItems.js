import React from 'react'

export default function NewsItems(props) {
    return (
        <>
            <div className="card mb-3" style={{ width: "90%", borderRadius: "10px", marginLeft: "5vw" }}>
                <div className="row g-0">
                    <div className="col-md-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={props.imgUrl ? props.imgUrl : "https://images.moneycontrol.com/static-mcnews/2021/09/Delisting-770x433.jpg"} className="img-fluid" alt="..." style={{ objectFit: "cover", borderRadius: "10px" }} />
                    </div>
                    <div className="col-md-8" >
                        <div className="card-body">
                            <h5 className="card-title">{props.title}...</h5>
                            <span className="text-muted">{props.source}</span>
                            <p className="card-text">{props.description}...</p>
                            <p className="card-text"><small className="text-muted">By {props.author ? props.author : "Unknown"} on {new Date(props.date).toGMTString()}</small></p>
                            <a href={props.newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
