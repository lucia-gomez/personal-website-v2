import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from "../components/layout";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";
import BlogPostLink from '../components/blog/blogPostItem';
import Axios from 'axios';
import { getApiUrl } from '../scripts/util';
import { Spinner } from 'react-bootstrap';
import SearchBar from '../components/searchBar';
import { useTransition, animated } from '@react-spring/web';

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

/** Check if a post contains a certain keyword */
function filterPostKeyword(post, keyword) {
  const includes = text => text.toLowerCase().includes(keyword.toLowerCase());
  return includes(post.title) || includes(post.summary) || includes(post.slug)
    || includes(post.dateString) || includes(post.content);
}

/** Check if a post contains all keywords */
function filterPost(post, keywords) {
  const keywordHits = keywords.map(keyword => filterPostKeyword(post, keyword));
  return keywordHits.every(x => x);
}

export default function BlogHomePage() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState(posts);
  const [loading, setLoading] = useState(true);

  const sortByDisplayDate = posts => posts.sort((a, b) => {
    const date1 = new Date(a.dateString);
    const date2 = new Date(b.dateString);
    return date2 - date1;
  });

  useEffect(() => {
    setLoading(true);
    Axios.get(getApiUrl() + "/api/get").then(res => {
      const d = sortByDisplayDate(res.data);
      setPosts(d);
      setSearchResults(d);
      setLoading(false);
    })
  }, []);

  const searchPosts = keywords => {
    if (keywords.length === 0) {
      setSearchResults(posts);
    } else {
      const filtered = posts.filter(post => filterPost(post, keywords));
      setSearchResults(filtered);
    }
  }

  const trans = useTransition(searchResults, {
    from: { opacity: 0 },
    enter: { opacity: 1, maxHeight: 400 },
    leave: { opacity: 0, maxHeight: 0 },
  });

  const content = posts.length === 0 ?
    <p>No posts found</p>
    : <Posts>
      {trans((style, post) =>
        <animated.div style={style}>
          <BlogPostLink post={post} />
        </animated.div>
      )}
    </Posts>

  return (
    <Layout>
      <Section id="blog" index={0}>
        {SectionTitle("Blog")}
        {loading ?
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
          : <>
            <SearchBar callback={searchPosts} placeholder="Ex: Heroku, database" />
            {content}
          </>
        }
      </Section>
    </Layout>
  );
}