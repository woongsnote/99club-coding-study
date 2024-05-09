import { Chip } from "@nextui-org/chip";

export const Level = ({ level }: { level: string }) => {
  let bgColor = "";
  let textColor = "";

  if (level === "Challenger") {
    bgColor = "bg-green-100";
    textColor = "text-green-800";
  } else if (level === "Middler") {
    bgColor = "bg-blue-100";
    textColor = "text-blue-800";
  } else if (level === "Beginner") {
    bgColor = "bg-red-100";
    textColor = "text-red-800";
  } else {
    bgColor = "bg-gray-100";
    textColor = "text-gray-800";
  }

  return (
    <Chip className={`${bgColor} ${textColor}`} variant="solid">
      {level}
    </Chip>
  );
};
