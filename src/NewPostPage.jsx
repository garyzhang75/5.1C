// NewPostPage.jsx
import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import PostTypeSelector from "./posttype";
import TitleField from "./titleinput";
import ArticleForm from "./ArticleForm";
import QuestionForm from "./QuestionForm";
import AdditionalDetailsTextArea from "./AdditionalDetailsTextArea";
import TagsField from "./AdditionalDetailsTextArea"; // Assuming this handles tags input
import "./App.css";

const NewPostPage = () => {
  const [postType, setPostType] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [tags, setTags] = useState("");

  const handlePostTypeChange = (e, { value }) => setPostType(value);

  const handleSubmit = () => {
    console.log({
      postType,
      title,
      content,
      additionalDetails,
      tags,
    });
  };

  return (
    <div className="new-post-container">
      <h1>Create New Post</h1>
      <Form onSubmit={handleSubmit}>
        <PostTypeSelector postType={postType} onChange={handlePostTypeChange} />
        
        {postType && (
          <>
            <TitleField
              title={title}
              onChange={(e) => setTitle(e.target.value)}
              postType={postType}
            />
            
            {postType === "article" ? (
              <ArticleForm
                content={content}
                additionalDetails={additionalDetails}
                onChangeContent={(e) => setContent(e.target.value)}
                onChangeAdditionalDetails={(e) => setAdditionalDetails(e.target.value)}
              />
            ) : (
              <QuestionForm
                content={content}
                onChangeContent={(e) => setContent(e.target.value)}
              />
            )}
            
            <TagsField
              tags={tags}
              onChange={(e) => setTags(e.target.value)}
            />
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
