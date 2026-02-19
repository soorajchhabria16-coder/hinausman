import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full py-6 px-8 md:px-16 lg:px-24 flex items-center justify-between sticky top-0 bg-[#fcfcfc]/90 backdrop-blur-sm z-50">
      <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-[#1a1a1a]">
        Hina Usman
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 tracking-wide">
        <Link href="#about" className="hover:text-[#135c58] transition-colors">ABOUT</Link>
        <Link href="#services" className="hover:text-[#135c58] transition-colors">SERVICES</Link>
        <Link href="#research" className="hover:text-[#135c58] transition-colors">RESEARCH</Link>
        <Link href="#contact" className="hover:text-[#135c58] transition-colors">CONTACT</Link>
      </nav>
    </header>
  );
}
