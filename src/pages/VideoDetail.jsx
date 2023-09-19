import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import Related from "../components/Related";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className="flex flex-col lg:flex-row p-7">
      <article className="basis-4/6">
        <iframe
          className="rounded-lg"
          id="player"
          type="text/html"
          width="1190"
          height="669"
          src={`https://www.youtube.com/embed/${video.id}`}
          title="title"
        />
        <div>
          <h2 className="text-xl font-bold mt-2">{title}</h2>
          <ChannelInfo info={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap bg-zinc-100 p-4 rounded-lg mt-4 text-sm font-semibold font-Noto">
            {description}
          </pre>
        </div>
      </article>
      <section className="basis-2/6">
        <Related id={video.id} />
      </section>
    </section>
  );
}
