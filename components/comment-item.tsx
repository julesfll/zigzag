import { Comment } from ".prisma/client";
import { Box, Text, Avatar } from "grommet";
import { formatDistanceToNow } from "date-fns";
import EmojiAvatar from './emoji-avatar';

interface Props extends Comment {
  distance: string;
  postAuthorId: string;
}
const CommentItem = ({ distance, postAuthorId, ...comment }: Props) => {
  return (
    <Box direction="row" pad="small" gap="medium">
      {postAuthorId === comment.authorId ? (
        <Avatar background="light-3"><Text color="accent-2" weight="bolder">OP</Text></Avatar>
      ) : (
        <EmojiAvatar postId={comment.postId} authorId={comment.authorId} />
      )}
      <Box>
        <Text size="large">{comment.content}</Text>
        <Text size="xsmall" color="dark-5">
          {formatDistanceToNow(comment.createdAt)} ago &middot; {distance}
        </Text>
      </Box>
    </Box>
  );
};

export default CommentItem;