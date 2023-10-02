import React from "react";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { v4 as uuidv4 } from "uuid";

register("ko", koLocale);

export default function Comment({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: comments,
  } = useQuery(["comment", id], () => youtube.getComment(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      <h1 className="font-bold mt-4 mb-4">댓글</h1>
      {isLoading && <p>Loading......🥸</p>}
      {error && <p>Something is wrong</p>}
      {comments && (
        <ul>
          {comments.map(
            ({
              textOriginal,
              authorProfileImageUrl,
              authorDisplayName,
              publishedAt,
            }) => (
              <li className="flex mb-5" key={uuidv4()}>
                <div className="shrink-0">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={authorProfileImageUrl}
                    alt={authorDisplayName}
                  />
                </div>
                <div>
                  <p>
                    <b className="text-sm">{authorDisplayName}</b>
                    <span className="ml-3 text-sm">
                      {format(publishedAt, "ko")}
                    </span>
                  </p>
                  <pre className="whitespace-pre-wrap leading-6 text-sm">
                    {textOriginal}
                  </pre>
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
}
