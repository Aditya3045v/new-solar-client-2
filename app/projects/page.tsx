import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Solar Projects & Case Studies | PowerLink Solutions Bihar',
    description: 'View our completed solar installation projects in Katihar,Purnea, and Bihar. Residential rooftop systems, commercial solar grids, and agricultural solar pumps with real customer results.',
    keywords: 'solar projects bihar, solar installation case studies katihar, residential solar project bihar, commercial solar katihar',
    openGraph: {
        title: 'Our Solar Projects Across Bihar - PowerLink Solutions',
        description: '500+ successful solar installations with proven savings and customer satisfaction.',
        type: 'website',
    },
    alternates: {
        canonical: 'https://powerlinkbihar.in/projects',
    },
};

export default function ProjectsPage() {
    return (
        <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Recent <span className="text-primary">Projects</span></h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">See how we are transforming homes and businesses across Bihar with sustainable solar energy.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/50 shadow-lg hover:shadow-xl transition-all">
                        <div className="h-64 bg-slate-100 relative">
                            {/* Placeholder for project image */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold bg-slate-50">
                                Residential 5kW
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="text-sm text-primary font-bold mb-2">Katihar City</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Residential Rooftop Installation</h3>
                            <p className="text-slate-600 text-sm">5kW Tata Power System with Net Metering. Saving ₹4,500 monthly for the Sharma family.</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/50 shadow-lg hover:shadow-xl transition-all">
                        <div className="h-64 bg-slate-100 relative">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold bg-slate-50">
                                Commercial 20kW
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="text-sm text-primary font-bold mb-2">Purnea Market</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Shopping Complex Solar Grid</h3>
                            <p className="text-slate-600 text-sm">20kW Waaree Panels. powering common areas and lifts, reducing overheads by 60%.</p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/50 shadow-lg hover:shadow-xl transition-all">
                        <div className="h-64 bg-slate-100 relative">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold bg-slate-50">
                                Agri-Pump 5HP
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="text-sm text-primary font-bold mb-2">Araria Farm</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">PM-KUSUM Solar Pump</h3>
                            <p className="text-slate-600 text-sm">5HP Submersible Pump. Zero diesel cost farming for local agricultural land.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-900 mb-6 font-medium">Want to see more?</p>
                    <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-bold transition-all shadow-glow-blue hover:scale-105">
                        Contact Us for a Site Visit
                    </Link>
                </div>
            </div>
        </div>
    );
}
