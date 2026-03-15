"use client";

import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "@/src/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPage = () =>{
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmiting }
    } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Login data>>>", data);

    // later
    //  await authService.login(data);
  };

  return (
    <div className="max-d-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">
        Login
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      </form>
    </div>
  )
}

export default LoginPage;
