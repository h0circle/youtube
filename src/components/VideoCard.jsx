import React from "react";
import { useNavigate } from "react-router-dom";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";

register("ko", koLocale);

export default function VideoCard({ video, type }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const isList = type === "list";
  return (
    <article>
      <section className={isList ? "" : ""}>
        <li
          className={isList ? "flex gap-1 ml-6 mr-2 mb-2" : ""}
          onClick={() => {
            navigate(`/videos/watch/${video.id}`, { state: { video } });
          }}
        >
          <img
            className={
              isList ? "w-40 rounded-lg object-cover" : "w-full rounded-lg"
            }
            src={thumbnails.medium.url}
            alt={title}
          />
          <div className={isList ? "" : "mr-2"}>
            <p
              className={
                isList
                  ? "text-sm font-semibold line-clamp-2"
                  : "font-semibold my-2 line-clamp-2"
              }
            >
              {title}
            </p>
            <p className={isList ? "text-xs mt-2" : "text-sm opacity-80"}>
              {channelTitle}
            </p>
            <p
              className={
                isList ? "text-xs inset-x-0 bottom-0" : "text-sm opacity-80"
              }
            >
              {format(publishedAt, "ko")}
            </p>
          </div>
        </li>
      </section>
      <section></section>
    </article>
  );
}
