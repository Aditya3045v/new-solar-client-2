'use client';

import { useState, useMemo } from 'react';
import { Sun, Wallet, Battery, AlertTriangle, Leaf, Info } from 'lucide-react';
import Link from 'next/link';

export default function SolarCalculator() {
    // ... same state and effect logic ...
    const [bill, setBill] = useState(3000);
    const [roofArea, setRoofArea] = useState(300);

    const TARIFF = 7;
    const SUN_HOURS = 4.5;
    const COST_PER_KW = 55000;
    const SQFT_PER_KW = 100;
    const DEGRADATION = 0.005;
    const CO2_FACTOR = 0.82;

    const stats = useMemo(() => {
        const monthlyUnits = bill / TARIFF;
        let calculatedSize = (monthlyUnits / 30) / SUN_HOURS;
        calculatedSize = Math.max(1, Math.round(calculatedSize));
        const maxCapacityByArea = roofArea / SQFT_PER_KW;
        const areaWarning = calculatedSize > maxCapacityByArea;
        const cost = calculatedSize * COST_PER_KW;
        let calculatedSubsidy = 0;
        if (calculatedSize <= 2) {
            calculatedSubsidy = calculatedSize * 30000;
        } else if (calculatedSize <= 3) {
            calculatedSubsidy = (2 * 30000) + ((calculatedSize - 2) * 18000);
        } else {
            calculatedSubsidy = 78000;
        }
        const net = cost - calculatedSubsidy;
        const dailyGen = calculatedSize * SUN_HOURS;
        const annualGen = dailyGen * 365;
        const year1Savings = annualGen * TARIFF;
        let totalLifetimeSavings = 0;
        let currentYearGen = annualGen;
        for (let i = 0; i < 25; i++) {
            totalLifetimeSavings += currentYearGen * TARIFF;
            currentYearGen *= (1 - DEGRADATION);
        }
        const co2 = annualGen * CO2_FACTOR;

        return {
            systemSize: calculatedSize,
            totalCost: cost,
            subsidy: calculatedSubsidy,
            netCost: net,
            annualSavings: year1Savings,
            lifetimeSavings: totalLifetimeSavings,
            co2Offset: co2,
            areaWarning
        };
    }, [bill, roofArea]);

    const { systemSize, totalCost, subsidy, netCost, annualSavings, lifetimeSavings, co2Offset, areaWarning } = stats;

    return (
        <section id="calculator" className="relative overflow-hidden py-24 bg-white">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-accent-green/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-accent-blue font-semibold uppercase tracking-widest text-sm mb-2 block">Precise Engineering</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Solar <span className="text-gradient">ROI Calculator</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Get an instant estimate based on Patna (Bihar) solar irradiation data and current industrial standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left: Inputs Panel */}
                    <div className="lg:col-span-5 bg-white border border-gray-200 rounded-[2rem] p-8 md:p-10 shadow-xl">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <Sun className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Your Usage</h3>
                        </div>

                        {/* Bill Slider */}
                        <div className="mb-10">
                            <div className="flex justify-between items-end mb-4">
                                <label className="text-gray-700 font-medium">Monthly Bill</label>
                                <span className="text-3xl font-bold text-gray-900 flex items-baseline gap-1">
                                    ₹{bill.toLocaleString()}
                                    <span className="text-sm font-normal text-gray-500">/mo</span>
                                </span>
                            </div>
                            <input
                                type="range"
                                min="1000"
                                max="15000"
                                step="500"
                                value={bill}
                                onChange={(e) => setBill(Number(e.target.value))}
                                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer hover:bg-gray-300 transition-colors accent-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2">
                                <span>₹1k</span>
                                <span>₹15k</span>
                            </div>
                        </div>

                        {/* Roof Area Slider */}
                        <div className="mb-8">
                            <div className="flex justify-between items-end mb-4">
                                <label className="text-gray-700 font-medium">Roof Area</label>
                                <span className="text-3xl font-bold text-gray-900 flex items-baseline gap-1">
                                    {roofArea}
                                    <span className="text-sm font-normal text-gray-500">sq.ft</span>
                                </span>
                            </div>
                            <input
                                type="range"
                                min="100"
                                max="2000"
                                step="50"
                                value={roofArea}
                                onChange={(e) => setRoofArea(Number(e.target.value))}
                                className={`w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 ${areaWarning ? 'accent-red-500 focus:ring-red-500/50' : 'accent-accent-green focus:ring-accent-green/50'}`}
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2">
                                <span>100 sq.ft</span>
                                <span>2000 sq.ft</span>
                            </div>
                        </div>

                        {/* Area Warning */}
                        {areaWarning && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <div className="text-sm">
                                    <p className="font-bold text-red-200">Limited Roof Space</p>
                                    <p className="text-red-300/80 mt-1">
                                        You need approx {Math.ceil(systemSize * SQFT_PER_KW)} sq.ft for a {systemSize}kW system. Efficiencies may drop.
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                                <Info className="w-4 h-4" /> Recommended System:
                            </div>
                            <div className="text-4xl font-bold text-gray-900">
                                {systemSize} <span className="text-2xl text-primary">kW</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Investment Card */}
                        <div className="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-8 text-gray-900 shadow-xl flex flex-col justify-between h-full relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full transition-transform group-hover:scale-125 origin-top-right" />
                            <div className="relative z-10">
                                <h4 className="text-gray-500 font-medium mb-1">Estimated Cost</h4>
                                <div className="text-3xl font-bold text-gray-900 mb-6">₹{totalCost.toLocaleString()}</div>

                                <h4 className="text-green-600 font-bold mb-1 flex items-center gap-2">
                                    <Leaf className="w-4 h-4" fill="currentColor" /> Govt Subsidy
                                </h4>
                                <div className="text-2xl font-bold text-green-600 mb-6">- ₹{subsidy.toLocaleString()}</div>

                                <div className="border-t border-gray-100 pt-6 mt-2">
                                    <h4 className="text-gray-900 font-bold text-sm uppercase tracking-wide mb-2">Net Investment</h4>
                                    <div className="text-4xl md:text-5xl font-extrabold text-primary">
                                        ₹{netCost.toLocaleString()}
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="space-y-6">

                            {/* Savings & Impact Column */}
                            <div className="p-6 rounded-3xl bg-amber-50 border border-amber-100 sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div className="text-center sm:text-left">
                                    <div className="text-sm text-amber-600 mb-1 font-medium">Govt. Subsidy Unlocked</div>
                                    <div className="text-4xl font-bold text-amber-600">₹{Math.round(subsidy).toLocaleString()}</div>
                                    <div className="text-xs text-amber-500 mt-1">PM Surya Ghar Yojana</div>
                                </div>
                                <div className="h-full w-px bg-amber-200 hidden sm:block"></div>
                                <div className="text-center sm:text-right">
                                    <div className="text-sm text-gray-500 mb-1">Net Cost to You</div>
                                    <div className="text-3xl font-bold text-gray-900">₹{Math.round(netCost).toLocaleString()}</div>
                                    <div className="text-xs text-gray-400 mt-1">Total: ₹{totalCost.toLocaleString()}</div>
                                </div>
                            </div>



                            {/* 25 Year Savings - Big Card */}
                            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/10 sm:col-span-2 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Battery className="w-6 h-6 text-primary" />
                                            <span className="text-primary font-bold tracking-wider text-sm uppercase">25-Year Impact</span>
                                        </div>
                                        <div className="text-5xl font-bold text-gray-900 mb-2">₹{Math.round(lifetimeSavings / 100000).toFixed(2)} Lakhs</div>
                                        <div className="text-gray-500">Total savings over system lifetime</div>
                                    </div>

                                    <div className="flex flex-col gap-2 items-end">
                                        <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-3 py-1 rounded-full text-xs font-bold border border-green-400/20">
                                            <Leaf className="w-3 h-3" />
                                            <span>{Math.round(co2Offset).toLocaleString()} kg CO₂ Offset/Yr</span>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* CTA */}
                            <div className="sm:col-span-2 mt-4 text-center">
                                <Link
                                    href="/contact"
                                    className="inline-block w-full md:w-auto px-10 py-4 bg-white text-[#0f172a] font-bold rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-105 shadow-glow-blue"
                                >
                                    Get Detailed Quote & Site Survey
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
