export const Level = ({ level }: { level: string }) => {
  let bgColor = "";
  let textColor = "";

  if (level === "Challenger") {
    bgColor = "bg-green-100";
    textColor = "text-green-800";
  } else if (level === "Middler") {
    bgColor = "bg-blue-100";
    textColor = "text-blue-800";
  } else {
    bgColor = "bg-red-100";
    textColor = "text-red-800";
  }

  return (
    <span
      className={`w-fit mb-1 ${bgColor} ${textColor} text-xs font-medium me-2 px-2.5 py-0.5 rounded-full`}>
      {level}
    </span>
  );
};
