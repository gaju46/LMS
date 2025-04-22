import { useState} from 'react';
import { requestReset, resetWithToken } from '../modules/core/services/authService';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  // Request a reset link
  const handleRequest = async e => {
    e.preventDefault();
    try {
      await requestReset(email);
      setMessage('Reset link sent! Check your email.');
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Error sending reset link');
    }
  };

  // Actually reset the password
  const handleReset = async e => {
    e.preventDefault();
    try {
      await resetWithToken({ token, newPassword });
      alert('Password updated! Redirecting to login…');
      navigate('/login');
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Reset failed');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      {message && <p className="mb-4">{message}</p>}

      {token ? (
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block mb-1">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Update Password
          </button>
        </form>
      ) : (
        <form onSubmit={handleRequest} className="space-y-4">
          <div>
            <label className="block mb-1">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send Reset Link
          </button>
        </form>
      )}
    </div>
  );
}
