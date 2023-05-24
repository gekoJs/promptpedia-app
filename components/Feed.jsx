"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import style from "./feed.module.scss";
import PromptCardSkeleton from "./PromptCardSkeleton";
import { fetchAllPosts } from "../utils/RQFunctions";

export const PromptCardList = ({
  data,
  handleTagClick,
  isLoading,
  isError,
}) => {
  return (
    <div className={style.promptCardListContainer}>
      {isLoading ? (
        Array.from({ length: 3 }, (prompt, i) => <PromptCardSkeleton key={i} />)
      ) : isError ? (
        <div>error...</div>
      ) : (
        data.map((e) => (
          <PromptCard key={e._id} post={e} handleTagClick={handleTagClick} />
        ))
      )}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {};

  const { data, isError, isLoading, error } = fetchAllPosts();
  
  if(isError) console.log(error)
  return (
    <section className={style.container}>
      <form className={style.form}>
        <input
          type="text"
          placeholder="Search for a tag or UserName"
          value={searchText}
          onChange={handleSearchChange}
          className={style.input}
        />
      </form>

      <PromptCardList
        data={data}
        handleTagClick={() => {}}
        isLoading={isLoading}
        isError={isError}
      />
    </section>
  );
};

export default Feed;
