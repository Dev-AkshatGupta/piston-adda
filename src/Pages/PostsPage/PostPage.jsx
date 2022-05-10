import { LeftAside } from 'Components/LeftAside/LeftAside';
import { RightAside } from 'Components/RightAside/RightAside';
import React from 'react'
import { useParams } from 'react-router-dom'
const PostPage = () => {
  const {postId}=useParams();
  console.log(postId);
  
  return (
  <>
  <LeftAside/>

  <RightAside/>
  </>
  )
}

export default PostPage
