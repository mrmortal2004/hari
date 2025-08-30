function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            phone: '',
            message: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            alert('Thank you for your message! Our team will contact you soon.');
            setFormData({ name: '', email: '', phone: '', message: '' });
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return (
            <section 
                id="contact" 
                data-name="contact" 
                data-file="components/Contact.js"
                className="section-padding bg-slate-900"
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Get In <span className="gradient-text">Touch</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-6">
                            Ready to start your construction project? Contact us for professional consultation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-8">Send Us A Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                    className="w-full px-6 py-4 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full btn-primary text-white py-4 px-8 rounded-xl font-semibold text-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="glass-effect p-6 rounded-xl flex items-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-6">
                                        <i className="fas fa-phone text-white text-xl"></i>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white text-lg">Phone Numbers</p>
                                        <p className="text-gray-300">9014780167, 8519972579</p>
                                    </div>
                                </div>
                                
                                <div className="glass-effect p-6 rounded-xl flex items-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-6">
                                        <i className="fas fa-envelope text-white text-xl"></i>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white text-lg">Email</p>
                                        <p className="text-gray-300">civilengineerhyderabad@gmail.com</p>
                                    </div>
                                </div>
                                
                                <div className="glass-effect p-6 rounded-xl flex items-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-6">
                                        <i className="fas fa-map-marker-alt text-white text-xl"></i>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white text-lg">Location</p>
                                        <p className="text-gray-300">Kushaiguda, Hyderabad, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
    }
}
