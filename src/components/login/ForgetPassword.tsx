import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ArrowRight, ChevronLeft } from 'lucide-react';
import { useAuth } from '@/contexts/Authcontext';
import ClipLoader from "react-spinners/ClipLoader";

const ForgetPassword: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const { resetPassword } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage('');
        setError('');
        setLoading(true);

        try {
            await resetPassword(email);
            setMessage('Check your inbox for further instructions');
        } catch (err) {
            console.log(err);
            setError('Failed to reset password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black p-4">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
                <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
            </Link>
            <div className="w-full max-w-md">
                <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-xl border border-gray-700">
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">Reset Password</h2>

                    {error && (
                        <div className="mb-4 p-3 bg-red-500/20 text-red-300 rounded-lg text-sm">
                            {error}
                        </div>
                    )}
                    {message && (
                        <div className="mb-4 p-3 bg-green-500/20 text-green-300 rounded-lg text-sm">
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label className="block text-gray-300 mb-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-gray-700/50 border border-gray-600 text-white px-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <div className="text-right mt-2">
                                <Link
                                    to="/login"
                                    className="text-sm text-indigo-400 hover:text-indigo-300 font-medium"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
                        >
                            <span>{loading ? 'Resetting Password...' : 'Reset Password'}</span>
                            {!loading && <ArrowRight className="h-5 w-5" />} 
                            {loading && <ClipLoader color='white' size={20} />}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-gray-400">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-indigo-400 hover:text-indigo-300 font-medium">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;