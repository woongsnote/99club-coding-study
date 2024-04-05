function dateToMonth(date: Date): string {
  return date.toLocaleDateString("en", { month: "short" });
}

export const FormattedDate = ({ date }: { date: string }) => {
  const currentDate = new Date(date);
  const month = dateToMonth(currentDate);
  const day = currentDate.getDate();
  return (
    <div className="flex flex-col w-fit p-2 items-start border-r">
      <span className="mb-1 opacity-70">{month}</span>
      <span className="text-2xl font-semibold leading-none">{day}</span>
    </div>
  );
};
