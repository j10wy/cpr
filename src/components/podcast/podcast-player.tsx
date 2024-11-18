"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Rewind, FastForward, Info, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";

export function PodcastPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    }
    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        audioElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
    };
  }, []);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(
        audioRef.current.currentTime - 30,
        0
      );
    }
  };

  const handleFastForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        audioRef.current.currentTime + 30,
        duration
      );
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <Card className="w-full overflow-hidden my-6">
      <CardContent className="p-0 flex flex-col sm:flex-row">
        <div className="w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
          <Image
            src="/podcasts/episode-01-closing-libraries.png"
            alt="Podcast cover"
            className="w-full h-full object-cover"
            width={192}
            height={192}
          />
        </div>
        {/* Add gradient with bg-gradient-to-br from-gray-300 to-gray-100 */}
        <div className="flex-grow flex flex-col justify-between p-4 sm:p-6">
          <div>
            <h2 className="text-xl font-bold mb-1">Podcast Episode Title</h2>
            <p className="text-sm text-muted-foreground">Podcast Show Name</p>
          </div>
          <div className="space-y-4 mt-4">
            <Slider
              value={[currentTime]}
              max={duration}
              step={1}
              onValueChange={handleSeek}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <Button
                  onClick={handleRewind}
                  size="icon"
                  variant="outline"
                  className="h-10 w-10"
                >
                  <Rewind className="h-5 w-5" />
                  <span className="sr-only">Rewind 30 seconds</span>
                </Button>
                <Button
                  onClick={togglePlayPause}
                  size="icon"
                  className="h-12 w-12"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-6 w-6" />
                      <span className="sr-only">Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-6 w-6" />
                      <span className="sr-only">Play</span>
                    </>
                  )}
                </Button>
                <Button
                  onClick={handleFastForward}
                  size="icon"
                  variant="outline"
                  className="h-10 w-10"
                >
                  <FastForward className="h-5 w-5" />
                  <span className="sr-only">Fast forward 30 seconds</span>
                </Button>
              </div>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center"
                >
                  <Info className="h-4 w-4 mr-2" />
                  <span>More Info</span>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  <span>Share</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <audio
        ref={audioRef}
        src="https://www.buzzsprout.com/2425181/episodes/16121975-shhh-the-library-s-closed-tales-from-a-district-that-knows-best.mp3?download=true"
        preload="metadata"
      />
    </Card>
  );
}
