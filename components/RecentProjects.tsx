'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "5kW Residential System",
        location: "Katihar City, Bihar",
        desc: "Complete rooftop installation with Tata Power panels and net metering for the Sharma residence.",
        image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&q=80&w=800",
        savings: "₹4,500/mo"
    },
    {
        id: 2,
        title: "20kW Commercial Grid",
        location: "Purnea Market",
        desc: "High-efficiency solar grid for a shopping complex, reducing overhead costs by 60%.",
        image: "https://images.unsplash.com/photo-1667503732486-a06869818ae9?auto=format&fit=crop&q=80&w=800",
        savings: "₹18,000/mo"
    },
    {
        id: 3,
        title: "Agri-Pump Installation",
        location: "Araria District",
        desc: "PM-KUSUM 5HP solar pump installation for irrigation, enabling zero-fuel farming.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
        savings: "₹1.2 Lakh/yr"
    }
];

export default function RecentProjects() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Our Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Recent <span className="text-primary">Installations</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            See how we are empowering homes and businesses across North Bihar with sustainable energy solutions.
                        </p>
                    </div>
                    <Link
                        href="/projects"
                        className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:border-primary hover:text-primary transition-all group"
                    >
                        View All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
                            {/* Image Container */}
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-primary shadow-sm z-10">
                                    Saved {project.savings}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                                    <MapPin className="w-4 h-4" /> {project.location}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-2">
                                    {project.desc}
                                </p>
                                <div className="flex items-center text-primary font-bold text-sm tracking-wide uppercase group-hover:gap-2 transition-all cursor-pointer">
                                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold shadow-lg hover:bg-primary-hover transition-all w-full justify-center"
                    >
                        View All Projects <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
