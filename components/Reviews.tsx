import { Star, Quote } from 'lucide-react';

export default function Reviews() {
    const reviews = [
        {
            id: 1,
            name: "राजेश कुमार",
            location: "बेतिया, बिहार",
            rating: 5,
            date: "2 महीने पहले",
            review: "Solar Energy Systems installed a 5kW system at my home. My electricity bill has dropped significantly! The team was very professional, installation was quick, and they handled all technical setup. Great experience!",
            systemSize: "5kW Residential"
        },
        {
            id: 2,
            name: "Priya Sharma",
            location: "Patna, Bihar",
            rating: 5,
            date: "1 month ago",
            review: "Best decision! Installed 3kW solar system. Panel and wiring quality is excellent. Seeing huge reduction in bills already. Solar Energy Systems team explained everything well and support is fantastic.",
            systemSize: "3kW Residential"
        },
        {
            id: 3,
            name: "Amit Singh",
            location: "Patna Market",
            rating: 5,
            date: "3 weeks ago",
            review: "Installed 10kW commercial solar for our shop. ROI is faster than expected. They did LT panel and commissioning very well. High quality work from start to finish.",
            systemSize: "10kW Commercial"
        },
        {
            id: 4,
            name: "Sunita Devi",
            location: "Danapur, Patna",
            rating: 5,
            date: "1 month ago",
            review: "As a first-time solar customer, I had many doubts. The technically qualified team patiently answered all my questions. The setup is very reliable and affordable. Highly satisfied with Solar Energy Systems service!",
            systemSize: "2kW Residential"
        },
        {
            id: 5,
            name: "Deepak Thakur",
            location: "Muzaffarpur, Bihar",
            rating: 5,
            date: "2 weeks ago",
            review: "Installed high-efficiency panels for my farmhouse. Excellent product quality and the inverter efficiency is great. The team did a perfect job with AC works and the structure is solid. Producing great units daily!",
            systemSize: "7kW Residential"
        },
        {
            id: 6,
            name: "Anita Jha",
            location: "Patna City",
            rating: 5,
            date: "3 months ago",
            review: "We were looking for reliable solar & electrical experts in Patna. Solar Energy Systems delivered more than promised. Paying very little monthly now. Professional team with hands-on industry experience.",
            systemSize: "4kW Residential"
        }
    ];

    return (
        <section className="py-24 lg:py-32 bg-white" id="testimonials">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">

                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm lg:text-base mb-3 block">Customer Reviews</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 lg:mb-8">
                        What Our <span className="text-gradient">Customers Say</span>
                    </h2>
                    <p className="text-gray-600 max-w-4xl mx-auto text-lg lg:text-xl xl:text-2xl leading-relaxed">
                        Real experiences from 500+ happy solar customers across Bihar. Join the renewable energy revolution today.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white border border-gray-100 rounded-[2rem] lg:rounded-[2.5rem] p-8 lg:p-10 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all group"
                        >
                            {/* Quote Icon */}
                            <div className="mb-6">
                                <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-primary/40" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-600 leading-relaxed mb-6 text-base lg:text-lg">
                                &quot;{review.review}&quot;
                            </p>

                            {/* System Size Badge */}
                            <div className="mb-4">
                                <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-semibold">
                                    {review.systemSize}
                                </span>
                            </div>

                            {/* Author Info */}
                            <div className="pt-4 border-t border-white/10">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-900 font-bold text-lg">{review.name}</p>
                                        <p className="text-gray-500 text-sm">{review.location}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-slate-500 text-xs">{review.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Summary */}
                <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">500+</div>
                        <p className="text-gray-600 text-lg">Happy Customers</p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">98%</div>
                        <p className="text-gray-600 text-lg">Satisfaction Rate</p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">4.9★</div>
                        <p className="text-gray-600 text-lg">Average Rating</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
