'use client';

import { ArrowRight, Phone, Calculator, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Animated Background Gradients */}
            <div className="absolute inset-0 bg-blue-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                <div className="relative">
                    {/* Glassmorphic Container */}
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden">

                        {/* Gradient Glow Effect */}
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-[100px]" />
                        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/30 rounded-full blur-[100px]" />

                        <div className="relative z-10 text-center max-w-4xl mx-auto">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full px-5 py-2 mb-6 shadow-sm">
                                <Sparkles className="w-4 h-4 text-yellow-500" />
                                <span className="text-sm font-semibold text-gray-700 tracking-wide">LIMITED TIME OFFER</span>
                            </div>

                            {/* Headline */}
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Ready to Save{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-green-600">
                                    ₹1 Lakh+
                                </span>
                                {' '}Every Year?
                            </h2>

                            {/* Subheadline */}
                            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Join hundreds of happy homeowners in Patna, Bihar who switched to solar with Solar Energy Systems.
                                Get <span className="font-bold text-gray-900">FREE installation quote</span> &
                                <span className="font-bold text-green-600"> government subsidy assistance</span>.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                {/* Primary CTA - WhatsApp */}
                                <Link
                                    href="/contact"
                                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg rounded-full hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 hover:scale-105 flex items-center gap-3"
                                >
                                    <Phone className="w-5 h-5" />
                                    Get Free Quote Now
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                {/* Secondary CTA - Calculator */}
                                <Link
                                    href="#calculator"
                                    className="group px-8 py-4 bg-white border-2 border-slate-200 text-gray-700 font-bold text-lg rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center gap-3 hover:scale-105"
                                >
                                    <Calculator className="w-5 h-5 group-hover:text-yellow-500 transition-colors" />
                                    Calculate Savings
                                </Link>
                            </div>

                            {/* Trust Indicators */}
                            <div className="mt-10 pt-8 border-t border-white/10">
                                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm text-slate-300">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        <span className="font-medium">25-Year Warranty</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        <span className="font-medium">No-Cost EMI Available</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        <span className="font-medium text-gray-600">Gov&apos;t Subsidy Upto 78,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500/20 rounded-full blur-2xl" />
                </div>
            </div>
        </section>
    );
}
