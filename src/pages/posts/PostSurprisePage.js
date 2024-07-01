import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/PostSurprisePage.module.css";

function SurprisePage() {
  const history = useHistory();

  const handleSurprise = async () => {
    try {
      // Fetch the list of posts
      const { data } = await axiosReq.get(`/posts/`);
      // Get the list of post results
      const posts = data.results;
      // Check if there are any posts
      if (posts.length > 0) {
        // Select a random post
        const randomPost = posts[Math.floor(Math.random() * posts.length)];
        // Navigate to the selected post's detail page
        history.push(`/posts/${randomPost.id}`);
      } else {
        // Handle the case where no posts are available
        alert("No posts available, please create some!");
      }
    } catch (err) {
      console.error("Failed to fetch posts", err);
    }
  };

  return (
    <Container className={`${styles.SurpriseContainer} text-center`}>
      <Container className={styles.Clueless}>
        <h1>Out of meal ideas?? Can't decide what to cook??</h1>
      </Container>
      <Container>
        <Button onClick={handleSurprise} className={styles.SurpriseButton}>
          Surprise Me!
        </Button>
      </Container>
    </Container>
  );
}

export default SurprisePage;