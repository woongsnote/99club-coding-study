import { PostCardSkeleton } from "./PostCardSkeleton";

export const Loading = ({ len }: { len: number }) => {
  const skeletonArray = new Array(len).fill(0);

  return (
    <ul>
      {skeletonArray.map((_, index) => (
        <li key={index}>
          <PostCardSkeleton />
        </li>
      ))}
    </ul>
  );
};
