import React from "react"

const Display = (props) => {
    const {authors} = props
    console.log("authors", authors)
    const loaded = () => (
        <div >
            <h1>Authors</h1>
                {authors.map((author, index) => (
                    <>
                    <h2>{authors[index].firstName} {authors[index].lastName}</h2>
                    {/* the below only pulls the ID ... what now? */}
                    {/* <p>{authors[index].cookbooks}</p> */}
                    </>
                ))}
        </div>
    )
    return authors.length > 0 ? loaded() : <h1>Loading...</h1>     
}

export default Display