import React from 'react';


function Results(props) {
    return (
        <div style={{ width: "100%", border: "solid 2px black", margin: "30px 10px 0px 10px", padding: "10px" }}>
            <h3>Results :</h3>
            {props.result.map(res => (
                <div key={res.id} style={{ width: "100%", border: "solid 1px black", padding: "10px" }}>
                    <div className="row">
                        <div className="col-md-9">
                            <b>{res.title}</b>
                            <br />
                            <p>authors: {res.authors ? res.authors : "null"}</p>
                        </div>
                        <div className="col-md-3" style={{textAlign:"right"}}>
                            <a className="btn btn-info" href={res.link} >More info</a>
                            <button onClick={() => props.onCallApi(res.id)} className="btn btn-success">Save</button>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-md-3">
                            <img src={res.image} alt={res.title} />
                        </div>
                        <div className="col-md-9">
                            description: <br /> {res.description ? res.description : "null"}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Results;