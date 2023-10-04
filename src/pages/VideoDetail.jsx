import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import Comment from "../components/Comment";

import Related from "../components/Related";

export default function VideoDetail() {
  const {
    state: {
      video: {
        id: videoId,
        snippet: { channelId, channelTitle, description, title },
      },
    },
  } = useLocation();

  const [open, setOpen] = useState(false);

  return (
    <section className="flex flex-col w-full lg:flex-row p-7">
      <article className="basis-4/6">
        <iframe
          className="rounded-lg lg:h-1/8"
          width="1206"
          height="678"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div>
          <h2 className="text-xl font-bold mt-2">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <div className=" bg-zinc-100 p-4 rounded-lg text-sm font-normal font-Noto">
            <pre
              className={
                open
                  ? "whitespace-pre-wrap"
                  : "whitespace-pre-wrap line-clamp-2 overflow-hidden"
              }
            >
              {description}
            </pre>
            <button className="mt-2" onClick={() => setOpen(!open)}>
              {open ? "간략히" : "더보기"}
            </button>
          </div>
        </div>
        <div>
          <Comment id={videoId} />
        </div>
      </article>
      <section className="basis-2/6">
        <Related id={videoId} />
      </section>
    </section>
  );
}
