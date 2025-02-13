import Image from "next/image";
import logo_md from "../../public/logo/logo_md.svg";
import BoxButton from "./button/btn";
import React from "react";

export default function Header() {
  return (
    <nav className="sticky top-0 bg-white h-[70px] border-b border-solid  border-[#DFDFDF] flex items-center justify-center">
      <div className="flex justify-between items-center h-full max-h-[51px] max-w-[1120px] w-full px-4">
        <Image src={logo_md} alt="logo" />
        <BoxButton size="small48" className="w-[128px]">
          로그인
        </BoxButton>
      </div>
    </nav>
  );
}
