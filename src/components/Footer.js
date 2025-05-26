// components/Footer.js

export default function Footer({ footerData }) {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8 text-sm/6 text-center">
        <p>{footerData[0].footerText}</p>
      </div>
    </footer>
  );
}
