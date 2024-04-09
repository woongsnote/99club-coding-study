const tags = ["99일지", "99클럽", "TIL", "개발자스터디", "코딩테스트", "항해"];

export const TagList = () => {
  return (
    <div className="flex flex-wrap gap-2 text-sm items-center justify-center">
      {tags.map((tag) => (
        <span key={tag}>
          #{tag}
        </span>
      ))}
    </div>
  );
};
