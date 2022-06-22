import React from 'react'
import PostEditModal from "Components/PostEditModal/PostEditModal";
import {useSelector } from "react-redux";
const GlobalComponents = () => {
   const editModalDisplay = useSelector(
    (state) => state?.posts?.editModalDisplay
  );
    return <>{editModalDisplay && <PostEditModal />}</>;
}

export default GlobalComponents
