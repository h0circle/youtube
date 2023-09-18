import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import Related from "./Related";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  return (
    <article className="flex justify-center p-5">
      <section>
        <div>
          <iframe
            className="rounded-lg"
            id="player"
            type="text/html"
            width="1190"
            height="669"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="title"
          ></iframe>
          <div>
            <ChannelInfo />
          </div>
        </div>
      </section>
      <section>
        <Related id={video.id} />
      </section>
    </article>
  );
}
