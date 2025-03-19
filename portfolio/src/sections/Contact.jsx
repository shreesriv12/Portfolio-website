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
      className="relative min-h-screen flex items-center justify-center py-20 px-6 sm:px-12"
      id="contact"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 z-0"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="w-full h-full" style={{ 
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px' 
        }}></div>
      </div>

      {alert.show && <Alert {...alert} />}

      <div className="relative z-10 max-w-3xl w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl border border-gray-700 p-8 sm:p-10">
        {/* Highlight accent at the top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-500 via-white to-gray-500 rounded-t-2xl"></div>
        
        <div className="mb-10 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Talk</h3>
          <p className="text-gray-400 max-w-lg mx-auto">
            Whether you want to build a new website or share your thoughts, I'm here to help.
          </p>
        </div>
        
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              placeholder="e.g., John Doe"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              placeholder="e.g., johndoe@gmail.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition resize-none"
              placeholder="Share your thoughts or inquiries..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 hover:from-gray-600 hover:to-gray-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300 flex items-center justify-center gap-2"
          >
            {loading ? 'Sending...' : 'Send Message'}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;