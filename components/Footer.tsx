import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#020617] text-gray-400 pt-20 pb-10 border-t border-white/5">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">

                {/* Newsletter Bar */}
                <div className="mb-20 bg-white/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Stay Updated</h4>
                            <p className="text-sm opacity-60">Get the latest solar news and subsidy updates.</p>
                        </div>
                    </div>

                    <div className="w-full md:w-auto relative flex-1 max-w-md">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-[#0F172A] border border-white/10 rounded-full py-3 pl-6 pr-32 text-white focus:outline-none focus:border-primary transition-colors"
                        />
                        <button className="absolute right-1 top-1 bottom-1 bg-primary hover:bg-primary-hover text-white px-6 rounded-full text-sm font-semibold transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6 text-white text-2xl font-bold">
                            <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
                                <img src="/assets/logo.jpg" alt="Solar Energy Systems Logo" className="w-full h-full object-contain" />
                            </div>
                            <span>SOLAR <span className="text-primary">ENERGY SYSTEMS</span></span>
                        </div>
                        <p className="max-w-sm text-sm leading-relaxed mb-6 text-slate-400">
                            Leading solar power solutions company in Patna, Bihar. Designing, installing, and commissioning solar power plants with technical excellence for residential and commercial needs.
                        </p>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-sm">
                                <Phone size={16} className="text-primary" />
                                <span>+91 94305 59435</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Mail size={16} className="text-primary" />
                                <span>contact@solarenergysystems.com</span>
                            </div>
                            <div className="flex items-start gap-3 text-sm text-slate-400">
                                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                                <span>Shop No G-15, Umang Palace, Hotel Windsor Complex, Exhibition Rd, Patna, Bihar – 800001</span>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors cursor-pointer"><Facebook size={14} /></div>
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors cursor-pointer"><Twitter size={14} /></div>
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors cursor-pointer"><Instagram size={14} /></div>
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors cursor-pointer"><Linkedin size={14} /></div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="text-white font-bold mb-6">Company</h5>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="/#calculator" className="hover:text-primary transition-colors">Solar Calculator</Link></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h5 className="text-white font-bold mb-6">Solutions</h5>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/#calculator" className="hover:text-primary transition-colors">Solar Power Plants</Link></li>
                            <li><Link href="/#calculator" className="hover:text-primary transition-colors">On-Grid Systems</Link></li>
                            <li><Link href="/#calculator" className="hover:text-primary transition-colors">Off-Grid Solutions</Link></li>
                            <li><Link href="/#calculator" className="hover:text-primary transition-colors">Hybrid Solar</Link></li>
                        </ul>
                    </div>

                    {/* Government Schemes - Real Links */}
                    <div>
                        <h5 className="text-white font-bold mb-6">Services</h5>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="/contact" className="hover:text-primary transition-colors">LT Panels</a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-primary transition-colors">AC Works</a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-primary transition-colors">Electrical Works</a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-primary transition-colors">Technical Survey</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>© Solar Energy Systems 2026. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/privacy" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
