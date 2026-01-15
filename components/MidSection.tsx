import { Award, Users, TrendingUp, Clock, ShieldCheck, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function MidSection() {
    const benefits: any[] = [];

    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50 pointer-events-none" />
            <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">

                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm lg:text-base mb-3 block">Why Solar Energy Systems? / हम ही क्यों?</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 lg:mb-8">
                        Bihar&apos;s Trusted Solar <span className="text-gradient">Partner</span>
                    </h2>
                    <p className="text-slate-600 max-w-4xl mx-auto text-lg lg:text-xl xl:text-2xl leading-relaxed">
                        As Patna&apos;s leading solar solutions provider, we deliver excellence in renewable energy. <br /> <span className="text-base font-medium text-slate-500">(पटना के अग्रणी सोलर समाधान प्रदाता के रूप में, हम नवीकरणीय ऊर्जा में उत्कृष्टता प्रदान करते हैं।)</span>
                    </p>
                </div>

                {/* Benefits Grid */}
                {/* Benefits Grid - HIDDEN/REMOVED */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mb-16 lg:mb-20 animate-fade-in-up">
                    {/* Benefits were here */}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-2 lg:gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-primary hover:bg-primary-hover text-white font-bold text-base lg:text-lg xl:text-xl rounded-full transition-all shadow-glow-blue hover:scale-105"
                    >
                        Learn More About Us
                        <ArrowRight size={20} className="lg:w-6 lg:h-6" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
