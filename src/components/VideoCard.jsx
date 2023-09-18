import React from "react";
import { useNavigate } from "react-router-dom";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";

register("ko", koLocale);

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <article>
      <section>
        <li
          onClick={() => {
            navigate(`/videos/watch/${video.id}`, { state: { video } });
          }}
        >
          <img src={thumbnails.medium.url} alt="썸네일" />
          <div>
            <p>{title}</p>
            <p>{channelTitle}</p>
            <p>{format(publishedAt, "ko")}</p>
          </div>
        </li>
      </section>
      <section></section>
    </article>
  );
}
