// ArticleForm.jsx
import React from "react";
import { Form, TextArea } from "semantic-ui-react";

const ArticleForm = ({ content, additionalDetails, onChangeContent, onChangeAdditionalDetails }) => (
  <>
    <Form.Field>
      <label>Abstract</label>
      <hr/>
      <TextArea
        placeholder="Enter the abstract of your article"
        value={content}
        onChange={(e) => onChangeContent(e.target.value)}
      />
    </Form.Field>
    <Form.Field>
      <label>Article Text</label>
      <hr/>
      <TextArea
        placeholder="Enter the full text of your article"
        value={additionalDetails}
        onChange={(e) => onChangeAdditionalDetails(e.target.value)}
      />
    </Form.Field>
  </>
);

export default ArticleForm;
