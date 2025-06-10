import React from 'react';
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 text-lg">
              Your privacy is important to us. Learn how we protect and handle your data.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Information We Collect */}
            <section>
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Account Information</h3>
                  <p className="text-gray-600">
                    When you create an account, we collect your name, email address, and encrypted password.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Usage Data</h3>
                  <p className="text-gray-600">
                    We collect information about how you use SignSpeak, including words converted, session duration, and feature usage.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Audio Data</h3>
                  <p className="text-gray-600">
                    Speech recognition is processed locally in your browser. Audio data is not transmitted to our servers.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Provide and improve our sign language conversion services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Personalize your learning experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Send important updates about our service</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Analyze usage patterns to enhance functionality</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Data Protection */}
            <section>
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Data Protection</h2>
              </div>
              <div className="bg-green-50 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Encryption</h3>
                  <p className="text-gray-600">
                    All data is encrypted in transit using TLS and at rest using industry-standard encryption.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Access Controls</h3>
                  <p className="text-gray-600">
                    Access to your data is strictly limited to authorized personnel who need it to provide our services.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Local Processing</h3>
                  <p className="text-gray-600">
                    Speech recognition and sign language conversion happen locally in your browser for maximum privacy.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <div className="flex items-center mb-4">
                <UserCheck className="w-6 h-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Your Rights</h2>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Access & Portability</h3>
                    <p className="text-gray-600 text-sm">
                      Request a copy of your personal data in a portable format.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Correction</h3>
                    <p className="text-gray-600 text-sm">
                      Update or correct any inaccurate personal information.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Deletion</h3>
                    <p className="text-gray-600 text-sm">
                      Request deletion of your account and associated data.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Opt-out</h3>
                    <p className="text-gray-600 text-sm">
                      Unsubscribe from marketing communications at any time.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
              </div>
              <div className="bg-orange-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> privacy@signspeak.com</p>
                  <p><strong>Address:</strong> 123 Privacy Street, Data City, DC 12345</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Policy Updates</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                Your continued use of SignSpeak after any changes constitutes acceptance of the updated policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};