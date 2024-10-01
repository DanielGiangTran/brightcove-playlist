"use client";

import React, { useState, useRef } from "react";
import ReactPlayerLoader from "@brightcove/react-player-loader";
import clsx from "clsx";
import { formatTime, serverUrl } from "./utils";

const DesktopVideoPlayList = (props) => {
  const {
    BC_ACCOUNT_ID,
    BC_PLAYER_ID,
    heroVideoId,
    playlistId,
    numOfVideos,
    playlistTitle,
  } = props;

  const playerRef = useRef(null);

  const [playlist, setPlaylist] = useState([]);

  const [currentVideo, setCurrentVideo] = useState(0);

  const currentVideoData = playlist[currentVideo] || {};

  const { name, description, duration } = currentVideoData;

  const onChangeVideo = (index) => {
    const player = playerRef.current;

    setCurrentVideo(index);

    player.playlist.currentItem(index);
  };

  const initializeIMA = (player) => {
    player.ima3({
      serverUrl,
    });
  };

  const setupPlaylistEventHandler = (player) => {
    player.on("playlistitem", () => {
      const currentIndex = player.playlist.currentIndex();
      setCurrentVideo(currentIndex);
    });
  };

  const loadHeroVideoWithPlaylist = (player, heroVideoId, playlistId) => {
    player.catalog.getVideo(heroVideoId, (error, video) => {
      if (error) {
        console.error("Error loading hero video:", error);
        return;
      }

      player.catalog.getPlaylist(playlistId, (error, playList) => {
        if (error) {
          console.error("Error loading playlist:", error);
          return;
        }

        const newPlayList = [video, ...playList];

        const finalPlayList = newPlayList.slice(0, numOfVideos);

        setPlaylist(finalPlayList);

        player.catalog.load(finalPlayList);
      });
    });
  };

  const loadPlaylist = (player, playlistId) => {
    player.catalog.getPlaylist(playlistId, (error, playList) => {
      if (error) {
        console.error("Error loading playlist:", error);
        return;
      }

      const finalPlayList = playList.slice(0, numOfVideos);
      setPlaylist(finalPlayList);
      player.catalog.load(finalPlayList);
    });
  };

  const onSuccess = (success) => {
    const player = success?.ref;
    if (!player) return;

    playerRef.current = player;
    setupPlaylistEventHandler(player);

    if (heroVideoId) {
      loadHeroVideoWithPlaylist(player, heroVideoId, playlistId);
    } else {
      loadPlaylist(player, playlistId);
    }

    initializeIMA(player);
  };

  const onFailure = (error) => {
    console.error("Error loading player:", error);
  };

  return (
    <section className="my-5 bg-black px-6 py-8">
      <p className="mb-3 text-[28px] text-white">{playlistTitle}</p>
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="flex flex-1 flex-col">
          <ReactPlayerLoader
            accountId={BC_ACCOUNT_ID}
            playerId={BC_PLAYER_ID}
            embedOptions={{ pip: true }}
            options={{
              aspectRatio: "16:9",
              playsinline: true,
            }}
            onSuccess={onSuccess}
            onFailure={onFailure}
          />
          <div className="flex flex-col gap-2 bg-sys-bg-dark p-6">
            {name && <h3 className="text-white">{name}</h3>}
            {description && <p className="text-white">{description}</p>}
            {duration && (
              <time className="text-white"> {formatTime(duration)} mins</time>
            )}
          </div>
        </div>
        <div className="flex max-h-[600px] flex-col gap-5 overflow-y-auto scrollbar-hide sm:w-[274px]">
          <div className="flex flex-col text-white">
            <h3 className="text-white">Watch next </h3>
            <p className="text-sm">
              Playing {currentVideo + 1} of {playlist.length}
            </p>
          </div>

          {playlist.map((item, index) => {
            const isCurrentVideo = index === currentVideo;

            const { duration, thumbnail, title } = item;
            return (
              <div
                className={clsx("flex cursor-pointer gap-4 text-white", {
                  "bg-sky-800": isCurrentVideo,
                })}
                onClick={() => {
                  onChangeVideo(index);
                }}
                key={item.id}
              >
                <img
                  className="aspect-[3/2] h-[66.7px]"
                  src={thumbnail}
                  alt={title}
                />

                <div className="flex flex-col gap-2">
                  <h3 className="text-white">{item.name}</h3>
                  {isCurrentVideo ? (
                    <span className="text-xs"> Playing </span>
                  ) : (
                    <time>{formatTime(duration)} mins</time>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesktopVideoPlayList;
