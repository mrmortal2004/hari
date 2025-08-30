function FloatingButtons() {
    try {
        return (
            <div data-name="floating-buttons" data-file="components/FloatingButtons.js">
                <a
                    href="tel:9014780167"
                    className="floating-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-5 rounded-full shadow-2xl bottom-24 right-6"
                    title="Call Now"
                >
                    <i className="fas fa-phone text-2xl"></i>
                </a>
                
                <a
                    href="https://wa.me/919014780167?text=Hello%20SSV%20Construction,%20I%20need%20construction%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="floating-btn bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-5 rounded-full shadow-2xl bottom-6 right-6"
                    title="WhatsApp Us"
                >
                    <i className="fab fa-whatsapp text-2xl"></i>
                </a>
            </div>
        );
    } catch (error) {
        console.error('FloatingButtons component error:', error);
        reportError(error);
    }
}
