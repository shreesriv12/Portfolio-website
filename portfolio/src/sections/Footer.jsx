const Footer = () => {
    return (
      <footer className="sm:px-10 px-5 py-7 border-t border-black-300 bg-black-900 text-white-500 flex justify-between items-center flex-wrap gap-5">
        
        {/* Links Section */}
        <div className="flex gap-5 text-sm">
          <a href="#" className="hover:text-white transition duration-300">Terms & Conditions</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
        </div>
  
        {/* Social Media Section */}
        <div className="flex gap-4">
          <a href="https://github.com/shreesriv12" target="_blank" rel="noreferrer" 
            className="w-12 h-12 rounded-full flex justify-center items-center bg-black-700 border border-black-500 
            hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
          
          <a href="https://x.com/ShreeyaSri4312" target="_blank" rel="noreferrer" 
            className="w-12 h-12 rounded-full flex justify-center items-center bg-black-700 border border-black-500 
            hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg">
            <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
          </a>
  
          <a href="https://www.instagram.com/shreesriv12" target="_blank" rel="noreferrer" 
            className="w-12 h-12 rounded-full flex justify-center items-center bg-black-700 border border-black-500 
            hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </a>
        </div>
  
        {/* Copyright Section */}
        <p className="text-sm text-gray-500">&copy; 2025 <span className="text-white">Shreeya Srivastava</span>. All rights reserved.</p>
      
      </footer>
    );
  };
  
  export default Footer;
  