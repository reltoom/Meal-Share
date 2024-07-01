import React from 'react';
import { Card, Media } from 'react-bootstrap';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import styles from '../../styles/Book.module.css';
import BookDropdown from './BookDropdown';
import { axiosRes } from "../../api/axiosDefaults";

const Book = ({
  id,
  owner,
  profile_id,
  profile_image,
  title,
  author,
  link,
  handleBookDelete,
  handleBookEdit,
}) => {
  const currentUser = useCurrentUser();
  const handleEdit = () => {
    if (currentUser) {
      handleBookEdit({ id, title, author, link });
    } else {
      console.error("User is not authenticated or authorized to edit this book.");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await axiosRes.delete(`/books/${id}/`);
        handleBookDelete(id); // Update UI state after successful deletion
      } catch (err) {
        console.error("Error deleting book:", err);
        // Handle specific error cases, such as network errors or server issues
        // Display a user-friendly error message or retry mechanism if needed
      }
    }
  };

  const isCurrentUserOwner = currentUser && currentUser.username === owner;

  return (
    <Card className={styles.Book}>
      <Card.Body className={styles.BookBar}>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            {isCurrentUserOwner && (
              <BookDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Card.Body>
        <Card.Title className="text-center">Title: {title}</Card.Title>
        <Card.Text className="text-center">Author: {author}</Card.Text>
        <Card.Text className="text-center">
        <a href={link ? link : '#'} target="_blank" rel="noopener noreferrer">
          Link: {link && link.length > 40 ? `${link.slice(0, 40)}...` : link}
        </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Book;