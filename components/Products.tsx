'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        title: "ON GRID SOLAR SYSTEM",
        description: "Adani 570 topcon solar module, GI Tata Structure, PVblink inverter/statcon/waree.",
        price: "₹60,000.00",
        image: "/products/ongrid_solar_system.png"
    },
    {
        id: 2,
        title: "Solar Module Mono PERC",
        description: "Mono perc halfcut 540 wp - High efficiency monocrystalline panel.",
        price: "₹13,500.00",
        image: "/products/mono_perc_panel.png"
    },
    {
        id: 3,
        title: "Solar Plant, Battery, Inverter, LT PANEL",
        description: "Complete solar power plant setup with battery storage, inverter and LT panel distribution.",
        price: "Contact for Quote",
        image: "/products/solar_plant_complete.png"
    },
    {
        id: 4,
        title: "AC Service",
        description: "Professional AC installation and maintenance services.",
        price: "Contact for Quote",
        image: "/products/ac_service.png"
    },
    {
        id: 5,
        title: "Solar Plant Maintenance Service",
        description: "Expert maintenance and cleaning services for your solar installation.",
        price: "Contact for Quote",
        image: "/products/solar_maintenance.png"
    },
    {
        id: 6,
        title: "Solar Aata Cakki",
        description: "Solar-powered flour mill for sustainable grain processing.",
        price: "Contact for Quote",
        image: "/products/solar_atta_chakki.png"
    }
];

export default function Products() {
    return (
        <section className="py-24 bg-secondary relative overflow-hidden">
            {/* Background Gradients - Light Theme */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-green/5 rounded-full blur-[120px]" />

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Premium <span className="text-gradient">Products</span></h2>
                        <p className="text-gray-600 text-lg max-w-xl">
                            Discover top-tier solar equipment designed for durability, efficiency, and maximum savings.
                        </p>
                    </motion.div>
                    <div className="hidden md:block">
                        <Link href="/products">
                            <button className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-white hover:shadow-lg transition-all">
                                View All Products
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Sliding Interface & Desktop Grid */}
                <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="min-w-[85vw] md:min-w-0 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group snap-center"
                        >
                            <div className="h-48 md:h-64 overflow-hidden relative">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-duration-700 transition-transform"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 z-10" />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <span className="px-3 py-1 bg-white/90 text-primary text-xs font-bold rounded-full backdrop-blur-md shadow-sm">
                                        Best Seller
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                    <span className="text-primary font-bold">{product.price}</span>
                                    <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-8 md:hidden flex justify-center">
                    <Link href="/products" className="w-full">
                        <button className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-white hover:shadow-lg transition-all w-full">
                            View All Products
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
