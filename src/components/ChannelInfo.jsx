import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: channel,
  } = useQuery(["channel", id], () => youtube.channelDetail(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div className="flex my-4 mb-8 items-center">
      {isLoading && <p>Loading.....</p>}
      {error && <p>Something is wrong....</p>}
      {channel && (
        <img
          src={channel.thumbnails.default.url}
          alt={name}
          className="w-12 h-12 rounded-full"
        />
      )}
      <p className="text-lg font-medium ml-2">{name}</p>
    </div>
  );
}
