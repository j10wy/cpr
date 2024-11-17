"use client";

import React from "react";

interface EmbedPlayerProps {
  src: string;
  id: string;
}

const EmbedPlayer: React.FC<EmbedPlayerProps> = ({ src, id }) => {
  return (
    <>
      <div id={`buzzsprout-player-${id}`}></div>
      <script async src={src} type="text/javascript" />
    </>
  );
};

export default EmbedPlayer;
