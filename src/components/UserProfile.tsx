
import React, { useEffect, useState } from 'react';
import { useAuth } from './Auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

interface UserData {
  displayName: string;
  email: string;
  photoURL: string;
  lastLogin: any;
  uid: string;
}

export const UserProfile: React.FC = () => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!currentUser) {
        setLoading(false);
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data() as UserData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUser]);

  if (loading) {
    return <div className="flex justify-center p-4">Loading...</div>;
  }

  if (!currentUser || !userData) {
    return (
      <div className="p-4 text-center">
        <p>Please sign in to view your profile</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#001a00] border border-[#00ff00]/20 rounded-xl p-6 max-w-md mx-auto">
      <div className="flex items-center space-x-4 mb-6">
        <img 
          src={userData.photoURL} 
          alt="Profile" 
          className="w-16 h-16 rounded-full border-2 border-[#00ff00]"
        />
        <div>
          <h2 className="text-xl font-bold">{userData.displayName}</h2>
          <p className="text-sm text-gray-400">{userData.email}</p>
        </div>
      </div>

      <div className="border-t border-[#00ff00]/20 pt-4 mt-4">
        <h3 className="text-lg font-semibold text-[#00ff00] mb-3">Profile Information</h3>
        <p className="text-sm mb-2">
          <span className="font-medium">User ID:</span> {userData.uid.substring(0, 8)}...
        </p>
        <p className="text-sm mb-2">
          <span className="font-medium">Last Login:</span> {userData.lastLogin?.toDate?.().toLocaleString() || 'Unknown'}
        </p>
      </div>
    </div>
  );
};
