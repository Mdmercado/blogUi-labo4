import { Link } from "wouter";
import useStore from "../store/useStore";
import { Card, Text } from "@tremor/react";

function Posts() {
  const posts = useStore((state) => state.posts);

  return (
    <div className="p-6">
      <Card>
        <Text>Posts</Text>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default Posts;
