import PromptCard from "./PromptCard";
import style from "./profile.module.scss";
import SkeletonPrompt from "./PromptCardSkeleton";

const Profile = ({
  name,
  description,
  data,
  handleEdit,
  handleDelete,
  isLoading,
  isError,
}) => {
  return (
    <section className={style.container}>
      <h1 className={style.h1}>
        <span className="span_gradient">{name} profile</span>
      </h1>

      <p className="desc text-left">{description}</p>

      <div className={style.promptList}>
        {isLoading ? (
          Array.from({ length: 3 }, (e, i) => <SkeletonPrompt key={i} />)
        ) : isError ? (
          <div>error</div>
        ) : (
          data.map((e) => (
            <PromptCard
              key={e._id}
              post={e}
              handleEdit={() => handleEdit && handleEdit(e)}
              handleDelete={() => handleDelete && handleDelete(e)}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Profile;
