import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          Honglei Li
        </Link>

        <div className="flex gap-6 text-sm font-medium text-gray-700">

          <Link href="/" className="hover:text-black">
            Home
          </Link>

          <Link href="/writing" className="hover:text-black">
            Writing
          </Link>

          <Link href="/fashion" className="hover:text-black">
            Fashion
          </Link>

          <Link href="/about" className="hover:text-black">
            About
          </Link>

          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>

        </div>
      </nav>
    </header>
  );
}