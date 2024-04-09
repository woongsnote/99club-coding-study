export const PostSkeleton = () => {
  return (
    <article className="w-full flex flex-col p-4 rounded-lg mx-auto border-2 animate-pulse">
      <div className="w-full border-b items-center flex flex-col pb-4 gap-6">
        <div className="w-full flex justify-between">
          <div className="h-4 bg-gray-300 rounded w-24"></div>
          <div className="h-4 bg-gray-300 rounded w-24"></div>
        </div>
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-32"></div>
      </div>
      <div className="mt-4 w-full prose p-2 lg:max-w-3xl mx-auto bg-gray-300 rounded h-64"></div>
    </article>
  );
};
