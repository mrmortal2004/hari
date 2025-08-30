function Services() {
    try {
        const services = [
            {
                icon: 'fas fa-tint',
                title: 'Premium Waterproofing',
                description: 'Advanced waterproofing solutions with lifetime warranty. Specialized treatments for terraces, basements, and structural elements.',
                features: ['Terrace Waterproofing', 'Basement Sealing', 'Wall Treatment']
            },
            {
                icon: 'fas fa-tools',
                title: 'Structural Engineering',
                description: 'Expert structural repair and reinforcement services. Foundation work, crack repair, and complete building restoration.',
                features: ['Foundation Repair', 'Crack Treatment', 'Building Restoration']
            },
            {
                icon: 'fas fa-drafting-compass',
                title: 'Civil Construction',
                description: 'Complete civil engineering and construction management from conceptual design to project completion.',
                features: ['Project Planning', 'Design Services', 'Construction Management']
            },
            {
                icon: 'fas fa-cogs',
                title: 'Engineering Consultation',
                description: 'Professional engineering consultation and technical advisory services for complex construction projects.',
                features: ['Technical Advisory', 'Project Consultation', 'Quality Assurance']
            }
        ];

        return (
            <section 
                id="services" 
                data-name="services" 
                data-file="components/Services.js"
                className="section-padding bg-slate-900"
            >
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
                            Our <span className="gradient-text">Services</span>
                        </h2>
                        <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                            Comprehensive construction and engineering solutions with uncompromising quality standards
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {services.map((service, index) => (
                            <div 
                                key={index}
                                className="service-card p-10 rounded-3xl text-center"
                            >
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                                    <i className={`${service.icon} text-3xl text-white`}></i>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    {service.title}
                                </h3>
                                
                                <p className="text-slate-300 mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                
                                <ul className="text-sm text-slate-400 space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center justify-center">
                                            <i className="fas fa-check text-blue-500 mr-3"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services component error:', error);
        reportError(error);
    }
}
