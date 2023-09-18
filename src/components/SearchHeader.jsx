import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";

export default function SearchHeader() {
  const { keyword } = useParams();
  const [text, setText] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header className="flex w-full p-2 items-center">
      <div className="hover:bg-neutral-200 p-2 mr-5 ml-3 rounded-full">
        <CiMenuBurger className="text-2xl" />
      </div>
      <Link className="flex items-center" to="/">
        <BsYoutube className="text-brand text-3xl mr-1" />
        <h1 className="font-bold text-xl">Hyotube</h1>
      </Link>
      <form className="flex justify-center w-full" onSubmit={handleSubmit}>
        <input
          className="w-5/12 p-2 pl-4 rounded-l-full border outline-none"
          onChange={(e) => setText(e.target.value)}
          value={text || ""}
          type="text"
          placeholder="검색"
        />
        <button className="flex items-center pl-5 pr-6 bg-stone-200 rounded-r-full">
          <BsSearch />
        </button>
      </form>
      <div className="w-60"></div>
    </header>
  );
}
