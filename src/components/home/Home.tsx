"use client";

import React from "react";
import { toast } from "react-toastify";

export default function Home() {
  const handleClick = () => {
    toast.success("Under Production! See you soon.");
  };
  return (
    <div className="min-h-screen flex justify-center items-center">Home</div>
  );
}