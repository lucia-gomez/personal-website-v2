import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from "../components/layout";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";
import { Link as LinkDefault } from 'react-router-dom';
import { Button } from "../components/button";
import { colors } from '../style/theme'

import Axios from 'axios';
import { getApiUrl } from '../scripts/util';
import Editor from '../components/blog/editor';
import BlogDraftItem from '../components/blog/blogDraftItem';

const BlogWrapper = styled.div`
  padding: 0px 30px;
  text-align: left;
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

const Link = styled(LinkDefault)`
  color: ${colors.white};

  :hover {
    color: ${colors.white};
    text-decoration: none;
  }
`;

export default function BlogAdmin() {
  const [drafts, setDrafts] = useState([]);
  const [openDraft, setOpenDraft] = useState();

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

  const buttons = (title, slug, summary, content) => {
    const isValid = x => x !== undefined && x.length > 0;
    const disabled = !(isValid(title) && isValid(summary) && isValid(slug));

    const postFn = () => openDraft ?
      publishDraft(title, slug, summary, content)
      : createPost(title, slug, summary, content);
    const postBtnText = openDraft ? 'Publish draft' : 'Publish post';
    const postBtn = <Button onClick={postFn} sameTab={true} disabled={disabled} href="/">
      {disabled ?
        <p style={{ margin: '0px' }}>{postBtnText}</p>
        : <Link to="/blog">
          {postBtnText}
        </Link>
      }
    </Button>

    const saveFn = () => openDraft ?
      closeDraft(title, slug, summary, content)
      : createDraft(title, slug, summary, content);
    const saveBtn = <Button onClick={saveFn} disabled={disabled}>
      {openDraft ? 'Close draft' : 'Save as draft'}
    </Button>

    return <>
      {postBtn}
      {saveBtn}
    </>
  };

  return (
    <Layout>
      <Section id="archive" index={0}>
        <BlogWrapper>
          {SectionTitle("Blog Admin")}
          <Editor post={openDraft} buttons={buttons} />
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