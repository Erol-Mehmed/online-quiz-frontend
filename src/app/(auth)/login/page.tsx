"use client";

import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "@/src/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledButton } from "@/src/components/ui/StyledButton";
import { InputField } from "@/src/components/ui/InputField";
import Link from "next/link";
import { authService } from "@/src/services/authService";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
     await authService.login(data);
  };

  return (
    <div className="max-d-md mx-auto mt-10">
      <h1 className="text-center text-2xl font-bold mb-6">Login</h1>

      <div className="max-w-[40rem] mx-auto border rounded-lg p-8 bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
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

          <StyledButton disabled={isSubmitting}>Login</StyledButton>
        </form>

        <div className="flex gap-2 mt-6">
          <p className="text-sm">Don&#39;t have an account?</p>

          <Link
            href="/register"
            className="text-sm text-indigo-400 hover:text-indigo-700"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
