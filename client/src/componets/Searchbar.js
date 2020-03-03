import React from 'react';
function Save(props) {
    return (
        <div style={{ width: "100%", height: "200px", border: "solid 2px black", padding: "10px" }}>
            <b>Book Search</b>
            <br />
            <p>book name:</p>
            <input value={props.search} onChange={props.handleOnChange} name="search" style={{ width: "100%" }} />
            <button onClick={props.submit} className="btn btn-link" style={{ border: "solid 1px black", margin: "10px", float: "right" }}>Search</button>
        </div>
    )
}
export default Save;