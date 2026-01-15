'use client';

import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Zap, Battery, Sun, Cpu } from 'lucide-react';
import Image from 'next/image';

const products = [
    {
        id: 1,
        title: "ON GRID SOLAR SYSTEM",
        description: "Complete on-grid solar system with Adani 570 topcon solar module, GI Tata Structure, and PVblink inverter/statcon/waree. Perfect for residential and commercial installations with grid connectivity.",
        price: "₹60,000.00",
        image: "/products/ongrid_solar_system.png",
        features: ["Adani 570W Topcon", "GI Tata Structure", "PVblink Inverter"],
        icon: <Sun className="w-6 h-6" />
    },
    {
        id: 2,
        title: "Solar Module Mono PERC",
        description: "High-efficiency mono perc halfcut 540 wp solar panel. Advanced half-cut cell technology ensures better performance in partial shading and higher energy yield.",
        price: "₹13,500.00",
        image: "/products/mono_perc_panel.png",
        features: ["540 Watt Peak", "Half-Cut Technology", "High Efficiency"],
        icon: <Sun className="w-6 h-6" />
    },
    {
        id: 3,
        title: "Solar Plant, Battery, Inverter, LT PANEL",
        description: "Complete turnkey solar power plant solution including battery storage system, inverter unit, and LT panel for comprehensive electrical distribution. Ideal for off-grid and hybrid setups.",
        price: "Contact for Quote",
        image: "/products/solar_plant_complete.png",
        features: ["Complete Setup", "Battery Backup", "LT Panel Included"],
        icon: <Battery className="w-6 h-6" />
    },
    {
        id: 4,
        title: "AC Service",
        description: "Professional air conditioning installation, repair, and maintenance services. Our expert technicians ensure optimal cooling performance and energy efficiency for your comfort.",
        price: "Contact for Quote",
        image: "/products/ac_service.png",
        features: ["Installation", "Repair & Maintenance", "Expert Technicians"],
        icon: <Cpu className="w-6 h-6" />
    },
    {
        id: 5,
        title: "Solar Plant Maintenance Service",
        description: "Comprehensive maintenance and cleaning services for your solar installation. Regular servicing ensures maximum efficiency, longevity, and optimal power generation from your solar panels.",
        price: "Contact for Quote",
        image: "/products/solar_maintenance.png",
        features: ["Panel Cleaning", "Performance Check", "Regular Servicing"],
        icon: <Zap className="w-6 h-6" />
    },
    {
        id: 6,
        title: "Solar Aata Cakki",
        description: "Innovative solar-powered flour mill (atta chakki) for sustainable and eco-friendly grain processing. Reduce electricity costs while grinding fresh flour with clean solar energy.",
        price: "Contact for Quote",
        image: "/products/solar_atta_chakki.png",
        features: ["Solar Powered", "Eco-Friendly", "Cost Effective"],
        icon: <Zap className="w-6 h-6" />
    }
];

export default function ProductsPage() {
    const handleRequest = (productName: string) => {
        if (typeof window !== 'undefined') {
            const message = encodeURIComponent(`Hi Solar Energy Systems, I am interested in *${productName}*. Please provide more details and the best price.`);
            window.open(`https://wa.me/919430559435?text=${message}`, '_blank');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6 uppercase tracking-wider">
                        Premium Solar Equipment
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Our High-Performance <br /><span className="text-primary">Solar Products</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Explore our range of top-tier solar panels, inverters, and accessories designed to deliver maximum efficiency and long-term savings for your home and business.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-300 group"
                        >
                            {/* Image Container */}
                            <div className="h-64 relative overflow-hidden bg-gray-100">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-medium">{product.price}</p>
                                </div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full text-primary shadow-sm">
                                    {product.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Features Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {product.features.map((feature, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={() => handleRequest(product.title)}
                                    className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition-all shadow-glow-green flex items-center justify-center gap-2 group/btn"
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    Request Quote on WhatsApp
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center bg-primary/5 rounded-[3rem] p-12 border border-primary/10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        We offer custom solar solutions tailored to your specific energy needs. Contact our experts for a personalized consultation.
                    </p>
                    <button
                        onClick={() => {
                            if (typeof window !== 'undefined') {
                                window.open('https://wa.me/919430559435?text=Hi, I have a custom requirement for solar installation.', '_blank');
                            }
                        }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-all shadow-lg hover:scale-105"
                    >
                        Talk to an Expert
                    </button>
                </div>
            </div>
        </div>
    );
}
