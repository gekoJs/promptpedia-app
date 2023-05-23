import style from "./promptCardSkeleton.module.scss";

export default function skeletonPrompt({ pathname }) {
  return (
    <div className={style.container}>
      <div className={style.user_wrapper}>
        <div className={style.user}>
          <div className={style.img_perfil} />

          <div className={style.n_eWrapper}>
            <h3 className={style.name} />
            <p className={style.email} />
          </div>
        </div>

        <div className={`${style.button} ${style.copy_btn}`} />
      </div>

      <div className={style.promptWrapper}>
        <p className={style.prompt} />
        <p className={style.prompt} />

        <p className={style.hashtag} />
      </div>

      {pathname === "/my-profile" && (
        <div className={style.editAndCancel}>
          <button className={`${style.button} ${style.buttonEdit}`} />
          <button className={`${style.button} ${style.buttonDelete}`} />
        </div>
      )}
    </div>
  );
}
