import { useState } from "react";
import {
  Bluetooth,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeOff,
} from "lucide-react";
import { Slider, Card } from "antd";

export function MusicCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(65);

  return (
    <Card
      bordered={false}
      style={{
        background: "linear-gradient(to bottom right, #1e293b, #0f172a)",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid rgba(51, 65, 85, 0.5)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        height: "100%",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "rgba(59, 130, 246, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Bluetooth size={24} color="#60a5fa" />
          </div>

          <div>
            <h3 style={{ color: "white", margin: 0 }}>Music Connect</h3>
            <p
              style={{
                color: "rgb(148 163 184)",
                fontSize: "14px",
                margin: 0,
              }}
            >
              Bluetooth Enabled
            </p>
          </div>
        </div>

        {/* Green Online Dot */}
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#4ade80",
            boxShadow: "0 0 6px #4ade80",
            animation: "pulse 1.5s infinite",
          }}
        />
      </div>

      {/* Album Art Placeholder */}
      <div
        style={{
          height: "130px",
          borderRadius: "14px",
          marginBottom: "24px",
          background:
            "linear-gradient(to bottom right, rgba(147,51,234,0.2), rgba(37,99,235,0.2))",
          border: "1px solid rgba(51, 65, 85, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "rgba(30,41,59,0.5)",
              margin: "0 auto 8px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Play size={32} color="#94a3b8" />
          </div>
          <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0 }}>
            No music playing
          </p>
        </div>
      </div>

      {/* Playback Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        {/* Back */}
        <button
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "rgba(51, 65, 85, 0.5)",
            color: "#cbd5e1",
            border: "none",
            cursor: "pointer",
            transition: "0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#334155";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(51,65,85,0.5)";
            e.currentTarget.style.color = "#cbd5e1";
            e.currentTarget.style.transform = "scale(1)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.8)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <SkipBack size={20} />
        </button>

        {/* Play/Pause */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
            border: "none",
            cursor: "pointer",
            color: "white",
            boxShadow: "0 8px 20px rgba(59,130,246,0.25)",
            transition: "0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(to right, #2563eb, #7c3aed)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(to right, #3b82f6, #8b5cf6)";
              e.currentTarget.style.transform = "scale(1)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.8)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {isPlaying ? (
            <Pause size={24} />
          ) : (
            <Play size={24} style={{ marginLeft: "4px" }} />
          )}
        </button>

        {/* Forward */}
        <button
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "rgba(51, 65, 85, 0.5)",
            color: "#cbd5e1",
            border: "none",
            cursor: "pointer",
            transition: "0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#334155";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(51,65,85,0.5)";
            e.currentTarget.style.color = "#cbd5e1";
            e.currentTarget.style.transform = "scale(1)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.8)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <SkipForward size={20} />
        </button>
      </div>

      {/* Volume Control */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {volume == 0 ? (
            <VolumeOff size={20} color="#94a3b8" />
          ) : (
            <Volume2 size={20} color="#94a3b8" />
          )}

        <Slider
          value={volume}
          onChange={setVolume}
          max={100}
          step={1}
          style={{ flex: 1 }}
        />

        <span
          style={{
            width: "48px",
            textAlign: "right",
            fontSize: "14px",
            color: "#94a3b8",
          }}
        >
          {volume}%
        </span>
      </div>
    </Card>
  );
}
