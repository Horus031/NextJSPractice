"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Codesandbox } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = (props: AuthLayoutProps) => {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    router.push("/login");
  };

  const handleRegister = () => {
    router.push("/register");
  };

  const handleSearchPage = () => {
    const value = inputRef.current?.value
    if (value?.trim() === '') return


    router.push(`/search?keyword=${value?.trim()}`)
  }

  return (
    <div className="">
      <header className="w-screen h-20 p-3 flex items-center justify-between bg-gray-800 text-white">
        <div className="flex items-center gap-8">
          <Codesandbox size={60}/>
          <div className="flex items-center gap-1"> 
            <Input ref={inputRef} placeholder="Nhập nội dung tìm kiếm..."/>
            <Button onClick={handleSearchPage}>Tìm kiếm</Button>
          </div>
        </div>
        <div className="flex items-center p-2 gap-2">
          <Button onClick={handleLogin}>Đăng Nhập</Button>
          <Button variant="outline" onClick={handleRegister}>Đăng Ký</Button>
        </div>
      </header>

      <main>{props.children}</main>

      <footer className="w-screen h-20 p-3 flex items-center justify-between bg-gray-800 text-white">
        <p>2023 Company Name</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
