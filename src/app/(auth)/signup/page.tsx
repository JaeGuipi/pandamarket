"use client";
import googlelogo from "@/../public/icons/ic_google.svg";
import kakaologo from "@/../public/icons/ic_kakao.svg";

import {
  EmailInput,
  NickNameInput,
  PasswordCheckInput,
  PasswordInput,
} from "@/components/Input/DefaultInput";
import logo_lg from "@/../public/logo/logo_lg.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  return (
    <div className="w-[640px] mx-auto my-[238px] flex flex-col gap-10">
      <Link href="/" className="cursor-pointer my-0 mx-auto">
        <Image src={logo_lg} alt="로고" />
      </Link>
      <div className="flex flex-col gap-6">
        <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
        <NickNameInput
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <PasswordCheckInput
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
        <button className="w-full font-semibold text-xl text-gray-100 bg-gray-400 px-[124px] py-4 rounded-[40px] disabled:bg-gray-400">
          로그인
        </button>
        <div className="bg-[#E6F2FF] rounded-lg py-4 px-[23px] flex justify-between items-center">
          <p className="font-medium text-base">간편 로그인하기</p>
          <div className="flex gap-4">
            <Image src={googlelogo} alt="구글 로고" />
            <Image src={kakaologo} alt="카카오 로고" />
          </div>
        </div>
        <p className="text-center text-gray-800 text-sm font-medium">
          판다마켓이 처음이신가요?{" "}
          <Link href={"/signup"} className="text-[#3692FF] underline">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}
