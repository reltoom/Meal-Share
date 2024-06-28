import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { axiosReq } from "../../api/axiosDefaults";
import styles from '../../styles/BookForm.module.css';

const BookForm = ({ onSuccess, editMode = false, editBook = null, onCancel }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [link, setLink] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (editMode && editBook) {
      setTitle(editBook.title);
      setAuthor(editBook.author);
      setLink(editBook.link);
    } else {
      setTitle('');
      setAuthor('');
      setLink('');
    }
  }, [editMode, editBook]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode && editBook) {
        await axiosReq.put(`/books/${editBook.id}/`, { title, author, link });
        onSuccess({ ...editBook, title, author, link });
      } else {
        const { data } = await axiosReq.post('/books/', { title, author, link });
        onSuccess(data);
        // Reset form fields after successful add
        setTitle('');
        setAuthor('');
        setLink('');
      }
      // Redirect to books page after successful operation
      history.push('/books');
    } catch (error) {
      console.error('Error creating/updating book:', error);
    }
  };


  const handleCancel = () => {
    setTitle('');
    setAuthor('');
    setLink('');
    if (onCancel) {
      onCancel();
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
        />
      </Form.Group>
      <Button type="submit" className="mr-2">
        {editMode ? 'Update Book' : 'Add Book'}
      </Button>
      {editMode && (
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      )}
    </Form>
  );
};

export default BookForm;