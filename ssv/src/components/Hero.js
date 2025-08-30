function Hero() {
    try {
        const handleSendMessage = () => {
            const message = "Hello SSV Construction, I'm interested in your services. Please provide me with a free consultation and quote.";
            const whatsappUrl = `https://wa.me/919014780167?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        };

        return (
            <section 
                id="home" 
                data-name="hero" 
                data-file="components/Hero.js"
                className="hero-bg min-h-screen flex items-center text-white pt-20"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-7xl md:text-9xl font-extrabold mb-10 leading-tight">
                            Trust is What We
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                                Build.
                            </span>
                        </h1>
                        
                        <p className="text-2xl md:text-3xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
                            Elite civil engineering and construction services in Hyderabad. 
                            Premium quality, unmatched reliability for all your construction needs.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <button 
                                onClick={handleSendMessage}
                                className="btn-primary text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all transform hover:scale-105"
                            >
                                <i className="fas fa-comment-dots mr-4"></i>
                                Send Message
                            </button>
                            
                            <a 
                                href="tel:9014780167" 
                                className="bg-transparent border-3 border-white text-white hover:bg-white hover:text-slate-900 px-12 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl"
                            >
                                <i className="fas fa-phone mr-4"></i>
                                Call: 9014780167
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
    }
}
