function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        const [isScrolled, setIsScrolled] = React.useState(false);

        React.useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 50);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        const scrollToSection = (sectionId) => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        };

        return (
            <header 
                data-name="header" 
                data-file="components/Header.js"
                className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                    isScrolled ? 'header-fixed shadow-2xl' : 'bg-transparent'
                }`}
            >
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center py-5">
                        <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl">
                                <i className="fas fa-building text-white text-xl"></i>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">
                                    SSV
                                </h1>
                                <p className="text-sm text-blue-300 font-medium">
                                    Sri Srinivasan
                                </p>
                            </div>
                        </div>

                        <nav className="hidden md:flex space-x-10">
                            {['Home', 'About', 'Services', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="font-semibold text-white hover:text-blue-300 transition-colors text-lg"
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>

                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden text-white hover:text-blue-300"
                            >
                                <i className="fas fa-bars text-2xl"></i>
                            </button>
                        </div>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden glass-effect shadow-2xl rounded-2xl mt-4 py-6 mx-4">
                            {['Home', 'About', 'Services', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="block w-full text-left px-6 py-3 text-white hover:bg-blue-500/20 hover:text-blue-300 font-medium text-lg"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
