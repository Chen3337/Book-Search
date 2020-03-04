import React from 'react';


function Results(props){  
    return (
        <div style={{width:"100%", border:"solid 2px black", margin:"30px 10px 0px 10px", padding: "10px"}}>
            <h3>Results :</h3>
            {props.result.map(res => (
                <div style={{width:"100%", border:"solid 1px black"}}>
                    title {res.title}
                    <br/>
                    authors {res.authors}
                    <br/>
                    discription{res.description}
                    <br/>
                    <img src={res.image} alt={res.title} />
                    <br/>
                    <br/>
                    <a href={res.link} >the link</a>
                </div>
            ))}
        </div>
    );
}

export default Results;