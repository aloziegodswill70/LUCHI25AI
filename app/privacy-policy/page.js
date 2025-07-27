export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-4">📌 Privacy Policy</h1>
      <p className="mb-4">
        Effective Date: {new Date().getFullYear()}  
        This Privacy Policy explains how <strong>Luchi25</strong> (“we,” “our,” or “us”) collects, uses, and protects your information when you use our website and services.
      </p>

      <h2 className="text-xl font-semibold text-red-600 mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal details you provide, such as your name and email, when using our CV and letter generator.</li>
        <li>Non‑personal data such as browser type, pages visited, and cookies.</li>
        <li>Information from third‑party services such as Google AdSense and Adsterra (via cookies and advertising identifiers).</li>
      </ul>

      <h2 className="text-xl font-semibold text-red-600 mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To provide and improve our services (jobs, scholarships, and content generation).</li>
        <li>To personalize ads and measure their effectiveness through partners like Google AdSense and Adsterra.</li>
        <li>To communicate important updates about our services.</li>
      </ul>

      <h2 className="text-xl font-semibold text-red-600 mt-6 mb-2">3. Cookies and Third‑Party Ads</h2>
      <p className="mb-4">
        We use cookies and third‑party scripts (e.g., Google AdSense and Adsterra) to serve ads and analyze traffic.
        These providers may use cookies or device identifiers to serve ads based on your interests.
      </p>

      <h2 className="text-xl font-semibold text-red-600 mt-6 mb-2">4. Your Data Protection Rights</h2>
      <p className="mb-4">
        You may access, update, or delete your personal data by contacting us. You can also manage cookie preferences in your browser settings.
      </p>

      <h2 className="text-xl font-semibold text-red-600 mt-6 mb-2">5. Contact Us</h2>
      <p className="mb-4">
        If you have questions about this Privacy Policy, please contact us at:  
        <span className="font-semibold">support@luchi25.com</span> (replace with your real email).
      </p>
    </main>
  );
}
