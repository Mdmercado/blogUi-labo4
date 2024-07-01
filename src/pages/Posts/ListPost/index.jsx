import PostCard from "../../../components/Post";

const Posts = ({ posts }) => {
  return (
    <div className="mt-6 max-w-3xl mx-auto">
      <h2
        className="
        text-2xl
        font-bold
        text-gray-800
        text-center
        mb-4
      ">
        Ultimos Posteos de la comunidad
      </h2>
      {posts.map((post, index) => (
        <PostCard key={post.id || index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
