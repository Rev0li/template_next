export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-6 px-6 text-center">
        <p className="text-sm">© 2024 Template Vitrine. Tous droits réservés.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="hover:text-gray-400" aria-label="Facebook">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-400" aria-label="Instagram">
            Instagram
          </a>
          <a href="#" className="hover:text-gray-400" aria-label="LinkedIn">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

