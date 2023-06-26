import React from "react";
import s from "./header.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <div className={s.header}>
    <Image
        className={s.logo}
        src={"/logo/logo.png"}
        alt="logo_img"
        width={100}
        height={100}
    />
    <div className={s.headerLeft}>World Best Travel Agency</div>
    </div>
  );
}
