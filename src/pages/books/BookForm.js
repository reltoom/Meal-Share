import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { axiosReq } from "../../api/axiosDefaults";
import styles from '../../styles/BookForm.module.css';

const BookForm = ({ onSuccess }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosReq.post('/books/', { title, author, link });
      onSuccess(data); // Update parent state or perform necessary action on success
      setTitle('');
      setAuthor('');
      setLink('');
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.BookForm}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formLink">
        <Form.Label>Link</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit">
        Add Book
      </Button>
    </Form>
  );
};

export default BookForm;