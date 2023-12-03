import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getPosts from '@wasp/queries/getPosts';
import createPost from '@wasp/actions/createPost';

export function MainDashboard() {
  const { data: posts, isLoading, error } = useQuery(getPosts);
  const createPostFn = useAction(createPost);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreatePost = () => {
    createPostFn({
      content: 'New Post',
      tags: 'Correlation Factors',
      correlation: 0,
    });
  };

  return (
    <div className='p-4'>
      <div className='mb-4'>
        <button
          onClick={handleCreatePost}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Create Post
        </button>
      </div>
      {posts.map((post) => (
        <div
          key={post.id}
          className={`bg-gray-${post.correlation * 100} p-4 mb-4 rounded-lg`}
        >
          <div>{post.content}</div>
          <div>{post.tags}</div>
          <div>{post.correlation}</div>
        </div>
      ))}
    </div>
  );
}