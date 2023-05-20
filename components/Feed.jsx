"use client"
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

export const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((e) => (
        <PromptCard key={e._id} post={e} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [post, setPost] = useState([]);
  const handleSearchChange = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await fetch("/api/prompt");
      const data = await resp.json();
      setPost(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or UserName"
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>
      <PromptCardList data={post} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
