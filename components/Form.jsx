import Link from "next/link";
import style from "./form.module.scss";

const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
  isLoading = false,
  isError = false,
}) => {
  return (
    <section className={style.container}>
      <h1 className={style.h1}>
        <span className="span_gradient">{type} post</span>
      </h1>
      <p className={style.p}>
        {type} and share amazing prompts with the word and let your imagination
        run wild with any AI-powered platform
      </p>

      <form onSubmit={handleSubmit} className={style.form}>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            required
            placeholder={isLoading ? "Loading..." : "Write your prompt here..."}
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag
            <span className="font-normal">
              (#product, #webdevelopment, #idea)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            required
            placeholder={isLoading ? "Loading..." : "#tag"}
            className="form_textarea"
          />
        </label>

        <div className={style.buttonsWrapper}>
          <Link
            href="/"
            className={`text-gray-500 text-sm ${style.button} ${style.buttonCancel}`}
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className={`px-5 py-1.5 text-sm rounded-full text-white ${style.button}`}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
