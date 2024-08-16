import React, { useState } from "react";
import { Form, Button, TextArea, Dropdown } from "semantic-ui-react";
import "./App.css";

const postOptions = [
  { key: "question", value: "question", text: "Question" },
  { key: "article", value: "article", text: "Article" },
];

const NewPostPage = () => {
  const [postType, setPostType] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");

  const handlePostTypeChange = (e, { value }) => setPostType(value);

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({
      postType,
      title,
      content,
      additionalDetails,
    });
  };

  return (
    <div className="new-post-container">
      <h1>Create New Post</h1>
      <Form onSubmit={handleSubmit}>
        {/* Dropdown for post type */}
        <Form.Field>
          <label>Choose Post Type</label>
          <hr/>
          <Dropdown
            placeholder="Select Post Type"
            fluid
            selection
            options={postOptions}
            onChange={handlePostTypeChange}
          />
        </Form.Field>

        {/* Render input fields based on post type */}
        {postType && (
          <>
            <Form.Field>
              <label>{postType === "question" ? "Question Title" : "Article Title"}</label>
              <hr/>
              <input
                placeholder={`Enter the title of your ${postType}`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>{postType === "question" ? "Details" : "Content"}</label>
              <hr/>
              <TextArea
                placeholder={`Enter ${postType === "question" ? "details" : "content"} of your ${postType}`}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Field>
            {postType === "question" && (
              <Form.Field>
                <label>Additional Details (Optional)</label>
                <hr/>
                <TextArea
                  placeholder="Provide any additional information"
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                />
              </Form.Field>
            )}
          </>
        )}

        <Button primary type="submit">
          Post
        </Button>
      </Form>
    </div>
  );
};

export default NewPostPage;
