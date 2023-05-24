"use client";
import style from "./nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getAuthProviders } from "../utils/RQFunctions";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [toggleDropdown, setToggleDropdown] = useState(false);

  const {
    data: providers,
    isLoading: providersLoading,
    isError: providersError,
  } = getAuthProviders();

  return (
    <nav className={style.container}>
      <Link className={style.nav_logo} href="/">
        <svg
          width="40"
          height="40"
          viewBox="0 0 140 140"
          xmlns="http://www.w3.org/2000/svg"
          className={style.fill_logo}
        >
          <g>
            <path d="M73.281 27.8306C86.4101 32.1364 97.9918 39.8229 107.062 49.8358C108.556 48.4981 110.328 47.7137 112.235 47.7137C112.795 47.7137 113.342 47.7948 113.874 47.9235C117.232 38.5521 118.425 28.4563 116.891 18.1913C116.883 18.1278 116.865 18.0679 116.856 18.0044C110.728 12.4806 103.62 8.02847 95.8221 4.92993C87.4959 11.1111 79.8447 18.8117 73.281 27.8306Z" />
            <path d="M41.536 24.2966C43.9365 24.071 46.3583 23.9141 48.8188 23.9141C55.0546 23.9141 61.1124 24.6544 66.9253 26.0291C73.6441 16.8851 81.4891 9.11055 90.0128 2.91876C83.6729 1.0258 76.9559 0 69.9992 0C61.8933 0 54.1152 1.39417 46.8747 3.92869C42.9848 9.19515 39.7699 14.9798 37.283 21.1381C39.1178 21.7779 40.6159 22.8689 41.536 24.2966Z" />
            <path d="M33.7579 36.5251C33.43 36.6026 33.104 36.6661 32.7797 36.7189C32.0006 41.1358 31.5706 45.6726 31.5706 50.3134C31.5706 63.6787 34.9687 76.2332 40.8873 87.2297C42.1634 87.064 43.4888 87.064 44.8284 87.2121C45.5404 73.4061 48.9809 59.1031 55.4794 45.2884C57.5609 40.8609 59.891 36.652 62.4185 32.6528C56.7942 31.3714 50.9391 30.6946 44.9235 30.6946C43.8466 30.6946 42.7838 30.7563 41.7175 30.8039C40.3762 33.4212 37.468 35.642 33.7579 36.5251Z" />
            <path d="M68.8253 34.4312C66.4001 38.3087 64.1546 42.3802 62.1435 46.6579C55.5305 60.7159 52.0953 75.2744 51.4731 89.3042C54.0376 90.6983 56.1033 92.6283 57.5539 94.8297C76.6704 90.7583 92.7694 80.4351 103.466 66.7314C102.918 65.0394 102.606 63.1658 102.606 61.1882C102.606 59.5861 102.818 58.0544 103.182 56.6303C93.9785 46.4675 82.1924 38.7035 68.8253 34.4312Z" />
            <path d="M30.3033 94.738C31.1317 92.7781 32.4642 91.1636 34.1139 89.921C28.227 78.9421 24.8641 66.407 24.8641 53.0769C24.8641 47.324 25.5515 41.7403 26.7412 36.3452C25.1778 35.8411 23.8453 35.0162 22.883 33.9358C17.0702 35.6349 11.5252 37.9579 6.35218 40.8731C2.28601 49.744 0 59.6036 0 70.0008C0 75.9758 0.752603 81.7728 2.16087 87.3071C10.4836 91.821 19.8691 94.8455 29.8344 96.0793C29.9631 95.6281 30.1165 95.1804 30.3033 94.738Z" />
            <path d="M112.235 74.6592C110.851 74.6592 109.536 74.245 108.348 73.5083C97.2673 87.9858 80.2007 98.7936 59.9015 102.574C59.8698 104.028 59.5896 105.479 59.0026 106.87C58.7118 107.555 58.347 108.19 57.9434 108.794C71.4532 120.769 89.1173 128.143 108.521 128.439C114.059 124.782 119.043 120.358 123.326 115.321C123.478 113.35 123.584 111.366 123.584 109.355C123.584 96.6381 120.503 84.6634 115.138 74.0371C114.221 74.4389 113.246 74.6592 112.235 74.6592Z" />
            <path d="M53.2286 113.268C55.171 122.836 58.5762 131.772 63.328 139.674C65.5259 139.88 67.7484 140 70.0009 140C82.3316 140 93.908 136.801 103.97 131.205C103.651 131.208 103.339 131.235 103.022 131.235C84.0871 131.233 66.7491 124.474 53.2286 113.268Z" />
            <path d="M39.4596 113.097C34.5193 111.01 31.0682 107.032 29.8609 102.687C20.4595 100.985 11.6609 97.671 3.89343 93.0232C12.0275 116.379 32.1786 134.097 56.9422 138.772C52.4795 131.475 49.1994 123.265 47.1531 114.489C44.6521 114.611 42.0153 114.177 39.4596 113.097Z" />
            <path d="M30.0319 20.8772C30.6893 20.7203 31.3432 20.6181 31.9883 20.5547C34.2532 15.6319 36.9939 10.9753 40.1841 6.66235C27.4991 12.6444 16.9063 22.3207 9.78564 34.3095C13.4552 32.2068 17.317 30.409 21.325 28.9091C21.8167 25.3505 25.266 22.0123 30.0319 20.8772Z" />
            <path d="M140 70.0008C140 51.2932 132.647 34.313 120.691 21.7549C120.954 22.9869 121.185 24.233 121.374 25.495C122.74 34.6461 121.936 43.665 119.368 52.1569C120.914 54.5469 121.865 57.7089 121.865 61.1881C121.865 64.1685 121.166 66.9146 119.993 69.146C124.772 79.2946 127.475 90.6136 127.475 102.576C127.475 105.259 127.326 107.904 127.063 110.52C135.197 99.0809 140 85.1057 140 70.0008Z" />
            <path d="M41.9405 107.218C46.0731 108.965 50.636 107.512 52.1321 103.973C53.6282 100.434 51.491 96.1491 47.3584 94.4021C43.2259 92.655 38.663 94.1077 37.1669 97.6466C35.6708 101.186 37.808 105.471 41.9405 107.218Z" />
            <path d="M112.235 66.8952C114.487 66.8952 116.313 64.3393 116.313 61.1864C116.313 58.0335 114.487 55.4775 112.235 55.4775C109.982 55.4775 108.156 58.0335 108.156 61.1864C108.156 64.3393 109.982 66.8952 112.235 66.8952Z" />
            <path d="M32.6862 32.0288C35.1461 31.4423 36.7849 29.4763 36.3465 27.6375C35.9081 25.7987 33.5586 24.7835 31.0987 25.37C28.6388 25.9565 27 27.9225 27.4384 29.7613C27.8768 31.6001 30.2263 32.6153 32.6862 32.0288Z" />
          </g>
        </svg>

        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className={style.desktop}>
        {session?.user ? (
          <div className={style.nav_user_wrapper}>
            <Link href="/create-prompt">
              <button className={`${style.button} ${style.button_fill}`}>
                Create Post
              </button>
            </Link>

            <button type="button" onClick={signOut} className={style.button}>
              Sign Out
            </button>

            <Link href="/my-profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className={style.perfil_img}
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providersLoading ? (
              <div>Loading...</div>
            ) : providersError ? (
              <div>Error</div>
            ) : (
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className={`${style.button_fill} ${style.button}`}
                >
                  Sign in with{" "}
                  <span className="span_gradient">{provider.name}</span>
                </button>
              ))
            )}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className={style.mobile}>
        {session?.user ? (
          <div>
            {toggleDropdown ? (
              <Image
                className={style.perfil_img}
                src={"/assets/icons/close.svg"}
                width={37}
                height={37}
                alt="profile"
                onClick={() => setToggleDropdown(!toggleDropdown)}
              />
            ) : (
              <Image
                className={style.perfil_img}
                src={session?.user.image}
                width={37}
                height={37}
                alt="profile"
                onClick={() => setToggleDropdown(!toggleDropdown)}
              />
            )}

            {toggleDropdown && (
              <div className={style.dropdown}>
                <Link
                  href="/my-profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  className={`${style.button} ${style.button_fill}`}
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
