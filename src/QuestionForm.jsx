// QuestionForm.jsx
import React from "react";
import { Form, TextArea } from "semantic-ui-react";

const QuestionForm = ({ content, onChangeContent }) => (
  <Form.Field>
    <label>Describe your problem</label>
    <hr/>
    <TextArea
      placeholder="Enter details of your question"
      value={content}
      onChange={(e) => onChangeContent(e.target.value)}
    />
  </Form.Field>
);

export default QuestionForm;
