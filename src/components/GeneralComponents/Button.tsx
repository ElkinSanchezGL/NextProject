"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

type ButtonRedirectProps = {
  text: string;
  route: string; 
  className?: string;
  onNavigate?: () => void;
};

const ButtonRedirect: React.FC<ButtonRedirectProps> = ({
  text,
  route,
  className,
  onNavigate
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onNavigate) {
      onNavigate();
    }

    router.push(route.startsWith("/") ? route : `/${route}`);
  };

  return (
    <button
      className={className || "bg-red-800 text-white px-8 py-2 rounded hover:bg-red-500 cursor-pointer"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonRedirect;
