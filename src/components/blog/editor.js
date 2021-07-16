import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as LinkDefault } from 'react-router-dom';
import { Button } from "../button";
import { Form, Row, Col } from "react-bootstrap";
import { colors } from '../../style/theme'

import { Editor as ReactDraft } from "@nick4fake/react-draft-wysiwyg";
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "@nick4fake/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Link = styled(LinkDefault)`
  color: ${colors.white};

  :hover {
    color: ${colors.white};
    text-decoration: none;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Editor(props) {
  const { post } = props;

  const [title, setTitle] = useState(post?.title ?? "");
  const [summary, setSummary] = useState(post?.summary ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty()
  );
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const isValid = x => x !== undefined && x.length > 0;
    setButtonDisabled(!(isValid(title) && isValid(summary) && isValid(slug)));
  }, [title, summary, slug]);

  useEffect(() => {
    setTitle(post?.title ?? "");
    setSummary(post?.summary ?? "");
    setSlug(post?.slug ?? "");
    if (post !== undefined) {
      const blocksFromHtml = htmlToDraft(post.content);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [post])

  const getHTMLString = () => draftToHtml(convertToRaw(editorState.getCurrentContent()));

  const titleForm = (
    <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control onChange={e => setTitle(e.target.value)} value={title} />
    </Form.Group>
  );

  const slugForm = (
    <Form.Group>
      <Form.Label>Slug</Form.Label>
      <Form.Control onChange={e => setSlug(e.target.value)} value={slug} />
    </Form.Group>
  );

  const summaryForm = (
    <Form.Group>
      <Form.Label>Summary</Form.Label>
      <Form.Control onChange={e => setSummary(e.target.value)} value={summary} as="textarea" />
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

  const btn = (
    <Button
      href="/"
      onClick={() => props.buttonAction(title, slug, summary, getHTMLString())}
      disabled={buttonDisabled}
      sameTab={true}
    >
      {buttonDisabled ?
        <p style={{ margin: '0px' }}>{props.buttonText}</p>
        : <Link to="/blog">
          {props.buttonText}
        </Link>}
    </Button>
  );

  const btnDraft = (
    <Button
      onClick={() => props.draftButtonAction(title, slug, summary, getHTMLString())}
      disabled={buttonDisabled}
    >
      {post ? 'Close draft' : 'Save as draft'}
    </Button>
  )

  return (
    <div>
      {formDesktop}
      {formMobile}
      <EditorWrapper>
        <ReactDraft
          editorState={editorState}
          onEditorStateChange={x => {
            setEditorState(x);
            if (props.editorCallback)
              props.editorCallback(getHTMLString());
          }}
        />
      </EditorWrapper>
      <ButtonRow>
        {btn}
        {props.isPopup ? null : btnDraft}
      </ButtonRow>
    </div>
  );
}

const EditorWrapper = styled.div`
  margin-bottom: 50px;

  .rdw-editor-toolbar {
    background-color: ${props => props.theme.accentLight};
    border: none;
    margin-bottom: 0px;
  }

  .rdw-editor-main {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.header};
    min-height: 200px;
    padding: 10px;
    border: 1px solid ${props => props.theme.textLight};
    border-radius: 0px 0px 5px 5px;
    border-top: none;

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