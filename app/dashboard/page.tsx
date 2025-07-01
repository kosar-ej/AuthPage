'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getStorage } from '@/functions';

export default function DashboardPage() {
  const user  = getStorage('user')
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
    </div>
  );
}