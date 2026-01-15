import Image from 'next/image';
import { ShieldCheck, Award, ThumbsUp, CheckCircle2 } from 'lucide-react';

export default function FeatureBand() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Text */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                            <span className="w-10 h-[1px] bg-primary"></span>
                            Trusted Solar Partner
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                            Why Choose <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-green">Solar Energy Systems?</span>
                        </h2>

                        <p className="text-slate-600 max-w-lg text-lg leading-relaxed">
                            We are your trusted energy partner in Patna. Being a direct partner for top brands and a government-approved agency, we guarantee the best prices and peace of mind.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-primary">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-900 font-bold mb-1">Government Approved</h4>
                                    <p className="text-sm text-slate-500">Official vendor for PM Surya Ghar (NBPDCL & SBPDCL).</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-primary">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-900 font-bold mb-1">Super Distributor</h4>
                                    <p className="text-sm text-slate-500">Waaree, Adani, Microtek, UTL, Luminous, Tata Power.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-primary">
                                    <ThumbsUp size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-900 font-bold mb-1">25-Year Peace of Mind</h4>
                                    <p className="text-sm text-slate-500">Performance warranty on panels with local service support.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-primary">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-900 font-bold mb-1">Expert Installation</h4>
                                    <p className="text-sm text-slate-500">Certified engineers ensuring safety and max efficiency.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visuals */}
                    <div className="relative h-[600px] w-full hidden lg:block">
                        {/* Abstract Composition */}
                        <div className="absolute top-10 right-10 w-3/4 h-3/4 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl" />

                        <div className="absolute top-20 right-0 z-20 w-[350px] h-[450px] bg-slate-800 rounded-3xl overflow-hidden border border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                            <Image src="/assets/engineer.png" alt="Solar Energy Systems Engineer" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-bold text-lg">Expert Engineering</p>
                                <p className="text-xs text-gray-300">Precision Installation Team</p>
                            </div>
                        </div>

                        <div className="absolute bottom-20 left-10 z-30 w-[300px] h-[200px] bg-white rounded-2xl p-6 shadow-xl border border-white/10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">
                                    <Award />
                                </div>
                                <div>
                                    <p className="text-gray-900 font-bold text-lg">#1 Agency</p>
                                    <p className="text-gray-500 text-xs">In North Bihar Region</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-[95%]"></div>
                                </div>
                                <div className="flex justify-between text-xs text-gray-500 font-medium">
                                    <span>Customer Satisfaction</span>
                                    <span>98%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
