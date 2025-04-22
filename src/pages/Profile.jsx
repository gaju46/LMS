import { useEffect, useState } from 'react';
import { getProfile } from '../modules/core/services/authService';
import { useAuth } from '../modules/core/providers/AuthProvider';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const { logout } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const res = await getProfile();
        setProfile(res.data.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  if (!profile) return <p className="p-6">Loading your profile…</p>;

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome, {profile.first_name}</h2>
      <ul className="space-y-2 mb-6">
        <li><strong>Email:</strong> {profile.email}</li>
        <li><strong>Role:</strong> {profile.role}</li>
        <li><strong>Gender:</strong> {profile.gender}</li>
        <li><strong>Address:</strong> {profile.address}</li>
      </ul>
      <button
        onClick={logout}
        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
      >
        Log Out
      </button>
    </div>
  );
}
