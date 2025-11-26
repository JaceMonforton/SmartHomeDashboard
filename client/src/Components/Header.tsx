import React from "react";
import { Home, Settings } from "lucide-react";
import { Select } from "antd";

interface HeaderProps {
  currentRoom: string;
  rooms: string[];
  onRoomChange: (room: string) => void;
  onSettingsClick: () => void;
}

export function Header({
  currentRoom,
  rooms,
  onRoomChange,
  onSettingsClick,
}: HeaderProps) {
  return (
    <header
      style={{
        borderBottom: "1px solid rgba(71, 85, 105, 0.5)",
        background: "rgba(15, 23, 42, 0.5)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 40,
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "16px 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left: Logo + Text */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background:
                  "linear-gradient(to bottom right, #3b82f6, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Home size={20} color="#fff" />
            </div>

            <div>
              <h1 style={{ color: "white", fontSize: "18px", margin: 0 }}>
                Smart Home
              </h1>
              <p
                style={{
                  color: "rgb(148 163 184)",
                  fontSize: "14px",
                  margin: 0,
                }}
              >
                Control Panel
              </p>
            </div>
          </div>

          {/* Right: Room Select + Settings */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Select
              value={currentRoom}
              onChange={onRoomChange}
              style={{
                width: 180,
                background: "#1e293b",
                borderColor: "#334155",
                color: "white",
              }}
              dropdownStyle={{
                background: "whitesmoke",
                color: "white",
                border: "1px solid #334155",
              }}
              popupMatchSelectWidth={180}
            >
              {rooms.map((room) => (
                <Select.Option key={room} value={room}>
                  {room}
                </Select.Option>
              ))}
            </Select>

            <button
              onClick={onSettingsClick}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: "#1e293b",
                color: "#cbd5e1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer",
                transition: "0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#334155";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1e293b";
                e.currentTarget.style.color = "#cbd5e1";
              }}
            >
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
