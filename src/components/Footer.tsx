export default function Footer() {
  return (
    <footer className="border-t border-ink px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between gap-2 text-xs uppercase tracking-widest text-muted">
        <p>&copy; {new Date().getFullYear()} Ryan Holloway</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
}
