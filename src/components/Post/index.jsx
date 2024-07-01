import { Card } from "@tremor/react";
import useStore from "../../store/useStore";

const PostCard = ({ post, index }) => {
  const users = useStore((state) => state.users);
  const comments = post.comments || [];

  return (
    <Card className="mt-4">
      <h3 className="text-xl font-bold">{post.title}</h3>
      <p>{post.content}</p>
      {comments.length > 0 && (
        <div className="mt-4">
          <h4 className="font-bold mb-2">Comments:</h4>
          {comments.map((comment) => {
            const user = users.find((u) => u.id === comment.userId);
            return (
              <div key={comment.id} className="mb-2">
                <p className="text-sm">{comment.content}</p>
                <p className="text-xs text-gray-500">
                  - {user ? user.name : "Unknown"}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
};

export default PostCard;
