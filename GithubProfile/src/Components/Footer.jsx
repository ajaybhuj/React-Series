function Footer() {
  return (
    <div className="relative">
      <div className="min-h-screen pb-16">
        {/* Your main content goes here */}
      </div>
      <footer className="absolute bottom-0 w-full bg-gray-800 text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <p>&copy; 2023 Your Website</p>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
