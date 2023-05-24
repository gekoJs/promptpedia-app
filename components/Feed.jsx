"use client";
import { useEffect, useState } from "react";
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
        data?.map((e) => (
          <PromptCard key={e._id} post={e} handleTagClick={handleTagClick} />
        ))
      )}
    </div>
  );
};

const Feed = () => {
  const { data, isError, isLoading } = fetchAllPosts();
  const [searchText, setSearchText] = useState("");
  const [allPosts, setAllPosts] = useState();
  const [postFiltered, setPostFiltered] = useState([])

  useEffect(() => {
    setAllPosts(data);
  }, [data]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    filterPrompts(e.target.value);
  };
  const filterPrompts = (text) => {
    const regex = new RegExp(text, "i"); // 'i' flag for case-insensitive search
    const searched = allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
    setPostFiltered(searched);
  };

  return (
    <section className={style.container}>
      <form className={style.form}>
        <input
          type="text"
          placeholder="Search for a prompt, tag or user"
          value={searchText}
          onChange={handleSearchChange}
          className={style.input}
        />
      </form>

      <PromptCardList
        data={postFiltered.length > 0 ? postFiltered : allPosts}
        handleTagClick={() => {}}
        isLoading={isLoading}
        isError={isError}
      />
      
    </section>
  );
};

export default Feed;
