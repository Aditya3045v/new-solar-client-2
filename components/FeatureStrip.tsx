import Image from 'next/image';
import { ArrowRight, FileCheck, Ruler, Zap } from 'lucide-react';

export default function FeatureStrip() {
    return (
        <section className="relative z-30 -mt-24 max-w-[1440px] mx-auto px-4 md:px-8 pointer-events-none">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pointer-events-auto">

                {/* Card 1: Net Metering Experts (The Big Value Prop) */}
                <div className="col-span-12 md:col-span-5 h-[400px]">
                    <div className="bg-gradient-to-br from-primary to-[#0041A3] rounded-[2rem] p-8 relative overflow-hidden shadow-2xl h-full border border-white/10 group flex flex-col justify-between">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6">
                                <Zap className="w-4 h-4 text-yellow-400" fill="currentColor" />
                                <span className="text-white text-sm font-bold tracking-wide">NBPDCL / SBPDCL Approved</span>
                            </div>
                            <h3 className="text-4xl font-bold text-white leading-tight mb-2">
                                Net Metering <br />
                                Specialists
                            </h3>
                            <p className="text-blue-100 text-lg max-w-sm">
                                Sell excess power back to the grid. We handle all approvals with North/South Bihar Power Distribution Company.
                            </p>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <button className="bg-white text-primary px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                                Check Eligibility <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Decorative Meter Visual */}
                        <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 group-hover:scale-110 transition-transform duration-700">
                            <Image src="/assets/solar-panel.png" alt="Net Meter" fill className="object-contain" />
                        </div>
                    </div>
                </div>

                {/* Card 2 & 3: Trust & Process */}
                <div className="col-span-12 md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">

                    {/* Trust Card */}
                    <div className="min-h-[300px] md:h-auto">
                        <div className="bg-white rounded-[2rem] p-8 shadow-xl flex flex-col justify-between h-full border border-gray-200 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-125" />

                            <div>
                                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:rotate-12 transition-transform">
                                    <FileCheck className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-2">
                                    48-Hour Quote <br /> Guarantee
                                </h3>
                                <p className="text-slate-500 font-medium">
                                    Get a precise quotation with subsidy calculation within 2 days.
                                </p>
                            </div>

                            <div className="mt-6">
                                <div className="flex -space-x-3">
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"></div>
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400"></div>
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-white text-xs font-bold">+2k</div>
                                </div>
                                <p className="text-xs text-slate-400 mt-2 font-medium">Happy Customers in Bihar</p>
                            </div>
                        </div>
                    </div>

                    {/* Site Survey Card */}
                    <div className="min-h-[300px] md:h-auto">
                        <div className="bg-[#0f172a] rounded-[2rem] p-8 shadow-xl text-white flex flex-col justify-between h-full border border-white/10 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                            {/* Grid Pattern */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                            <div>
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-colors">
                                    <Ruler className="w-7 h-7" />
                                </div>
                                <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full mb-3 border border-green-500/20">
                                    LIMITED TIME
                                </div>
                                <h3 className="text-2xl font-bold mb-2">
                                    Free Site <br /> Survey
                                </h3>
                            </div>

                            <div className="mt-auto">
                                <p className="text-slate-400 text-sm mb-4">
                                    Our expert will visit your property in the Patna area to assess roof feasibility and electrical requirements.
                                </p>
                                <a href="tel:+919430559435" className="text-white font-bold border-b border-primary hover:text-primary transition-colors pb-0.5 inline-flex items-center gap-1">
                                    Book Visit Now <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
