import React from 'react';
import DeleteForm from './DeleteForm';
import PostForm from './PostForm';
import PutForm from './PutForm';
export default function RequestsDemo() {
    return (
        <div className="requests-demo">
            <PostForm />
            <PutForm />
            <DeleteForm />
        </div>
      );
}