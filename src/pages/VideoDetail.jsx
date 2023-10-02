import React from "react";
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

  return (
    <section className="flex flex-col lg:flex-row p-7">
      <article className="basis-4/6">
        <iframe
          className="rounded-lg w-full lg:h-1/8"
          id="player"
          type="text/html"
          width="1190"
          height="669"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="title"
        />
        <div>
          <h2 className="text-xl font-bold mt-2">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap bg-zinc-100 p-4 rounded-lg text-sm font-semibold font-Noto">
            {description}
          </pre>
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
