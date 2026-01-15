// WhatsApp utility function

interface CalculatorDetails {
    bill?: string | number;
    roofArea?: string | number;
    systemSize?: string | number;
    savings?: string | number;
}

export function sendWhatsAppMessage(context: string, details?: CalculatorDetails) {
    const phone = '919430559435'; // Updated number for Solar Energy Systems
    let message = '';

    switch (context) {
        case 'quote':
            message = `Hi Solar Energy Systems! 👋

I'm interested in getting a solar installation quote.

Please provide details about:
- Available solar panel options
- Installation cost estimate
- Government subsidy assistance
- Timeline for installation

Looking forward to hearing from you!`;
            break;

        case 'calculator':
            message = `Hi Solar Energy Systems! 👋

I used your solar calculator and would like to discuss the results:

📊 My Requirements:
- Monthly Bill: ₹${details?.bill || 'N/A'}
- Roof Area: ${details?.roofArea || 'N/A'} sq ft
- Recommended System: ${details?.systemSize || 'N/A'} kW
- Estimated Savings: ₹${details?.savings || 'N/A'}/year

Please help me proceed with:
✅ Site survey
✅ Detailed quotation
✅ Subsidy application
✅ Installation timeline

Thank you!`;
            break;

        case 'call':
            message = `Hi Solar Energy Systems! 👋

I would like to speak with your team about solar installation.

Please call me back at your earliest convenience.

Thank you!`;
            break;

        case 'contact':
            message = `Hi Solar Energy Systems! 👋

I'm interested in solar installation for my property.

Please share:
- Product catalogue
- Pricing details
- Subsidy information
- Installation process

Looking forward to your response!`;
            break;

        default:
            message = `Hi Solar Energy Systems! 👋

I'm interested in learning more about your solar solutions.

Please get in touch with me.

Thank you!`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}
