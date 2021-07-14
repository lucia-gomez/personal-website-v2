import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from "../components/layout";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";
import { Button } from "../components/button";
import { Form, Row, Col } from "react-bootstrap";

import Axios from 'axios';
import { getApiUrl } from '../scripts/util';
import { Link } from 'react-router-dom';

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
  padding-top: 20px;
  width: fit-content;
`;

export default function BlogAdmin() {
  const [title, setTitle] = useState();
  const [summary, setSummary] = useState();
  const [slug, setSlug] = useState();
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty()
  );
  const [showPreview, setShowPreview] = useState(true);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  // if (!isAuthenticated()) {
  //   login();
  //   return <p>Redirecting to login...</p>
  // }

  useEffect(() => {
    const isValid = x => x !== undefined && x.length > 0;
    setSubmitDisabled(!(isValid(title) && isValid(summary) && isValid(slug)));
  }, [title, summary, slug]);

  const getHTMLString = () => draftToHtml(convertToRaw(editorState.getCurrentContent()));

  const createPost = () => {
    Axios.post(getApiUrl() + '/api/create', {
      datetime: new Date().toISOString().slice(0, 19).replace('T', ' '),
      dateString: new Date().toLocaleString(),
      title: title,
      summary: summary,
      content: getHTMLString(),
      slug: slug,
    });
  }

  const titleForm = (
    <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control onChange={e => setTitle(e.target.value)} />
    </Form.Group>
  );

  const slugForm = (
    <Form.Group>
      <Form.Label>Slug</Form.Label>
      <Form.Control onChange={e => setSlug(e.target.value)} />
    </Form.Group>
  );

  const summaryForm = (
    <Form.Group>
      <Form.Label>Summary</Form.Label>
      <Form.Control onChange={e => setSummary(e.target.value)} as="textarea" />
    </Form.Group>
  );

  const formDesktop = (
    <Form className="d-none d-md-block">
      <Row>
        <Col>{titleForm}</Col>
        <Col>{slugForm}</Col>
      </Row>
      {summaryForm}
    </Form>
  );

  const formMobile = (
    <Form className="d-md-none">
      {titleForm}
      {slugForm}
      {summaryForm}
    </Form>
  );

  const form = (
    <div>
      {formDesktop}
      {formMobile}
      <EditorWrapper>
        <Editor
          editorState={editorState}
          onEditorStateChange={x => setEditorState(x)}
        />
      </EditorWrapper>
      <Link to="/blog">
        <Button href="/" onClick={createPost} disabled={submitDisabled} sameTab={true}>Create post</Button>
      </Link>
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