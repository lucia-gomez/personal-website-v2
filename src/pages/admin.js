import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from "../components/layout";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";

import Axios from 'axios';
import { getApiUrl } from '../scripts/util';
import Editor from '../components/blog/editor';
import BlogContent from '../components/blog/blogContent';
import BlogDraftItem from '../components/blog/blogDraftItem';

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

const DraftSection = styled.div`
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid ${props => props.theme.textLight};
`;

const Drafts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function BlogAdmin() {
  const [showPreview, setShowPreview] = useState(false);
  const [content, setContent] = useState();
  const [drafts, setDrafts] = useState([]);
  const [openDraft, setOpenDraft] = useState();

  // if (!isAuthenticated()) {
  //   login();
  //   return <p>Redirecting to login...</p>
  // }

  useEffect(() => {
    Axios.get(`${getApiUrl()}/api/draft/get`).then(res => {
      setDrafts(res.data.reverse());
    });
  }, [openDraft]);

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

  const publishDraft = (title, slug, summary, contentCurr) => {
    createPost(title, slug, summary, contentCurr);
    Axios.delete(`${getApiUrl()}/api/draft/${openDraft.id}`);
  }

  const handleOpenDraft = post => {
    setOpenDraft(post);
    window.scrollTo(0, 0);
  }

  const createDraft = (title, slug, summary, contentCurr) => {
    Axios.post(getApiUrl() + '/api/draft/create', {
      title: title,
      summary: summary,
      content: contentCurr,
      slug: slug,
    });
  }

  const closeDraft = (title, slug, summary, contentCurr) => {
    Axios.post(`${getApiUrl()}/api/draft/update`, {
      id: openDraft.id,
      title: title,
      summary: summary,
      slug: slug,
      content: contentCurr
    }).then(_ => {
      setOpenDraft(undefined);
    })
  }

  const handleDeleteDraft = id => {
    setDrafts(drafts.filter(draft => draft.id !== id));
  }

  return (
    <Layout>
      <Section id="archive" index={0}>
        <BlogWrapper>
          {SectionTitle("Blog Admin")}
          <Editor
            post={openDraft}
            editorCallback={e => setContent(e)}
            buttonText={openDraft ? "Publish draft" : "Create post"}
            buttonAction={openDraft ? publishDraft : createPost}
            draftButtonAction={openDraft ? closeDraft : createDraft}
          />
          <PreviewButton onClick={() => setShowPreview(!showPreview)}>
            {showPreview ? 'Hide preview' : 'Show preview'}
          </PreviewButton>
          {showPreview ? <BlogContent content={content} /> : null}
          {drafts.length === 0 ? null :
            <DraftSection>
              <h3>Drafts</h3>
              <Drafts>
                {drafts.map((draft, idx) =>
                  <BlogDraftItem
                    post={draft}
                    handleOpenDraft={handleOpenDraft}
                    handleDeleteDraft={handleDeleteDraft}
                    key={idx}
                  />
                )}
              </Drafts>
            </DraftSection>
          }
        </BlogWrapper>
      </Section>
    </Layout>
  );
}