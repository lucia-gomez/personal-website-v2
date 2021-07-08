import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from "../components/layout";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";

import Axios from 'axios';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import htmlToDraft from 'html-to-draftjs';

const BlogWrapper = styled.div`
  padding: 0px 30px;
`;

const EditorWrapper = styled.div`
  border: 1px solid black;
`;

export default function BlogAdmin() {
  const [title, setTitle] = useState();
  const [summary, setSummary] = useState();
  const [slug, setSlug] = useState();
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty()
  );

  const getHTMLString = () => draftToHtml(convertToRaw(editorState.getCurrentContent()));

  const createPost = () => {
    Axios.post('http://localhost:3001/api/create', {
      datetime: new Date().toISOString().slice(0, 19).replace('T', ' '),
      dateString: new Date().toLocaleString(),
      title: title,
      summary: summary,
      content: getHTMLString(),
      slug: slug,
    });
    // setTitle();
    // setSummary();
    // setEditorState(EditorState.createEmpty());
  }

  const form = (
    <div>
      <label htmlFor="title">Title</label>
      <input onChange={e => setTitle(e.target.value)} id="title"></input>
      <label htmlFor="summary">Summary</label>
      <input onChange={e => setSummary(e.target.value)} id="summary"></input>
      <label htmlFor="slug">Slug</label>
      <input onChange={e => setSlug(e.target.value)} id="slug"></input>
      <EditorWrapper>
        <Editor
          editorState={editorState}
          onEditorStateChange={x => setEditorState(x)}
        />
      </EditorWrapper>
      <button onClick={createPost}>Create post</button>
    </div>
  );

  return (
    <Layout>
      <Section id="archive" index={0}>
        <BlogWrapper>
          {SectionTitle("Blog Admin")}
          {form}
        </BlogWrapper>
      </Section>
    </Layout>
  );
}