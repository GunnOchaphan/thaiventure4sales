import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center px-8 py-4 border-b">
      <nav className="flex pl-6 space-x-6">
        <Link href="/" className="hover:underline font-bold font-b">ThaiVenture4Sales.com</Link>
        <Link href="/how-it-works" className="hover:underline">How it works</Link>
        <Link href="/about" className="hover:underline">About</Link>
      </nav>
    </header>
  )
}
