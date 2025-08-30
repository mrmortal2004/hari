function Footer() {
    try {
        return (
            <footer 
                data-name="footer" 
                data-file="components/Footer.js"
                className="bg-slate-950 text-white py-16"
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <i className="fas fa-building text-white text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">SSV Construction</h3>
                                    <p className="text-amber-400 font-medium">Sri Srinivasan</p>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                                Trust is What We Build. Elite civil engineering and construction 
                                services with uncompromising quality standards in Hyderabad.
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="text-xl font-semibold mb-6 text-amber-400">Services</h4>
                            <ul className="space-y-3 text-gray-300">
                                <li><a href="#services" className="hover:text-amber-400 transition-colors">Premium Waterproofing</a></li>
                                <li><a href="#services" className="hover:text-amber-400 transition-colors">Structural Engineering</a></li>
                                <li><a href="#services" className="hover:text-amber-400 transition-colors">Civil Construction</a></li>
                                <li><a href="#services" className="hover:text-amber-400 transition-colors">Engineering Consultation</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-xl font-semibold mb-6 text-amber-400">Contact</h4>
                            <div className="space-y-4 text-gray-300">
                                <p className="flex items-center">
                                    <i className="fas fa-phone mr-3 text-amber-500"></i>
                                    9014780167
                                </p>
                                <p className="flex items-center">
                                    <i className="fas fa-phone mr-3 text-amber-500"></i>
                                    8519972579
                                </p>
                                <p className="flex items-center">
                                    <i className="fas fa-envelope mr-3 text-amber-500"></i>
                                    civilengineerhyderabad@gmail.com
                                </p>
                                <p className="flex items-center">
                                    <i className="fas fa-map-marker-alt mr-3 text-amber-500"></i>
                                    Kushaiguda, Hyderabad
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-slate-800 mt-12 pt-8 text-center">
                        <p className="text-gray-400 text-lg">
                            © 2024 SSV Construction. All rights reserved. | 
                            <span className="text-amber-400 font-medium"> Trust is What We Build.</span>
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}
