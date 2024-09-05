"use client";
import React, { useState } from "react";
import Input from "../forms/input";
import Envelope from "@/assets/icons/envelope.svg";
import Unlock from "@/assets/icons/unlock.svg";
import Eye from "@/assets/icons/eye.svg";
import Image from "next/image";
import Label from "../forms/label";
import Button from "../buttons/button";
import Link from "next/link";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required("Email is required!")
    .email("Invalid Email"),
  password: Yup.string().required("Password is required!"),
});

export default function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState("");
  const [formData, setFormData] = useState({
    email: "admin@gmail.com",
    password: "12345678",
  });
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/login", {
        email: formData.email,
        password: formData.password,
      });
      if (response.data.token == null) {
        setLoading(false);
        setErr("Invalid credentials!");
        setTimeout(() => {
          setErr("");
        }, 3000);
        return;
      }
      setCookie("accessToken", response.data.token);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full space-y-2">
      <Label label="Email" />
      <Input
        value={formData.email}
        onChange={(e: any) =>
          setFormData({ ...formData, email: e.target.value })
        }
        name="email"
        leftElement={<Image src={Envelope} alt={"envelop"} />}
        placeHolder="Enter Your Email"
      />
      <Label label="Password" />
      <Input
        value={formData.password}
        onChange={(e: any) =>
          setFormData({ ...formData, password: e.target.value })
        }
        name="password"
        leftElement={<Image src={Unlock} alt={"unlock"} />}
        placeHolder="Enter Your Password"
        rightElement={
          <Image src={Eye} alt={"eye"} className="cursor-pointer" />
        }
      />
      {err && <p className="text-red">{err}</p>}
      <Link href="/forgetpass">
        <p className="w-full text-right text-200 text-base font-bold cursor-pointer py-3">
          Forget Password?
        </p>
      </Link>
      <Button onClick={handleSubmit} loading={loading} text="Sign In" />
      <p className="w-full text-center capitalize text-base">
        Don't have an account?{" "}
        <Link href="/signup">
          <span className="text-200 cursor-pointer">Sign Up</span>
        </Link>
      </p>
    </div>
  );
}
