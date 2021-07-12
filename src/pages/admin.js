import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from "../components/layout";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";
import { login, isAuthenticated } from "../scripts/auth";

import Axios from 'axios';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import BlogContent from '../components/blog/blogContent';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const BlogWrapper = styled.div`
  padding: 0px 30px;
  text-align: left;
`;

const EditorWrapper = styled.div`
  margin-bottom: 50px;

  .rdw-editor-toolbar {
    background-color: ${props => props.theme.accentLight};
    border: none;
    margin-bottom: 0px;
  }

  .rdw-editor-main {
    background-color: ${props => props.theme.bg};
    min-height: 200px;

    pre {
      background-color: ${props => props.theme.medium};
      color: ${props => props.theme.text};
      margin: 10px;
      border-radius: 10px;
    }
  }

  .rdw-option-wrapper {
    border: none;
  }

  .rdw-option-active {
    background-color: ${props => props.theme.accent};
  }

  a {
    color: ${props => props.theme.accentHover};
  }

  .rdw-dropdown-optionwrapper {
    border: 1px solid ${props => props.theme.textLight};
    overflow-y: auto;

    :hover {
      box-shadow: none;
    }
  }

  .rdw-dropdownoption-default {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.text};

    :hover {
      background-color: ${props => props.theme.accentHover};
      color: ${props => props.theme.textInv};
    }
  }

  .rdw-dropdownoption-active {
    background-color: ${props => props.theme.accent};
    color: ${props => props.theme.textInv};
  }
`;

const PreviewButton = styled.div`
  color: ${props => props.theme.accent};
  cursor: pointer;
`;

export default function BlogAdmin() {
  const [title, setTitle] = useState();
  const [summary, setSummary] = useState();
  const [slug, setSlug] = useState();
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty()
  );
  const [showPreview, setShowPreview] = useState(true);

  if (!isAuthenticated()) {
    login();
    return <p>Redirecting to login...</p>
  }

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
          <PreviewButton onClick={() => setShowPreview(!showPreview)}>
            {showPreview ? 'Hide preview' : 'Show preview'}
          </PreviewButton>
          {showPreview ? <BlogContent content={getHTMLString()} /> : null}
        </BlogWrapper>
      </Section>
    </Layout>
  );
}