import { Post } from ".prisma/client";
import { Box } from "grommet";
import { formatDistanceToNow } from 'date-fns';

const PostItem = (post: Post) => {

  return <Box pad="medium">
    <h2>{post.content}</h2>
    <p>{formatDistanceToNow(post.createdAt)} ago</p>
  </Box>
};

export default PostItem;