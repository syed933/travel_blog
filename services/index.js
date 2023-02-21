import client from '../lib/apollo-client';
import { gql } from '@apollo/client';


class RequestThrottle {
  REQS_PER_SEC = 4;
  reqsThisSecond = 0;

  push(query) {
    const reqDelay = (1000 / this.REQS_PER_SEC) * this.reqsThisSecond;

    this.reqsThisSecond += 1;

    setTimeout(() => {
      this.reqsThisSecond = Math.max(this.reqsThisSecond - 1, 0);
    }, 1000);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        client.query(query).then(resolve);
      }, reqDelay);
    });
  }
}



const requests = new RequestThrottle();

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(first: 4, orderBy: createdAt_DESC) {
        id
        date
        author {
            bio
            name
            id
            photo {
            url
            }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
            url
        }
        categories {
            name
            slug
        }
      }
    }
  `;

  const result = await requests.push({ query });

  return result.data.posts;
};

export const getAllPosts = async () => {
  const query = gql`
    query MyQuery {
      posts (orderBy: createdAt_DESC) {
        id
        date
        author {
            bio
            name
            id
            photo {
            url
            }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
            url
        }
        categories {
            name
            slug
        }
      }
    }
  `;

  const result = await requests.push({ query });

  return result.data.posts;
};


export const getCategories = async () => {
  const query = gql`
    query GetCategories {
        categories {
          name
          slug
        }
    }
  `;

  const result = await requests.push({query});

  return result.data.categories;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        id
        date
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await requests.push({ query, variables: { slug } });

  return result.data.post;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        date
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await requests.push({query, variables: { slug, categories} });

  return result.data.posts;
};

export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
      next:posts(
        first: 1
        orderBy: createdAt_ASC
        where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
      ) {
        title
        date
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous:posts(
        first: 1
        orderBy: createdAt_DESC
        where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
      ) {
        title
        date
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await requests.push({query, variables: { slug, createdAt} });

  return { next: result.data.next[0], previous: result.data.previous[0] };
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            date
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await requests.push({query, variables: { slug }});

  return result.data.postsConnection.edges;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost {
      posts(where: {featuredPost: true}) {
        date
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await requests.push({query});

  return result.data.posts;
};

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await requests.push({query, variables: {slug}});

  return result.data.comments;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        date
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await requests.push({query});

  return result.data.posts;
};