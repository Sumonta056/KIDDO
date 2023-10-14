import React from "react";
import styles from "../Books/Books.module.css";

const BookList = () => {
  const books = [
    {
        title: 'The Sun Trail',
        author: 'Erin Hunter',
        downloadLink: './book1.pdf',
        onlineLink: 'https://www.readanybook.com/online/565632#357371',
      },
      {
        title: 'It ends with you',
        author: 'Coellen Hover',
        downloadLink: 'https://books.readanybook.online/TDS/?sub=124&q=It+Ends+With+Us&place=read&img=https%3A%2F%2Ffiles.readanybook.com%2F1015415%2Ffiles%2Fit-ends-with-us.jpg',
        onlineLink: 'https://www.readanybook.com/online/587823#405106',
      },
      {
        title: 'Mommy',
        author: 'Sergey Nikolov',
        downloadLink: 'https://www.readanybook.com/online/565481#357229',
        onlineLink: 'https://www.readanybook.com/online/565481#357229',
      },
      {
        title: 'Wonder',
        author: 'R.J Palacio',
        downloadLink: 'https://www.readanybook.com/online/565295#357050',
        onlineLink: 'https://www.readanybook.com/online/565295#357050',
      },
    // Add more books as needed
  ];

  return (
    <div className={styles.bookList}>
      {books.map((book, index) => (
        <div className={styles.book} key={index}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <div className={styles.options}>
            <a href={book.downloadLink} target="_blank" rel="noopener noreferrer">
              <button className={styles["downloadButton"]}>Download</button>
            </a>
            <a href={book.onlineLink} target="_blank" rel="noopener noreferrer">
              <button className={styles["readOnlineButton"]}>Read Online</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
