export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Ryan Holloway. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
