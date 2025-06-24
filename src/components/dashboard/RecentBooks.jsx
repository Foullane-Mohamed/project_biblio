import React from "react";
import { Eye } from "lucide-react";
import "../../styles/components/RecentBooks.css";

const RecentBooks = () => {
  const books = [
    {
      title: "L'Étranger",
      author: "Albert Camus",
      status: "Disponible",
      cover: "https://source.unsplash.com/random/50x70?book,cover&sig=1",
    },
    {
      title: "1984",
      author: "George Orwell",
      status: "Emprunté",
      cover: "https://source.unsplash.com/random/50x70?book,cover&sig=2",
    },
    {
      title: "Le Petit Prince",
      author: "Antoine de Saint-Exupéry",
      status: "Disponible",
      cover: "https://source.unsplash.com/random/50x70?book,cover&sig=3",
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      status: "Disponible",
      cover: "https://source.unsplash.com/random/50x70?book,cover&sig=4",
    },
  ];

  return (
    <div className="recent-books-card">
      <div className="recent-books-header">
        <h3 className="recent-books-title">Nouveaux Ajouts</h3>
        <button className="view-all-btn">Voir tout</button>
      </div>
      <div className="book-list">
        {books.map((book, index) => (
          <div className="book-item" key={index}>
            <img src={book.cover} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h4>{book.title}</h4>
              <p>{book.author}</p>
            </div>
            <div
              className={`book-status ${
                book.status === "Disponible" ? "disponible" : "emprunte"
              }`}
            >
              {book.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBooks;
