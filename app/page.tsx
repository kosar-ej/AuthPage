"use client";
import AuthForm from "@/components/AuthForm";
import { getStorage } from "@/functions";
import AuthStyles from "@/styles/auth.module.scss";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const user  = getStorage('user')
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <div className={AuthStyles.authContainer}>
      <div className={AuthStyles.authCard}>
        <AuthForm />
      </div>
    </div>
  );
}
