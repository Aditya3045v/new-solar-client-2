'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (typeof window !== 'undefined') {
            const text = `*New Contact Inquiry* 🌞\n\n` +
                `*Name:* ${formData.name}\n` +
                `*Phone:* ${formData.phone}\n` +
                `*Email:* ${formData.email || 'Not provided'}\n` +
                `*Service:* ${formData.service || 'General Inquiry'}\n` +
                `*Message:* ${formData.message}\n\n` +
                `--------------------------------\n` +
                `Sent via Solar Energy Systems Website`;

            const encodedMessage = encodeURIComponent(text);
            window.open(`https://wa.me/919430559435?text=${encodedMessage}`, '_blank');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-16 pt-8">
                    <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-bold text-sm mb-6 uppercase tracking-wider">
                        Contact Us
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Get in Touch for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                            Solar Energy Systems
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Ready for high-quality solar power plants or professional electrical works? Our expert team in Patna is here to help.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10">

                    {/* Contact Information (Left Column) */}
                    <div className="lg:col-span-5 space-y-8">

                        {/* Highlights */}
                        <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Solar Energy Systems?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-green-50 rounded-lg text-green-600">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-900 font-semibold">Technical Expertise</h4>
                                        <p className="text-sm text-slate-600">Staffed by qualified professionals with hands-on industry experience.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-900 font-semibold">Full Cycle Solutions</h4>
                                        <p className="text-sm text-slate-600">We design, install, and commission complete Solar Power Plants.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-900 font-semibold">Multiple Solutuions</h4>
                                        <p className="text-sm text-slate-600">On-Grid, Off-Grid, and Hybrid Solar Systems available.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Details */}
                        <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Info</h3>
                            <div className="space-y-6">
                                <a href="tel:+919430559435" className="flex items-center gap-4 group hover:bg-slate-50 p-4 rounded-xl transition-all">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">Primary Phone</p>
                                        <p className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">094305 59435</p>
                                    </div>
                                </a>

                                <a href="mailto:contact@solarenergysystems.com" className="flex items-center gap-4 group hover:bg-slate-50 p-4 rounded-xl transition-all">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">Email Address</p>
                                        <p className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">contact@solarenergysystems.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4 rounded-xl">
                                    <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">Patna Office</p>
                                        <p className="text-lg font-bold text-gray-900">Shop No G-15, Umang Palace, Hotel Windsor Complex, Exhibition Rd, Patna, Bihar – 800001</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-xl">
                                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">Business Hours</p>
                                        <p className="text-lg font-bold text-gray-900">09:00 – 18:00 (Mon - Sun)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp Button */}
                        <button
                            onClick={() => {
                                if (typeof window !== 'undefined') {
                                    const message = encodeURIComponent("Hi Solar Energy Systems! I'm interested in Solar Power Solutions.");
                                    window.open(`https://wa.me/919430559435?text=${message}`, '_blank');
                                }
                            }}
                            className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group"
                        >
                            <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
                            Chat on WhatsApp
                        </button>
                    </div>

                    {/* Contact Form (Right Column) */}
                    <div className="lg:col-span-7">
                        <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 h-full shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                            <p className="text-slate-600 mb-8">Fill in the form below and our Patna team will contact you shortly.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Phone *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Your Phone Number"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Email (Optional)</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email Address"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Service Interested In</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors appearance-none"
                                    >
                                        <option value="" className="bg-white">Select Service</option>
                                        <option value="solar-plant" className="bg-white">Solar Power Plant</option>
                                        <option value="lt-panels" className="bg-white">LT Panels</option>
                                        <option value="ac-works" className="bg-white">AC Works</option>
                                        <option value="electrical" className="bg-white">Electrical Works</option>
                                        <option value="other" className="bg-white">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Message *</label>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you today?"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors resize-none"
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all shadow-glow-blue flex items-center justify-center gap-2 group">
                                    Send Message <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
