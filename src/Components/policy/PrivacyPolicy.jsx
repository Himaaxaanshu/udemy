import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="bg-gradient-to-r from-purple-500 to-purple-800 py-12 h-80 text-center text-white">
        <h1 className="text-5xl mt-10 font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm">We value your privacy and are committed to protecting your data.</p>
      </div>

      {/* Main Content */}
      <div className="w-full">
        <div className="bg-white p-10 rounded-sm shadow-sm space-y-6">

          {/* Introduction */}
          <section className="space-y-0">
            <h2 className="text-2xl font-bold text-black">Introduction</h2>
            <p className="text-sm text-gray-700">
              We at AltaEd respect the confidentiality of your information and are dedicated to safeguarding
              the private data you provide to us. This Privacy Policy describes how we gather, use, and
              safeguard your information when you use our platform, website, and services.
            </p>
          </section>

          {/* Data We Gather */}
          <section className="space-y-0">
            <h2 className="text-xl font-semibold text-black">1. Data We Gather</h2>
            <p className="text-sm text-gray-700">
              In order to enhance our offerings and give you the most educational experience possible,
              we gather both personal and non-personal data. Among the kinds of data we could possibly
              collect are:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-0 pl-6">
              <li><strong>Personal Information:</strong>
                Your name, email, phone number, payment information, and other identifying information.
              </li>
              <li><strong>Non-Personal Information:</strong>
                Device details, IP address, browser type, and site usage information that aids in improving user performance and experience.
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="space-y-0">
            <h2 className="text-xl font-semibold text-black">2. How We Use Your Information</h2>
            <p className="text-sm text-gray-700">We use your data for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-0 pl-6">
              <li>To provide and personalize our services.</li>
              <li>To process your course enrollments, payments, and certification.</li>
              <li>To communicate updates, new courses, promotions, and notifications.</li>
              <li>To improve our platform’s functionality, security, and performance.</li>
              <li>To analyze trends, track user behavior, and develop new services.</li>
            </ul>
          </section>

          {/* Giving Out Your Information */}
          <section className="space-y-0">
            <h2 className="text-xl font-semibold text-black">3. Giving Out Your Information</h2>
            <p className="text-sm text-gray-700">
              Your personal information is never rented or sold to outside parties. However, we might give your information to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-0 pl-6">
              <li><strong>Service Providers:</strong>
                Reputable outside companies that help run our site, such as hosting companies and payment processors.
              </li>
              <li><strong>Legal Requirements:</strong>
                We may provide your information in response to a court order or legal request if necessary to uphold the law or safeguard our rights.
              </li>
            </ul>
          </section>

          {/* Tracking Technologies and Cookies */}
          <section className="space-y-0">
            <h2 className="text-xl font-semibold text-black">4. Tracking Technologies and Cookies</h2>
            <p className="text-sm text-gray-700">
              To improve your experience and gather information about how you use our site, we employ technologies
              like cookies and web beacons. Cookies assist us in:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-0 pl-6">
              <li>Customizing ads and content.</li>
              <li>Recalling your settings and preferences.</li>
              <li>Monitoring usage trends to optimize our website.</li>
            </ul>
          </section>

          {/* Security of Data */}
          <section className="space-y-0">
            <h2 className="text-xl font-semibold text-black">5. Security of Data</h2>
            <p className="text-sm text-gray-700">
              To prevent unauthorized access, alteration, disclosure, or destruction of your personal data,
              we use industry-standard security measures. However, complete security cannot be guaranteed,
              as there is no 100% safe way to transmit data over the internet.
            </p>
          </section>

          {/* Your Rights */}
          <section className="space-y-0">
            <h2 className="text-xl font-semibold text-black">6. Your Rights</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-0 pl-6">
              <li><strong>Access and Update Your Information:</strong>
                Your account settings allow you to view and amend your personal information.
              </li>
              <li><strong>Request Deletion:</strong>
                Subject to specific legal requirements, you may ask us to remove your personal information.
              </li>
              <li><strong>Opt-Out of Marketing Communications:</strong>
                You can change your account settings or click the "unsubscribe" link in our communications to stop receiving promotional emails.
              </li>
            </ul>
          </section>

          {/* Privacy of Children */}
          <section className="space-y-0">
            <h2 className="text-xl font-semibold text-black">7. Privacy of Children</h2>
            <p className="text-sm text-gray-700">
              Children under the age of thirteen should not use our platform. We do not intentionally collect
              children's personal data without parental consent. If we learn that we have collected data from a
              child under thirteen, we will act quickly to remove it.
            </p>
          </section>

          {/* Modifications to This Policy */}
          <section className="space-y-0">
            <h2 className="text-xl font-semibold text-black">8. Modifications to This Policy</h2>
            <p className="text-sm text-gray-700">
              This Privacy Policy may be updated periodically to reflect changes in our procedures or for operational,
              legal, or regulatory purposes. We encourage you to periodically review this page for updates.
            </p>
          </section>

          {/* Contact Section */}
          <section className="space-y-0">
            <h2 className="text-xl font-semibold text-black">Reach Out to Us</h2>
            <p className="text-sm text-gray-700">
              If you have any questions or concerns about this privacy policy or how we manage your data,
              please reach out to us at:
              <a href="mailto:Privacy@AltaEd.in" className="text-blue-500 hover:underline"> Privacy@AltaEd.in</a>.
            </p>
          </section>
        </div>
      </div>

    </div>
  );
};

export default PrivacyPolicy;
