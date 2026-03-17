"use client";

import { useForm } from "react-hook-form";
import { RegisterFormData, registerSchema } from "@/src/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "@/src/components/ui/InputField";
import { StyledButton } from "@/src/components/ui/StyledButton";
import Link from "next/link";
import { authService } from "@/src/services/authService";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    await authService.register(data);
  };

  return (
    <div className="max-d-md mx-auto mt-10">
      <h1 className="text-center text-2xl font-bold mb-6">Register</h1>

      <div className="max-w-[40rem] mx-auto border rounded-lg p-8 bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            type="name"
            label={"Name"}
            placeholder="Name"
            {...register("name")}
            error={errors.name?.message}
            className="mb-3"
          />
          <InputField
            type="email"
            label={"Email"}
            placeholder="Email"
            {...register("email")}
            error={errors.email?.message}
            className="mb-3"
          />
          <InputField
            type="password"
            label={"Password"}
            placeholder="Password"
            {...register("password")}
            error={errors.password?.message}
            className="mb-8"
          />
          <InputField
            type="password"
            label={"Confirm Password"}
            placeholder="Confirm Password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
            className="mb-8"
          />

          <StyledButton disabled={isSubmitting}>Register</StyledButton>
        </form>

        <div className="flex gap-2 mt-6">
          <p className="text-sm">Already have an account?</p>

          <Link
            href="/login"
            className="text-sm text-indigo-200 hover:text-indigo-700"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
