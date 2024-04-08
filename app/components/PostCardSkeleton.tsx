export const PostCardSkeleton = () => {
  return (
    <div className="p-2 rounded-lg flex gap-4 items-center overflow-hidden break-keep w-full animate-pulse">
      <div className="w-24 h-6 bg-gray-300 rounded-md"></div>
      <div className="flex flex-col flex-grow">
        <div className="h-4 bg-gray-300 rounded-md mb-2 w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
        <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
      </div>
    </div>
  );
};
