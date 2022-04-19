import React from 'react'
// import {}
function ProfilePage() {
  return (
    <div className="layout">
      <div className="layout__left-sidebar">
        <LeftAside />
      </div>
      <div className="layout__main">
        <header className=" layout__main-header">
          <span className="text">Home</span>
        </header>
        <div className="empty"></div>
      
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <RightAside />
    </div>
  );
}

export { ProfilePage}
