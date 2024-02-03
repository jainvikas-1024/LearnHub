"use client";
import React from "react";
import { useState } from "react";
import styles from "./addpost.module.css";
import BackgroundImage from "../components/BackgroundImage";
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
        setPostForm({
          skillname: "",
          levelskill: "",
          duration: "",
          visual: "",
          audio: "",
          kines: "",
          multim: "",
          roadmap: "",
          resources: "",
          mistakes: "",
          practice: "",
          support: "",
          assessment: "",
        });
      } else {
        console.log("Failed to add post:", response.statusText);
      }
    } catch (error) {
      console.log("Error adding post:", error.message);
    }
  };
  return (
    <>
    <BackgroundImage>
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
          <form className={styles.myform}>
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
                id="skillname"
                name="skillname"
                value={postForm?.skillname || ""}
                onChange={handleChange}
                placeholder="Add Your Skill"
                size="15"
                required
              />
              <label> Skill Level </label>
              <input
                type="text"
                className={styles.input}
                id="levelskill"
                name="levelskill"
                value={postForm?.levelskill || ""}
                onChange={handleChange}
                placeholder="Add level(eg. Beginner, Intermediate, Advanced)"
                size="15"
                required
              />
              <label> Journey Duration: </label>
              <input
                type="text"
                name="duration"
                className={styles.input}
                id="duration"
                value={postForm?.duration || ""}
                onChange={handleChange}
                placeholder="Add Duration"
                size="15"
                required
              />
              <div>
                {/* <label> Learning Preferences:</label>
                <br />
                <br />
                <input
                  type="radio"
                  id="visual"
                  name="preference"
                  value={postForm?.preference || ""}
                  onChange={handleChange}
                  className={styles.input}
      
                  checked
                />{" "} Visual Learner
                <input 
                type="radio" 
                
                id="audio"
                name="preference" 
                value={postForm?.preference || ""}
                onChange={handleChange}
                
                /> Auditory Learner
                <input
                  type="radio"
                  
                  id="kines"
                  name="preference"
                  value={postForm?.preference || ""}
                  onChange={handleChange}
                  className={styles.input}
                  
                />{" "}
                kinesthetic Learner
                <input
                  type="radio"
                  
                  name="preference"
                  id="multim"
                  value={postForm?.preference || ""}
                  onChange={handleChange}
                  className={styles.input}
                />{" "}
                Multimodal learning approaches */}
                {/* <!-- <input type="text" value="other" name="preference" placeholder="mention"/> Other --> */}
              </div>
              <h4>Roadmap:</h4>
              <textarea
                id="roadmap"
                name="roadmap"
                value={postForm?.roadmap || ""}
                onChange={handleChange}
                
                placeholder="Learning Phases"
                cols="80"
                rows="5"
              

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

                id="resources"
                name="resources"
                value={postForm?.resources || ""}
                onChange={handleChange}
                required
              />
              <br />
              Initial Mistakes:
              <textarea
                cols="80"
                rows="5"
                className={styles.textarea}
                placeholder="Add Mistakes"
                
                id="mistakes"
                name="mistakes"
                value={postForm?.mistakes || ""}
                onChange={handleChange}
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

                id="practice"
                name="practice"
                value={postForm?.practice || ""}
                onChange={handleChange}
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
                // value="support"
                id="support"
                name="support"
                value={postForm?.support || ""}
                onChange={handleChange}
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
                // value="assessment"
                id="assessment"
                name="assessment"
                value={postForm?.assessment || ""}
                onChange={handleChange}
                required
              >
                {" "}
              </textarea>
              <button type="submit" onClick={addPost} className={styles.registerbtn}>
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
      </BackgroundImage>
    </>
  );
};

export default page;
