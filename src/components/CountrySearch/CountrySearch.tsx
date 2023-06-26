import React from "react";
import s from "./countrySearch.module.scss";
import Image from "next/image";

export default function CountrySearch() {
  return (
    <div className={s.countrySearch}>
      <h1 className={s.heading}>Country, State and Region Guides</h1>
      <p>A comprehensive guide to the world's best destinations.</p>
      <div className={s.inputBox}>
        <input type="text" placeholder="Where would your like to go?" />
        <button className={s.searchBtn}>
          <Image
            src={"/logo/search_white.png"}
            alt="search Btn"
            width={30}
            height={30}
          />
        </button>
      </div>
    </div>
  );
}
