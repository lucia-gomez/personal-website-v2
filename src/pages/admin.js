import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from "../components/layout";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";

import Axios from 'axios';
import { getApiUrl } from '../scripts/util';
import Editor from '../components/blog/editor';
import BlogContent from '../components/blog/blogContent';

const BlogWrapper = styled.div`
  padding: 0px 30px;
  text-align: left;
`;

const PreviewButton = styled.div`
  color: ${props => props.theme.accent};
  cursor: pointer;
  padding-top: 20px;
  width: fit-content;
`;

export default function BlogAdmin() {
  const [showPreview, setShowPreview] = useState(false);
  const [content, setContent] = useState();

  // if (!isAuthenticated()) {
  //   login();
  //   return <p>Redirecting to login...</p>
  // }

  const createPost = (title, slug, summary, contentCurr) => {
    Axios.post(getApiUrl() + '/api/create', {
      datetime: new Date().toISOString().slice(0, 19).replace('T', ' '),
      dateString: new Date().toLocaleString(),
      title: title,
      summary: summary,
      content: contentCurr,
      slug: slug,
    });
  }

  return (
    <Layout>
      <Section id="archive" index={0}>
        <BlogWrapper>
          {SectionTitle("Blog Admin")}
          <Editor
            editorCallback={e => setContent(e)}
            buttonText="Create post"
            buttonAction={(title, slug, summary, content) => createPost(title, slug, summary, content)}
          />
          <PreviewButton onClick={() => setShowPreview(!showPreview)}>
            {showPreview ? 'Hide preview' : 'Show preview'}
          </PreviewButton>
          {showPreview ? <BlogContent content={content} /> : null}
        </BlogWrapper>
      </Section>
    </Layout>
  );
}