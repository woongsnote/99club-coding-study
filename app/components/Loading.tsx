import { PostCardSkeleton } from "./PostCardSkeleton";

export const Loading = ({ arrayLength }: { arrayLength?: number }) => {
  const skeletonArray = new Array(arrayLength).fill(0);

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
