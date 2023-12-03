import React, { useState } from 'react';
import { useAction } from '@wasp/actions';
import { useQuery } from '@wasp/queries';
import createPost from '@wasp/actions/createPost';
import getPosts from '@wasp/queries/getPosts';

export function CreatePost() {
  const createPostFn = useAction(createPost);
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [correlation, setCorrelation] = useState(0);

  const handleCreatePost = () => {
    createPostFn({ content, tags, correlation });
    setContent('');
    setTags('');
    setCorrelation(0);
  };

  return (
    <div className=''>
      <div className='flex gap-x-4 py-5'>
        <input
          type='text'
          placeholder='Content'
          className='px-1 py-2 border rounded text-lg'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type='text'
          placeholder='Tags'
          className='px-1 py-2 border rounded text-lg'
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <input
          type='number'
          placeholder='Correlation'
          className='px-1 py-2 border rounded text-lg'
          value={correlation}
          onChange={(e) => setCorrelation(Number(e.target.value))}
        />
        <button
          onClick={handleCreatePost}
          className='bg-blue-500 hover:bg-blue-700 px-2 py-2 text-white font-bold rounded'
        >
          Create Post
        </button>
      </div>
    </div>
  );
}