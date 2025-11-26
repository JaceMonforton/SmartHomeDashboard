import React, { useState } from "react";
import { Lightbulb, Sun } from "lucide-react";
import { Switch, Slider, Card } from "antd";

export function LightingCard() {
  const [lights, setLights] = useState([
    { id: 1, name: "Ceiling Light", on: true },
    { id: 2, name: "Table Lamp", on: false },
    { id: 3, name: "Wall Sconce", on: true },
  ]);

  const [brightness, setBrightness] = useState(75);

  const toggleLight = (id: number) => {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, on: !light.on } : light
      )
    );
  };

  const onCount = lights.filter((l) => l.on).length;

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
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "rgba(234, 179, 8, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Lightbulb size={24} color="#facc15" />
        </div>

        <div>
          <h3 style={{ color: "white", margin: 0 }}>Lighting</h3>
          <p style={{ color: "rgb(148 163 184)", margin: 0, fontSize: "14px" }}>
            {onCount} of {lights.length} active
          </p>
        </div>
      </div>

      {/* Light Switch List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
        {lights.map((light) => (
          <div
            key={light.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px",
              borderRadius: "12px",
              background: "rgba(30, 41, 59, 0.5)",
              border: "1px solid rgba(51, 65, 85, 0.3)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: light.on ? "#facc15" : "#475569",
                  transition: "background 0.3s",
                  boxShadow: light.on ? "0 0 6px #facc15" : "none",
                }}
              ></div>

              <span style={{ color: "#cbd5e1" }}>{light.name}</span>
            </div>

            <Switch
              checked={light.on}
              onChange={() => toggleLight(light.id)}
              style={{ backgroundColor: light.on ? "#ca8a04" : "#334155" }}
            />
          </div>
        ))}
      </div>

      {/* Brightness Control */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#cbd5e1" }}>
            <Sun size={16} />
            <span style={{ fontSize: "14px" }}>Brightness</span>
          </div>

          <span style={{ color: "#94a3b8", fontSize: "14px" }}>
            {brightness}%
          </span>
        </div>

        <Slider
          value={brightness}
          onChange={(value) => setBrightness(value)}
          max={100}
          step={1}
        />
      </div>
    </Card>
  );
}
