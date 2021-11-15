import { Post, PostVote } from ".prisma/client";
import Link from "next/link";
import { Box, Text } from "grommet";
import { formatDistanceToNow } from "date-fns";
import PostVoteCounter, { PostWithVotes } from "./post-vote-counter";

interface Props {
  distance: string;
  count: number;
  post: PostWithVotes;
}
const PostItem = ({ distance, count, post }: Props) => {
  return (
    <Box direction="row" pad="medium">
      <Box flex="grow">
        <Text size="xxlarge">{post.content}</Text>
        <Text size="small" color="dark-5">
          {formatDistanceToNow(post.createdAt)} ago &middot; {distance}
        </Text>
        <Link href={`/posts/${post.id}`}>
          <Text
            size="small"
            color="accent-2"
            weight="bold"
            style={{ cursor: "pointer" }}
          >
            <a>{count} comment{count === 1 ? '' : 's'}</a>
          </Text>
        </Link>
      </Box>
      {/* {JSON.stringify(post.votes, null, 2)} */}
      <PostVoteCounter initialPost={post} />
    </Box>
  );
};

export default PostItem;
