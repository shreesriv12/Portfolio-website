import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../component/Alert.jsx';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Shreeya Srivastava',
          from_email: form.email,
          to_email: 'shreeyasrivastava1124@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "Failed to send your message",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center py-20 px-6 sm:px-12 overflow-hidden"
      id="contact"
    >
      
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-0"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute -bottom-10 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      
      {/* Enhanced grid pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="w-full h-full" style={{ 
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px' 
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {alert.show && <Alert {...alert} />}

      <div className="relative z-10 max-w-4xl w-full">
        {/* Main container with glassmorphism effect */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-8 sm:p-12 relative overflow-hidden">
          {/* Top accent line with animation */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent">
            <div className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse"></div>
          </div>
          
          {/* Side accent elements */}
          <div className="absolute left-0 top-20 w-1 h-32 bg-gradient-to-b from-purple-400 to-transparent rounded-r opacity-60"></div>
          <div className="absolute right-0 bottom-20 w-1 h-32 bg-gradient-to-t from-cyan-400 to-transparent rounded-l opacity-60"></div>
          
          {/* Header section */}
          <div className="mb-12 text-center relative">
            <div className="inline-block relative">
              <h3 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4 relative">
                Let's Connect
              </h3>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
              Ready to bring your ideas to life? Let's collaborate and create something extraordinary together.
            </p>
          </div>
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            {/* Name field */}
            <div className="group relative">
              <label className="block text-sm font-semibold text-gray-200 mb-3 transition-colors group-focus-within:text-purple-300">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all duration-300 hover:bg-white/10 group-hover:border-white/20"
                  placeholder="Enter your full name"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/0 via-purple-400/5 to-cyan-400/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Email field */}
            <div className="group relative">
              <label className="block text-sm font-semibold text-gray-200 mb-3 transition-colors group-focus-within:text-cyan-300">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 hover:bg-white/10 group-hover:border-white/20"
                  placeholder="your.email@example.com"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-purple-400/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Message field */}
            <div className="group relative">
              <label className="block text-sm font-semibold text-gray-200 mb-3 transition-colors group-focus-within:text-pink-300">
                Your Message
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400/50 transition-all duration-300 resize-none hover:bg-white/10 group-hover:border-white/20"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400/0 via-pink-400/5 to-purple-400/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500 text-white font-semibold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
              >
                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Button content */}
                <div className="relative flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-lg">Send Message</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </div>
              </button>
            </div>
          </form>

          {/* Bottom decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute -top-6 -left-6 w-6 h-6 border-l-2 border-t-2 border-purple-400/50 rounded-tl-lg"></div>
        <div className="absolute -top-6 -right-6 w-6 h-6 border-r-2 border-t-2 border-cyan-400/50 rounded-tr-lg"></div>
        <div className="absolute -bottom-6 -left-6 w-6 h-6 border-l-2 border-b-2 border-pink-400/50 rounded-bl-lg"></div>
        <div className="absolute -bottom-6 -right-6 w-6 h-6 border-r-2 border-b-2 border-purple-400/50 rounded-br-lg"></div>
      </div>
    </section>
  );
};

export default Contact;