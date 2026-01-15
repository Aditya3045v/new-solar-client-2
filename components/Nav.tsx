'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Subsidies', href: '/#subsidies' },
        { name: 'About Us', href: '/about' },
    ];

    // Specialized Logic:
    // We now render this global Nav on ALL pages including Homepage.

    // if (pathname === '/') return null;

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-2 lg:py-4 ${pathname === '/' && !scrolled
                ? 'lg:bg-transparent bg-white/10 supports-[backdrop-filter]:backdrop-blur-sm'
                : 'bg-white/80 supports-[backdrop-filter]:backdrop-blur-md shadow-sm'
                }`}>
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">

                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-2 lg:gap-3 relative z-50">
                        <div className="w-14 h-14 lg:w-20 lg:h-20 flex items-center justify-center">
                            <Image
                                src="/assets/logo.jpg"
                                width={80}
                                height={80}
                                alt="Solar Energy Systems Logo"
                                className="object-contain w-full h-full"
                                priority
                            />
                        </div>
                        <span className="text-lg lg:text-3xl font-extrabold text-slate-900 tracking-tight">SOLAR PATNA</span>
                    </Link>

                    {/* Desktop Menu - Centered Glass Pill */}
                    <div className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-sm rounded-full p-1.5 px-6 absolute left-1/2 transform -translate-x-1/2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${pathname === link.href
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Action (Contact) */}
                    <div className="hidden lg:flex items-center">
                        <Link
                            href="/contact"
                            className="bg-black text-white px-6 py-3 rounded-full font-bold text-sm border border-transparent hover:bg-white hover:text-black hover:border-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-2 text-slate-900 relative z-50 bg-white/50 rounded-lg supports-[backdrop-filter]:backdrop-blur-md"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-2xl font-bold text-slate-900 hover:text-primary transition-colors transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-10 py-4 rounded-full bg-slate-900 text-white text-lg font-bold shadow-lg w-full text-center mt-4"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </>
    );
}

