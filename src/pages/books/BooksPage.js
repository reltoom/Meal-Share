import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Book from "./Book";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import BookForm from './BookForm';
import styles from '../../styles/Book.module.css';

function BooksPage({ message, filter = "" }) {
  const [books, setBooks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editBook, setEditBook] = useState(null);
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axiosReq.get(`/books/?${filter}`);
        setBooks(data);
        setHasLoaded(true);
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchBooks();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, currentUser]);

  const handleBookCreate = (newBook) => {
    // Update books state after creating a new book
    setBooks((prevBooks) => ({
      ...prevBooks,
      results: [newBook, ...prevBooks.results],
    }));
  };

  const handleBookDelete = (deletedBookId) => {
    setBooks((prevBooks) => ({
      ...prevBooks,
      results: prevBooks.results.filter((book) => book.id !== deletedBookId),
    }));
  };

  const handleBookEdit = (book) => {
    setEditBook(book);
    setEditMode(true);
  };

  const handleEditSuccess = async () => {
    try {
      const { data } = await axiosReq.get(`/books/?${filter}`);
      setBooks(data);
    } catch (err) {
      console.error("Error reloading books after edit:", err);
    }
    setEditMode(false);
    setEditBook(null);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditBook(null);
  };

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
      <h1 className={styles.Share}>Share your recommended recipe books!</h1>
        {hasLoaded ? (
          <>
            {books.results.length ? (
              <InfiniteScroll
                dataLength={books.results.length}
                next={() => fetchMoreData(books, setBooks)}
                hasMore={!!books.next}
                loader={<Asset spinner />}
              >
                {books.results.map((book) => (
                  <Book
                  key={book.id}
                  {...book}
                  handleBookDelete={handleBookDelete}
                  handleBookEdit={handleBookEdit}
                  />
                ))}
              </InfiniteScroll>
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      {currentUser && (
        <Col lg={4}>
          <div className={`py-2 p-lg-2 ${styles.BookFormOutline}`}>
            <Container className={styles.BookForm}>
            <BookForm
                onSuccess={editMode ? handleEditSuccess : handleBookCreate}
                editMode={editMode}
                editBook={editBook}
                onCancel={handleCancelEdit}
              />
            </Container>
          </div>
        </Col>
      )}
    </Row>
  );
}

export default BooksPage;