"use client";

import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "@/src/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledButton } from "@/src/components/ui/StyledButton";
import { InputField } from "@/src/components/ui/InputField";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmiting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Login data>>>", data);

    // later
    //  await authService.login(data);
  };

  return (
    <div className="max-d-md mx-auto mt-10">
      <h1 className="text-center text-2xl font-bold mb-6">Login</h1>

      <div className="max-w-md mx-auto border rounded-lg p-8 bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label={"Email"}
            error={errors.email?.message}
            className="mb-3"
          />
          <InputField
            label={"Password"}
            error={errors.password?.message}
            className="mb-8"
          />

          <StyledButton disabled={isSubmiting}>Login</StyledButton>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
