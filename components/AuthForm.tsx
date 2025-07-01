"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import { CustomButton } from "./CustomButton";
import AuthStyles from "@/styles/auth.module.scss";
import { useRouter } from "next/navigation";
import { setStorage } from "@/functions";
import { toast } from "react-toastify";

const phoneSchema = z.object({
  phoneNumber: z
    .string({required_error : 'Please enter the phonenumber'})
    .length(11, "Phone number must be 11 characters")
    .regex(/^(\+98|0)?9\d{9}$/, "Please enter a valid Iranian phone number"),
});

type PhoneFormData = z.infer<typeof phoneSchema>;

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneFormData>({
    resolver: zodResolver(phoneSchema),
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: PhoneFormData) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://randomuser.me/api/?results=1&nat=us"
      );
      const userData = await response.json();
      setStorage("user", userData);
      router.push("/dashboard");
      toast.success("Successful login!")
    } catch (error : any) {
      toast.error(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={AuthStyles.authForm}>
        <h2 className={AuthStyles.authCardTitle}>Login</h2>

        <CustomInput
          placeholder="Phone number"
          {...register("phoneNumber")}
          error={errors.phoneNumber?.message}
        />

        <CustomButton type="submit" variant="primary" loading={loading}>
          <span>Submit</span>
        </CustomButton>
      </div>
    </form>
  );
}
