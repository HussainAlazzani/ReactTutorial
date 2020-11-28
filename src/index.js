import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// Global variables

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81I5j2kswrL._AC._SR360,460.jpg",
    title: "The keeper of Aleppo",
    author: "Christy Lefteri",
  }, {
    id: 2,
    img: "https://m.media-amazon.com/images/I/81t1T1gGBIL._AC._SR360,460.jpg",
    title: "A life on our planet",
    author: "David Attenborough",
  }, {
    id: 3,
    img: "https://m.media-amazon.com/images/I/71zXZ-rCmYL._AC._SR360,460.jpg",
    title: "Let us Dream",
    author: "Pope Francis",
  }
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map(book => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="No alternative" />
      <h3>{title}</h3>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
