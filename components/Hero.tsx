'use client';

import { ArrowRight, Zap, Play, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-slate-50 flex items-center justify-center p-4 pt-24 lg:p-6 lg:pt-32 overflow-hidden">

            {/* 
               HERO CONTAINER 
               - Floating Glass Panel Effect
               - Rounded Corners (40px)
               - Internal Nav
            */}
            <div className="relative w-full max-w-[1400px] h-[90vh] lg:h-[80vh] min-h-[700px] rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-black/5 isolate">

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/hero_solar_panels.png"
                        alt="Solar Energy Systems Sustainable Energy Solutions in Patna"
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 1400px"
                    />
                    {/* Cinematic Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* 
                   ORGANIC CUT-OUTS (The "Bite" Effects)
                   We use absolute divs with the page background color to create "cuts"
                */}



                {/* 
                   TOP RIGHT CUT-OUT (Smoother Tab Style)
                   This white block sits on top of the hero image to create the "inverse" curve effect.
                   It houses the "Contact Us" button.
                */}



                {/* INTERNAL NAVIGATION (Floating Glass) */}



                {/* HERO CONTENT */}
                <div className="relative z-30 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-5xl pt-24 lg:pt-0">

                    {/* Tag */}


                    {/* Headline */}
                    <div className="relative">
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] lg:leading-[0.95] tracking-tight mb-6 lg:mb-8 drop-shadow-lg">
                            Solar Solutions<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
                                for a Better
                            </span><br />
                            Lifestyle
                        </h1>
                    </div>

                    {/* Subheadline */}
                    <div className="p-4 lg:p-6 bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl lg:rounded-3xl max-w-2xl mb-8 lg:mb-10 hover:bg-white/10 transition-colors duration-500">
                        <p className="text-base md:text-lg lg:text-xl text-slate-200 font-light leading-relaxed">
                            Discover renewable energy with <strong className="text-white">Solar Energy Systems&apos;</strong> cutting-edge panels.
                            Designed for sustainability, cost-efficiency, and a brighter future for Patna.
                        </p>
                    </div>

                    {/* Primary Web Request CTA */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#calculator"
                            className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] transition-all hover:scale-105"
                        >
                            Get Started
                            <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                                <ArrowUpRight className="w-4 h-4 text-white" />
                            </div>
                        </Link>

                        <Link
                            href="#calculator"
                            className="inline-flex sm:hidden items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_-5px_rgba(0,86,210,0.4)] transition-all hover:scale-105 border-2 border-white/20"
                        >
                            <Zap className="w-5 h-5" />
                            Calculate Savings
                        </Link>

                        <button className="hidden sm:flex w-14 h-14 rounded-full border border-white/30 items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm">
                            <Play className="w-6 h-6 ml-1 fill-current" />
                        </button>
                    </div>

                </div>

            </div>





        </section>
    );
}
