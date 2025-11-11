import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [resourseType, setResourceType] = useState("posts");
  useEffect(() => {
    console.log(`Resource Type Changed to: ${resourseType}`);

    return () => {
      console.log(`Cleanup for resource type change from: ${resourseType}`);
    };
  }, [resourseType]);
  return (
    <>
      <h1>useEffect Hook Example</h1>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <h2>{resourseType}</h2>
    </>
  );
};

export default UseEffectHook;
