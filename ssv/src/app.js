function App() {
    try {
        return (
            <div data-name="app" data-file="app.js">
                <Header />
                <Hero />
                <Services />
                <About />
                <Contact />
                <Footer />
                <FloatingButtons />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
