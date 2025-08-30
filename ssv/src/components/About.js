function About() {
    try {
        const team = [
            {
                name: 'N. HARI',
                role: 'Senior Engineer & Project Planner',
                email: 'harinattuva15096@gmail.com',
                image: 'https://app.trickle.so/storage/public/images/usr_1078774f68000001/1d3fc814-3066-4c3b-b68f-0d1ff23e6af7.png'
            },
            {
                name: 'K. RITESH',
                role: 'Technical Consultant & Advisor',
                email: 'civilengineerhyderabad@gmail.com',
                image: 'https://app.trickle.so/storage/public/images/usr_1078774f68000001/260f74f5-97c1-4218-a25d-08a346acff2d.jpeg'
            }
        ];

        return (
            <section 
                id="about" 
                data-name="about" 
                data-file="components/About.js"
                className="section-padding bg-slate-800"
            >
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-6xl md:text-7xl font-bold text-white mb-10">
                                About <span className="gradient-text">SSV</span>
                            </h2>
                            
                            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                                SSV (Sri Srinivasan) represents excellence in civil engineering and construction 
                                services throughout Hyderabad. With decades of combined experience and an unwavering 
                                commitment to quality, we deliver solutions that exceed expectations.
                            </p>
                            
                            <div className="space-y-8 mb-12">
                                <div className="flex items-center">
                                    <i className="fas fa-map-marker-alt text-blue-500 mr-5 text-2xl"></i>
                                    <span className="text-slate-300 text-lg">Kushaiguda, Hyderabad, India</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-phone text-blue-500 mr-5 text-2xl"></i>
                                    <span className="text-slate-300 text-lg">Professional Service & Support</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-award text-blue-500 mr-5 text-2xl"></i>
                                    <span className="text-slate-300 text-lg">Certified Excellence & Trust</span>
                                </div>
                            </div>
                            
                            <div className="glass-effect p-10 rounded-3xl">
                                <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    To deliver exceptional construction and engineering services with 
                                    uncompromising quality, innovative solutions, and absolute customer satisfaction.
                                </p>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-4xl font-bold text-white mb-12 text-center">Leadership Team</h3>
                            
                            <div className="space-y-10">
                                {team.map((member, index) => (
                                    <div 
                                        key={index}
                                        className="glass-effect p-10 rounded-3xl flex items-center space-x-8"
                                    >
                                        <img 
                                            src={member.image}
                                            alt={member.name}
                                            className="w-24 h-24 rounded-3xl object-cover border-3 border-blue-500 shadow-xl"
                                        />
                                        <div>
                                            <h4 className="text-2xl font-bold text-white mb-2">
                                                {member.name}
                                            </h4>
                                            <p className="text-blue-400 font-semibold mb-3 text-lg">{member.role}</p>
                                            <a 
                                                href={`mailto:${member.email}`}
                                                className="text-slate-400 hover:text-blue-400 transition-colors"
                                            >
                                                {member.email}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
    }
}
