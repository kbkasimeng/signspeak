import React from 'react';
import { Shield, Lock, Key, AlertTriangle, CheckCircle, Eye, Server } from 'lucide-react';

export const SecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Security & Safety</h1>
            <p className="text-gray-600 text-lg">
              Learn about our comprehensive security measures and how we protect your data.
            </p>
          </div>

          {/* Security Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">End-to-End Security</h3>
              <p className="text-gray-600 text-sm">
                Your data is protected at every step with industry-standard encryption.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <Eye className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Privacy First</h3>
              <p className="text-gray-600 text-sm">
                Speech processing happens locally - your voice never leaves your device.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <Server className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Secure Infrastructure</h3>
              <p className="text-gray-600 text-sm">
                Our servers are hosted on secure, compliant cloud infrastructure.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Data Encryption */}
            <section>
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Data Encryption</h2>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      In Transit
                    </h3>
                    <p className="text-gray-600 text-sm">
                      All data transmitted between your device and our servers is encrypted using TLS 1.3, 
                      the latest and most secure transport layer security protocol.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      At Rest
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Your stored data is encrypted using AES-256 encryption, ensuring it remains secure 
                      even if physical storage is compromised.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Authentication Security */}
            <section>
              <div className="flex items-center mb-4">
                <Key className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Authentication Security</h2>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Password Protection</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Passwords are hashed using bcrypt with salt rounds</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Minimum 6-character password requirement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Account lockout protection against brute force attacks</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Session Management</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Secure session tokens with automatic expiration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Logout functionality clears all session data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Privacy Protection */}
            <section>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Privacy Protection</h2>
              </div>
              <div className="bg-green-50 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Local Speech Processing</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Your voice data is processed entirely within your browser using the Web Speech API. 
                    No audio data is ever transmitted to our servers.
                  </p>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                    <p className="text-green-800 text-sm font-medium">
                      🔒 Your voice stays on your device - guaranteed.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Data Minimization</h3>
                  <p className="text-gray-600 text-sm">
                    We only collect the minimum data necessary to provide our services. 
                    Word history is stored locally and can be cleared at any time.
                  </p>
                </div>
              </div>
            </section>

            {/* Security Best Practices */}
            <section>
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Security Best Practices</h2>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">For Your Account</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Use a strong, unique password</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Log out when using shared devices</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Keep your browser updated</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Our Commitments</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Regular security audits and updates</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Immediate response to security issues</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Transparent communication about incidents</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Incident Reporting */}
            <section>
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Report Security Issues</h2>
              </div>
              <div className="bg-orange-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  If you discover a security vulnerability or have concerns about our security practices, 
                  please report them immediately:
                </p>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Security Email:</strong> security@signspeak.com</p>
                    <p><strong>Response Time:</strong> Within 24 hours</p>
                    <p><strong>PGP Key:</strong> Available upon request</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  We appreciate responsible disclosure and will work with you to address any legitimate security concerns.
                </p>
              </div>
            </section>

            {/* Compliance */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Compliance & Standards</h2>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">GDPR</h3>
                  <p className="text-gray-600 text-xs">EU Data Protection</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">CCPA</h3>
                  <p className="text-gray-600 text-xs">California Privacy</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">SOC 2</h3>
                  <p className="text-gray-600 text-xs">Security Standards</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};