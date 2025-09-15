import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <div className="bg-yellow-600 flex items-center justify-center min-h-screen">
      <Image
        src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
        alt="Background image"
        width={500}
        height={500}
      />
      {props.children}
    </div>
  );
};

export default AuthLayout;
