import { Home, Factory, Battery, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Solar Solutions | Residential, Commercial & Off-Grid - PowerLink Bihar',
    description: 'Complete solar energy solutions for homes, businesses, and farms in Bihar. Residential rooftop, commercial installations, off-grid systems, and solar water pumps with government subsidies.',
    keywords: 'residential solar bihar, commercial solar installation katihar, off-grid solar systems bihar, solar water pump pm-kusum bihar',
    openGraph: {
        title: 'Solar Energy Solutions for Every Need - PowerLink',
        description: 'Customized solar solutions from 1kW homes to large commercial installations across Bihar.',
        type: 'website',
    },
    alternates: {
        canonical: 'https://powerlinkbihar.in/solutions',
    },
};

export default function Solutions() {
    return (
        <div className="min-h-screen bg-bg-deep text-white pt-32 pb-20">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Energy Solutions</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">Tailored renewable energy systems for every application, from small homes to large factories.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Residential Solar",
                            icon: Home,
                            desc: "Complete home solar packages with battery backup and smart monitoring. Save up to 90% on electricity bills.",
                            features: ["25-year warranty", "App control", "Net metering ready"]
                        },
                        {
                            title: "Commercial & Industrial",
                            icon: Factory,
                            desc: "Large-scale solar installations for businesses, schools, and factories to reduce operational costs.",
                            features: ["Custom design", "Accelerated Depreciation", "ROI in 3-4 years"]
                        },
                        {
                            title: "Off-Grid Systems",
                            icon: Battery,
                            desc: "Fully independent power systems for remote locations, farmhouses, and areas with unreliable grid.",
                            features: ["100% self-sufficient", "Li-Ion / Lead Acid", "Weather resistant"]
                        }
                    ].map((solution, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 hover:border-primary/30 transition-all group">
                            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <solution.icon size={32} />
                            </div>
                            <h2 className="text-2xl font-bold mb-3 text-white">{solution.title}</h2>
                            <p className="text-slate-400 mb-6 leading-relaxed">{solution.desc}</p>
                            <div className="space-y-3">
                                {solution.features.map((feature, j) => (
                                    <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
