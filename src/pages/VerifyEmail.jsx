import { useState } from 'react';
import { verifyEmail } from '../modules/core/services/authService';
import { useNavigate } from 'react-router-dom';

export default function VerifyEmailPage() {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await verifyEmail(token);
      setMessage('Email verified! Redirecting to login…');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Invalid or expired token');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Verify Your Email</h2>
      {message && <p className="mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Verification Token</label>
          <input
            type="text"
            value={token}
            onChange={e => setToken(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Verify Email
        </button>
      </form>
    </div>
  );
}
