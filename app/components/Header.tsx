import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center p-4 w-full text-primary-orange">
      <h1 className="text-2xl font-bold">MoviesHub</h1>
      <Link href="/">
        Home
      </Link>
    </div>
  );
}
