import React from 'react';
import { Link } from 'react-router-dom';
import { Hand, Waves, Mic, Type, Clock, Users, Star, ArrowRight, Play, Shield, Zap, Heart, CheckCircle, Quote } from 'lucide-react';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo and Brand */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-2xl">
                <Hand className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SignSpeak
              </h1>
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl shadow-2xl">
                <Waves className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Hero Headline */}
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Transform Your Voice Into
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Beautiful Sign Language
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Bridge communication gaps with our innovative speech-to-sign language converter. 
              Speak naturally and watch your words come alive through expressive sign animations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/signup"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/"
                className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl font-semibold text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-white/50 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Try Demo
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm">100% Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span className="text-sm">Real-time Processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span className="text-sm">Accessibility First</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Powerful Features for Everyone
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're learning sign language or need accessible communication tools, 
              SignSpeak has everything you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 hover:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Voice Recognition</h4>
              <p className="text-gray-600 leading-relaxed">
                Advanced speech recognition technology that understands your voice clearly, 
                even in noisy environments. Just speak naturally and let SignSpeak do the rest.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 hover:border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Type className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Text Input</h4>
              <p className="text-gray-600 leading-relaxed">
                Prefer typing? Our text input feature lets you type any word and instantly 
                see its sign language representation with detailed instructions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 hover:border-green-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Hand className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Animated Signs</h4>
              <p className="text-gray-600 leading-relaxed">
                Beautiful, accurate sign language animations with step-by-step instructions 
                to help you learn proper signing techniques.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 hover:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Word History</h4>
              <p className="text-gray-600 leading-relaxed">
                Keep track of all the words you've learned with our smart history feature. 
                Review and practice previous signs anytime.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 hover:border-indigo-200">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Privacy First</h4>
              <p className="text-gray-600 leading-relaxed">
                Your voice data never leaves your device. All processing happens locally 
                in your browser for complete privacy and security.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 hover:border-pink-200">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">For Everyone</h4>
              <p className="text-gray-600 leading-relaxed">
                Perfect for students, educators, interpreters, and anyone interested in 
                learning or using sign language for better communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              How SignSpeak Works
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in three simple steps and begin your sign language journey today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform">
                  <Mic className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Speak or Type</h4>
              <p className="text-gray-600 leading-relaxed">
                Click the microphone to start voice recognition or use the text input 
                to type any word you want to learn.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform">
                  <Zap className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Instant Processing</h4>
              <p className="text-gray-600 leading-relaxed">
                Our advanced AI instantly processes your input and identifies the 
                corresponding sign language representation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform">
                  <Hand className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Learn & Practice</h4>
              <p className="text-gray-600 leading-relaxed">
                Watch the animated sign language demonstration and follow the detailed 
                instructions to master each sign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Users Say
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of users who are already improving their communication skills with SignSpeak.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-500 mb-4" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                "SignSpeak has revolutionized how I communicate with my deaf colleagues. 
                The animations are so clear and the voice recognition is incredibly accurate!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sarah Martinez</p>
                  <p className="text-gray-500 text-sm">Teacher</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-purple-500 mb-4" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                "As a sign language student, this app has been invaluable. The step-by-step 
                instructions help me perfect my technique. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">DJ</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">David Johnson</p>
                  <p className="text-gray-500 text-sm">Student</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-green-500 mb-4" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The privacy-first approach gives me confidence to practice without worry. 
                The local processing is brilliant - fast and secure!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AL</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Anna Lee</p>
                  <p className="text-gray-500 text-sm">Interpreter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                10K+
              </div>
              <p className="text-gray-600 font-medium">Active Users</p>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <p className="text-gray-600 font-medium">Sign Words</p>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                99.9%
              </div>
              <p className="text-gray-600 font-medium">Accuracy Rate</p>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <p className="text-gray-600 font-medium">Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Sign Language Journey?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already bridging communication gaps with SignSpeak. 
            Start learning today - it's completely free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
            >
              Create Free Account
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/"
              className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Try Demo Now
            </Link>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <Hand className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">SignSpeak</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Bridging communication gaps through innovative sign language technology. 
                Making accessibility and learning more inclusive for everyone.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Converter</Link></li>
                <li><Link to="/signup" className="hover:text-white transition-colors">Sign Up</Link></li>
                <li><Link to="/login" className="hover:text-white transition-colors">Login</Link></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/security" className="hover:text-white transition-colors">Security</Link></li>
                <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SignSpeak. All rights reserved. Built with ❤️ for accessibility and communication.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};