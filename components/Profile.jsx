import PromptCard from "./PromptCard";

const Profile = ({ name, description, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} profile</span>
      </h1>

      <p className="desc text-left">{description}</p>

      <div className="mt-10 prompt_layout">
        {data.map((e) => (
          <PromptCard
            key={e._id}
            post={e}
            handleEdit={()=>handleEdit && handleEdit(e)}
            handleDelete={()=>handleDelete && handleDelete(e)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
