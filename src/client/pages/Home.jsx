import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getPosts from '@wasp/queries/getPosts';

export function Home() {
  const { data: posts, isLoading, error } = useQuery(getPosts);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div>
      <h1>Welcome to Parental Perspectives!</h1>
      <p>Discover the community created by and for parents.</p>
      <p>Join us to connect, share experiences, and gain valuable insights.</p>

      <h2>Latest Posts:</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.content}</h3>
          <p>Tags: {post.tags}</p>
          <p>Correlation: {post.correlation}</p>
        </div>
      ))}

      <Link to='/create-post'>Create a new post</Link>
    </div>
  );
}