import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  // <div>videos {keyword ? `${keyword}🔍` : "🔥"}</div>
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword));
  return (
    <div className="p-8">
      {isLoading && <p>Loaindg.....🥸</p>}
      {error && <p>Something is wrong....🧐</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm: grid-cols-2 lg: grid-cols-3 xl: grid-cols-4  2xl: grid-cols-5 gap-2">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
