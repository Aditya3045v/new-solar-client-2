import { Building, Award, Users, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Solar Energy Systems | Solar Experts in Patna',
    description: 'We are a leading solar power solution provider in Patna, Bihar. Dedicated to sustainable energy, we design and install high-efficiency solar power systems.',
    keywords: 'about solar energy systems, solar patna, solar installation bihar, solar power plants patna, renewable energy patna',
    openGraph: {
        title: 'About Solar Energy Systems - Renewable Energy Experts',
        description: 'Solar Energy Systems is driven by a passion for green energy and customer satisfaction in Patna.',
        type: 'website',
    },
    alternates: {
        canonical: 'https://solarenergysystems.in/about',
    },
};

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Powering Patna with <span className="text-primary">Sustainable Solar</span></h1>
                    <p className="text-xl text-slate-600">Solar Energy Systems is a trusted name in renewable energy, committed to bringing clean power to homes and businesses in Bihar.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all">
                        <Building className="w-12 h-12 text-primary mb-6" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                        <p className="text-slate-600">To accelerate the adoption of solar energy in Patna by providing accessible, high-quality solar installation services.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all">
                        <Award className="w-12 h-12 text-accent-green mb-6" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Local Expertise</h3>
                        <p className="text-slate-600">Deep understanding of local energy needs and government subsidies available in Bihar for maximum customer benefit.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all">
                        <Users className="w-12 h-12 text-yellow-500 mb-6" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
                        <p className="text-slate-600">We prioritize long-term relationships, offering comprehensive improved post-installation support and maintenance.</p>
                    </div>
                </div>

                <div className="bg-primary/5 rounded-[2rem] p-8 md:p-12 border border-primary/10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Specialized Services</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Design & Installation of Solar Plants",
                            "On-Grid, Off-Grid & Hybrid Solar Systems",
                            "LT Panel Manufacturing & Installation",
                            "Comprehensive Electrical & AC Works",
                            "Technical Site Feasibility Surveys",
                            "Maintenance & Post-Installation Support"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-gray-900 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
