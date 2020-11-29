import React from "react";

const Book = ({ img, title, author }) => {
    const clickHandler = (e) => {
        alert(`${author}\n${title}\n${e.target}`);
    };
    return (
        <article onMouseUp={(e) => { console.log(e.target) }} className="book">
            <img src={img} alt="No alternative" />
            <h3>{title}</h3>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>Show</button>
        </article>
    );
};

export default Book;