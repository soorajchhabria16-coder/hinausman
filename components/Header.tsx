import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full py-8 px-8 md:px-16 lg:px-24 flex items-center justify-between sticky top-0 bg-[#fcfcfc]/80 backdrop-blur-md z-50">
      <Link href="/" className="font-serif text-[28px] font-bold tracking-tighter text-[#1a1a1a]">
        Hina Usman
      </Link>
      <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold text-gray-400 tracking-[0.2em]">
        <Link href="#about" className="hover:text-[#135c58] transition-colors uppercase">About</Link>
        <Link href="#services" className="hover:text-[#135c58] transition-colors uppercase">Services</Link>
        <Link href="#research" className="hover:text-[#135c58] transition-colors uppercase">Research</Link>
        <Link href="#contact" className="hover:text-[#135c58] transition-colors uppercase">Contact</Link>
      </nav>
      <div className="md:hidden w-6 h-[2px] bg-[#1a1a1a] relative after:absolute after:top-[-6px] after:left-0 after:w-full after:h-full after:bg-[#1a1a1a] before:absolute before:top-[6px] before:left-0 before:w-full before:h-full before:bg-[#1a1a1a]"></div>
    </header>
  );
}
