import { useQuery } from "@tanstack/react-query";
import { ALL_PROMPTS, PROVIDERS } from "./RQTypes";
import { getProviders } from "next-auth/react";

export const fetchAllPosts = () => {
  return useQuery({
    queryKey: [ALL_PROMPTS],
    queryFn: async () =>
      await fetch("/api/prompt").then((resp) => {
        console.log(resp);
        return resp.json();
      }),
  });
};
export const fetchAllUserPosts = (userId) => {
  return useQuery({
    queryKey: [ALL_PROMPTS, userId],
    queryFn: async () =>
      await fetch(`/api/users/${userId}/posts`).then((resp) => resp.json()),
  });
};
export const fetchPostById = (id) => {
  return useQuery({
    queryKey: [ALL_PROMPTS, id],
    queryFn: async () =>
      await fetch(`/api/prompt/${id}`).then((resp) => resp.json()),
  });
};
export const getAuthProviders = () => {
  return useQuery({
    queryKey: [PROVIDERS],
    queryFn: async () => await getProviders(),
  });
};
