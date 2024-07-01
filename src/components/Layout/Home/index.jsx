import { useEffect } from "react";
import { useFetchPosts } from "../../../hooks/usePosts";
import { useFetchUsers } from "../../../hooks/useAuth";
import CreatePost from "../../../pages/Posts/CreatePost";
import ListOfPost from "../../../pages/Posts/ListPost";
import useStore from "../../../store/useStore";

const Home = () => {
  const { isLoading, isError, error } = useFetchPosts();
  const { isLoading: isLoadingUsers, isError: isErrorUsers } = useFetchUsers();
  const posts = useStore((state) => state.posts);

  if (isLoading || isLoadingUsers) {
    return <div>Loading...</div>;
  }

  if (isError || isErrorUsers) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className="">
      <CreatePost />
      <ListOfPost posts={posts} />
    </div>
  );
};

export default Home;
