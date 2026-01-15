import { Shield, FileText, Lock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | PowerLink Solutions Solar Company Bihar',
    description: 'Privacy policy for PowerLink Solutions. Learn how we protect your personal information and handle data for solar installation quotes and services in Bihar.',
    robots: 'index, follow',
};

export default function PrivacyPage() {
    return (
        <div className="pt-24 pb-20 bg-bg-deep min-h-screen text-slate-300">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
                <p className="mb-8">Last Updated: January 2026</p>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                        <p>We collect information necessary to provide solar installation services, including your name, contact details, address, and electricity bill details for subsidy calculation.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Data</h2>
                        <p>Your data is used solely for:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Calculating accurate solar system size and cost.</li>
                            <li>Processing government subsidy applications (PM Surya Ghar).</li>
                            <li>Coordinating site visits and installations.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                        <p>We urge you to note that we do not sell your data to third-party aggregators. Your information is shared only with relevant government portals (National Portal for Rooftop Solar) and our internal engineering team.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at info@powerlinkbihar.in.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
