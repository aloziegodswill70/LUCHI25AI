export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-4">📜 Terms of Service</h1>
      <p className="mb-4">
        Effective Date: {new Date().getFullYear()}  
        By accessing or using <strong>Luchi25</strong>, you agree to these Terms of Service.
      </p>

      <h2 className="text-xl font-semibold text-red-600 mt-6 mb-2">1. Use of Our Services</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>You may use our website and tools (jobs, scholarships, CV and letter generator) for lawful purposes only.</li>
        <li>Do not misuse our services by interfering with them or accessing them using methods other than the interface we provide.</li>
      </ul>

      <h2 className="text-xl font-semibold text-red-600 mt-6 mb-2">2. Content and Accuracy</h2>
      <p className="mb-4">
        While we strive to provide accurate and updated information on jobs and scholarships, we do not guarantee the accuracy or completeness of any listing. Always verify details before applying.
      </p>

      <h2 className="text-xl font-semibold text-red-600 mt-6 mb-2">3. Advertisements</h2>
      <p className="mb-4">
        We display advertisements through Google AdSense and Adsterra. Your interactions with these ads are solely between you and the advertiser.
      </p>

      <h2 className="text-xl font-semibold text-red-600 mt-6 mb-2">4. Limitation of Liability</h2>
      <p className="mb-4">
        We are not liable for any direct or indirect damages arising from the use or inability to use our services, including any content, errors, or omissions.
      </p>

      <h2 className="text-xl font-semibold text-red-600 mt-6 mb-2">5. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms from time to time. Continued use of our site means you accept the updated terms.
      </p>

      <h2 className="text-xl font-semibold text-red-600 mt-6 mb-2">6. Contact Us</h2>
      <p className="mb-4">
        For any questions about these Terms, contact us at:  
        <span className="font-semibold">support@luchi25.com</span> (replace with your real email).
      </p>
    </main>
  );
}
