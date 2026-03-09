import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { EarlyAccessForm } from './components/EarlyAccessForm';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <Hero />
        <Features />
        <EarlyAccessForm />
      </main>
      <footer className="bg-black border-t border-gray-800 py-8 text-center">
        <p className="text-gray-400 text-sm">
          © 2026 PRODCULATOR. All rights reserved.
        </p>
      </footer>
    </div>
  );
}