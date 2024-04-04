const year = new Date().getFullYear();
export const Footer = () => {
  return (
    <footer className="w-full p-2">
      <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
        &copy; {year}. woongsnote All rights reserved.
      </p>
    </footer>
  );
};
