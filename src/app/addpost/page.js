"use client";
import React from "react";
import { useState } from "react";
import styles from "./addpost.module.css";
const page = () => {
  const [postForm, setPostForm] = useState({});
  const [alert, setAlert] = useState("");
  const handleChange = (e) => {
    setPostForm({ ...postForm, [e.target.name]: e.target.value });
  };

  const addPost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postForm),
      });
      if (response.ok) {
        console.log("Post added successfully!");
        setAlert("Your Product has been added");
        setTimeout(() => {
          setAlert("");
        }, 5000);
        setPostForm({});
      } else {
        console.log("Failed to add post:", response.statusText);
      }
    } catch (error) {
      console.log("Error adding post:", error.message);
    }
  };
  return (
    <>
      <div className={styles.alert}>{alert}</div>
      <div className={styles.postContainer}>
        {/* <form className={styles.input}>
          <label htmlFor="name" className={styles.labelName}>
            Post Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={postForm?.name || ""}
            onChange={handleChange}
            className={styles.inputName}
            required
          />

          <label ht="desc">Post Description:</label>
          <textarea
            id="desc"
            name="desc"
            rows="4"
            value={postForm?.desc || ""}
            onChange={handleChange}
            className={styles.inputName}
            required
          />
          <button onClick={addPost} className={styles.btn}>
            Submit
          </button>
        </form> */}
        <div className={styles.mybody}>
          <form>
            <div className={styles.container}>
              <center>
                {" "}
                <h1> Add Your Journey</h1>{" "}
              </center>
              <hr className={styles.hr} />
              <label> Skill Name </label>
              <input
                className={styles.input}
                type="text"
                name="skill_name"
                placeholder="Add Your Skill"
                size="15"
                required
              />
              <label> Skill Level </label>
              <input
                type="text"
                className={styles.input}
                name="skill_level"
                placeholder="Add level(eg. Beginner, Intermediate, Advanced)"
                size="15"
                required
              />
              <label> Journey Duration: </label>
              <input
                type="text"
                name="duration"
                className={styles.input}
                placeholder="Add Duration"
                size="15"
                required
              />
              <div>
                <label> Learning Preferences:</label>
                <br />
                <br />
                <input
                  type="radio"
                  className={styles.input}
                  value="visual"
                  name="preference"
                  checked
                />{" "}
                Visual Learner
                <input type="radio" value="audio" name="preference" /> Auditory
                Learner
                <input
                  type="radio"
                  value="kinesthetic"
                  className={styles.input}
                  name="preference"
                />{" "}
                kinesthetic Learner
                <input
                  type="radio"
                  value="multimodal"
                  name="preference"
                  className={styles.input}
                />{" "}
                Multimodal learning approaches
                {/* <!-- <input type="text" value="other" name="preference" placeholder="mention"/> Other --> */}
              </div>
              <h4>Roadmap:</h4>
              <textarea
                placeholder="Learning Phases"
                cols="80"
                rows="5"
                value="roadmap"
                className={styles.textarea}
                required
              />
              <br />
              Resources Used:
              <textarea
                cols="80"
                rows="5"
                className={styles.textarea}
                placeholder="Add Resources"
                value="resources"
                required
              />
              <br />
              Initial Mistakes:
              <textarea
                cols="80"
                rows="5"
                className={styles.textarea}
                placeholder="Add Mistakes"
                value="mistakes"
                required
              >
                {" "}
              </textarea>
              <br />
              Recommended Practice:
              <textarea
                cols="80"
                rows="5"
                className={styles.textarea}
                placeholder="Add Daily routine,Practice schedules, Habit-building strategies"
                value="practice"
                required
              >
                {" "}
              </textarea>
              <br />
              Add Your Support System:
              <textarea
                cols="80"
                rows="5"
                className={styles.textarea}
                placeholder="Add Online communities, study groups, etc. that helped you"
                value="support"
                required
              >
                {" "}
              </textarea>
              <br />
              Learning Assessments:
              <textarea
                cols="80"
                rows="5"
                className={styles.textarea}
                placeholder="Add Self-assessment techniques, Use of quizzes or tests"
                value="assesment"
                required
              >
                {" "}
              </textarea>
              <button type="submit" className="registerbtn">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
