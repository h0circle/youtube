import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function Related({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], async () => await youtube.relatedVideo(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <p className="text-center">Loading....</p>}
      {error && <p className="text-center">Something is wrong...🧐</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}
