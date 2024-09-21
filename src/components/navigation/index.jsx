"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";

const index = () => {
  const angleIncrement = 360 / BtnList.length;

  return (
    <div className="fixed w-full h-screen flex items-center justify-center z-50 animate-spin-slow group">
      <div className="flex items-center justify-between relative">
        {BtnList.map((btn, index) => {
          const angleRadian = (index * angleIncrement * Math.PI) / 180;
          const radius = "calc(20vw - 1rem)";
          const x = `calc(${radius}*${Math.cos(angleRadian)})`;
          const y = `calc(${radius}*${Math.sin(angleRadian)})`;
          console.log({ x, y, index, angleIncrement, angleRadian });
          return (
            <NavButton key={btn.label} x={x} y={y} {...btn} />
          );
        })}
      </div>
    </div>
  );
};

export default index;
