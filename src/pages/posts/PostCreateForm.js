import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function PostCreateForm() {
  useRedirect("loggedOut");

  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    recipe_name: "",
    description: "",
    image: "",
    ingredients: [{ name: "", quantity: "", measurement: "" }],
  });

  const { recipe_name, description, image, ingredients } = postData;
  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleIngredientChange = (index, event) => {
    const newIngredients = ingredients.map((ingredient, i) => {
      if (i === index) {
        return { ...ingredient, [event.target.name]: event.target.value };
      }
      return ingredient;
    });
    setPostData({ ...postData, ingredients: newIngredients });
  };

  const handleAddIngredient = () => {
    setPostData({
      ...postData,
      ingredients: [...ingredients, { name: "", quantity: "", measurement: "" }],
    });
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setPostData({ ...postData, ingredients: newIngredients });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("recipe_name", recipe_name);
    formData.append("description", description);
    formData.append("ingredients", JSON.stringify(ingredients));
    if (imageInput.current.files.length > 0) {
      formData.append("image", imageInput.current.files[0]);
    } else {
      formData.append("image", ''); // Replace '' with the default image URL or default value
    }
    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Recipe Name</Form.Label>
        <Form.Control
          type="text"
          name="recipe_name"
          value={recipe_name}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.recipe_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      {ingredients.map((ingredient, index) => (
        <div key={index} className="mb-3">
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Ingredient Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={ingredient.name}
                  onChange={(e) => handleIngredientChange(index, e)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  name="quantity"
                  value={ingredient.quantity}
                  onChange={(e) => handleIngredientChange(index, e)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Measurement</Form.Label>
                <Form.Control
                  as="select"
                  name="measurement"
                  value={ingredient.measurement}
                  onChange={(e) => handleIngredientChange(index, e)}
                >
                  <option value="milliliter - ml">Milliliter - ml</option>
                  <option value="deciliter - dl">Deciliter - dl</option>
                  <option value="litre - l">Litre - l</option>
                  <option value="teaspoon - tsp">Teaspoon - tsp</option>
                  <option value="tablespoon - tbsp">Tablespoon - tbsp</option>
                  <option value="fluid ounce - fl oz">Fluid ounce - fl oz</option>
                  <option value="cup - c">Cup - c</option>
                  <option value="pint - pt">Pint - pt</option>
                  <option value="quart - qt">Quart - qt</option>
                  <option value="gallon - gal">Gallon - gal</option>
                  <option value="milligram - mg">Milligram - mg</option>
                  <option value="gram - g">Gram - g</option>
                  <option value="kilogram - kg">Kilogram - kg</option>
                  <option value="pound - lb">Pound - lb</option>
                  <option value="ounce - oz">Ounce - oz</option>
                  <option value="units">Units</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col className="d-flex align-items-end">
              <Button
                variant="danger"
                onClick={() => handleRemoveIngredient(index)}
              >
                Remove
              </Button>
            </Col>
          </Row>
        </div>
      ))}
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={handleAddIngredient}
      >
        Add Ingredient
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}
              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;