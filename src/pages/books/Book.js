import React from 'react';
import { Card, Media } from 'react-bootstrap';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link, useHistory } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import styles from '../../styles/Book.module.css';
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";

const Book = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    title,
    author,
    link,
    postPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/books/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/books/${id}/`);
      history.goBack();
    } catch (err) {
      console.error("Error deleting book:", err);
    }
  };

  console.log("Profile ID:", profile_id);
  console.log("Profile Image:", profile_image);

  return (
    <Card className={styles.Book}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            {is_owner && postPage && (
              <MoreDropdown
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
          <a href={link} target="_blank" rel="noopener noreferrer">
            Link: {link.length > 40 ? `${link.slice(0, 40)}...` : link}
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Book;