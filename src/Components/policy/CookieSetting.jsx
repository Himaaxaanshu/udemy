import React from 'react';

const CookieSetting = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="bg-gradient-to-r from-purple-500 to-purple-800 py-12 h-80 text-center text-white">
        <h1 className="text-5xl mt-10 font-bold mb-2">Cookie Settings</h1>
        <p className="text-sm">Control your cookie preferences for a better user experience on our platform.</p>
      </div>

      {/* Main Content */}
      <div className="w-full">
        <div className="bg-white p-10 rounded-sm shadow-sm space-y-2"> {/* Adjusted for compact spacing */}

          {/* Introduction */}
          <section className="space-y-0">
            <h2 className="text-2xl font-bold text-black">Cookie Configuration</h2>
            <p className="text-sm text-gray-700">
              To improve your experience on our platform, track site traffic, and display relevant information and advertisements,
              AltaEd uses cookies and related technologies.
              This page gives you the ability to control your cookie preferences and describes how we use cookies.
            </p>
          </section>

          {/* What are Cookies? */}
          <section className="space-y-0">
            <h2 className="text-xl font-semibold text-black">1. First, what are cookies?</h2>
            <p className="text-sm text-gray-700">
              When you visit our website, little text files called cookies are saved on your system.
              They enable us to identify your device, save your preferences, and enhance your user experience
              in general. Additionally, cookies could gather data about how you browse.
            </p>
          </section>

          {/* The Kinds of Cookies We Employ */}
          <section className="space-y-0">
            <h2 className="text-xl font-semibold text-black">2. The Kinds of Cookies We Employ</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-0 pl-6">
              <li><strong>Strictly Necessary Cookies:</strong>
                These cookies are necessary for the website to operate correctly.
                They make it possible for essential functions like secure logins, payment processing, and course navigation.
                Your requested services cannot be delivered without these cookies.
              </li>
              <li><strong>Performance Cookies:</strong>
                These gather data about how users interact with our website, such as the most frequently visited
                pages and any issues encountered. This data helps us improve functionality and performance.
              </li>
              <li><strong>Functionality Cookies:</strong>
                These cookies remember your preferences (such as language, region, or username) to provide a more
                personalized experience during your visits.
              </li>
              <li><strong>Targeting and Advertising Cookies:</strong>
                These track your browsing patterns and allow us to present content and ads relevant to your
                interests. We may share this data with third-party advertising partners for tailored marketing.
              </li>
            </ul>
          </section>

          {/* Controlling Your Preferences for Cookies */}
          <section className="space-y-0">
            <h2 className="text-xl font-semibold text-black">3. Controlling Your Preferences for Cookies</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-0 pl-6">
              <li><strong>Strictly Necessary Cookies:</strong>
                These are required for site functionality and cannot be disabled.
              </li>
              <li><strong>Performance and Functionality Cookies:</strong>
                You may enable or disable these cookies. Disabling them could affect how certain features
                function.
              </li>
              <li><strong>Targeting and Advertising Cookies:</strong>
                You can disable these if you prefer not to receive personalized ads. However, you will still see
                general ads.
              </li>
            </ul>
          </section>

          {/* Modifying Cookie Preferences */}
          <section className="space-y-0">
            <h2 className="text-xl font-semibold text-black">4. How to Modify Cookie Preferences</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-0 pl-6">
              <li><strong>Browser Settings:</strong>
                Most browsers provide settings to manage cookies. You can limit or disable specific cookie types.
              </li>
              <li><strong>Consent Banner:</strong>
                Upon your first visit, a cookie consent banner allows you to accept or adjust your preferences.
              </li>
            </ul>
            <p className="text-sm text-gray-700">
              For more detailed instructions, please consult your browser’s help documentation or visit info@AltaEd.in .
            </p>
          </section>

          {/* Modifications to Cookie Policy */}
          <section className="space-y-0">
            <h2 className="text-xl font-semibold text-black">5. Modifications to Our Cookie Guidelines</h2>
            <p className="text-sm text-gray-700">
              This Cookie Policy may be updated to reflect changes in how we use cookies or to comply with new laws. Please check this page occasionally for any updates.
            </p>
          </section>

          {/* Contact Section */}
          <section className="space-y-0">
            <h2 className="text-xl font-semibold text-black">6. Reach Out to Us</h2>
            <p className="text-sm text-gray-700">
              If you have any questions or concerns regarding this cookie policy or how we manage your data, please reach out to us at:
              <a href="mailto:Privacy@AltaEd.com" className="text-blue-500 hover:underline"> Privacy@AltaEd.com</a>.
            </p>
          </section>
        </div>
      </div>

    </div>
  );
};

export default CookieSetting;
