"use client";

import { useState } from "react";
import DesktopVideoPlayList from "./DesktopPlaylist";

export default function Home() {
  const [playlist, setPlaylist] = useState({
    BC_ACCOUNT_ID: "6415746341001",
    BC_PLAYER_ID: "ecWjDVolWB",
    heroVideoId: "6360853745112",
    playlistId: "1810049371391100086",
    numOfVideos: 15,
    playlistTitle: "Playlist Title",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setPlaylist((prev) => ({
      ...prev,
      [name]: type === "number" ? parseInt(value, 10) : value,
    }));
  };

  const [showConfig, setShowConfig] = useState(false);

  return (
    <div className="max-w-[1100px] pt-5 w-full mx-auto">
      <button
        onClick={() => setShowConfig(!showConfig)}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
      >
        {showConfig ? "Hide" : "Show"} config
      </button>
      {showConfig && (
        <div className="p-4 md:flex-row flex flex-col gap-6">
          <form className="flex flex-col gap-4 p-6 border border-gray-300 rounded-lg shadow-md flex-1">
            <label className="flex flex-col">
              Brightcove Account ID:
              <input
                type="text"
                name="BC_ACCOUNT_ID"
                value={playlist.BC_ACCOUNT_ID}
                onChange={handleInputChange}
                className="p-2 mt-1 border border-gray-300 rounded-md"
              />
            </label>
            <label className="flex flex-col">
              Brightcove Player ID:
              <input
                type="text"
                name="BC_PLAYER_ID"
                value={playlist.BC_PLAYER_ID}
                onChange={handleInputChange}
                className="p-2 mt-1 border border-gray-300 rounded-md"
              />
            </label>
            <label className="flex flex-col">
              Hero Video ID:
              <input
                type="text"
                name="heroVideoId"
                value={playlist.heroVideoId}
                onChange={handleInputChange}
                className="p-2 mt-1 border border-gray-300 rounded-md"
              />
            </label>
            <label className="flex flex-col">
              Playlist ID:
              <input
                type="text"
                name="playlistId"
                value={playlist.playlistId}
                onChange={handleInputChange}
                className="p-2 mt-1 border border-gray-300 rounded-md"
              />
            </label>
            <label className="flex flex-col">
              Number of Videos:
              <input
                type="number"
                name="numOfVideos"
                value={playlist.numOfVideos}
                onChange={handleInputChange}
                className="p-2 mt-1 border border-gray-300 rounded-md"
              />
            </label>
            <label className="flex flex-col">
              Playlist Title:
              <input
                type="text"
                name="playlistTitle"
                value={playlist.playlistTitle}
                onChange={handleInputChange}
                className="p-2 mt-1 border border-gray-300 rounded-md"
              />
            </label>
          </form>
          <div>
            <h3 className="text-center mt-6">Current Playlist State:</h3>
            <pre className="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto">
              {JSON.stringify(playlist, null, 2)}
            </pre>
          </div>
        </div>
      )}
      <DesktopVideoPlayList key={JSON.stringify(playlist)} {...playlist} />
    </div>
  );
}
