"use client";

import FormInput from "@/app/components/from-input";
import FormButton from "@/app/components/form-btn";
import SocialLogin from "../components/social-login";
import { createAccount } from "./actions";
import { useActionState } from "react";

export default function CreateAccount() {
  const [state, trigger] = useActionState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={trigger} className="flex flex-col gap-3">
        <FormInput name="username" type="text" placeholder="Username" required={true}></FormInput>

        <FormInput name="email" type="email" placeholder="email" required={true}></FormInput>
        <FormInput
          name="password"
          type="password"
          placeholder="password"
          required={true}></FormInput>
        <FormInput
          name="passwordConfirm"
          type="password"
          placeholder="password confirm"
          required={true}></FormInput>
        <FormButton text="Create account"></FormButton>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
}
