import { useState } from "react";
import { Card } from "antd";
import { Thermometer, Plus, Minus } from "lucide-react";

import { HoldButton } from "./HoldButton";

export function TemperatureCard() {
  const [temperature, setTemperature] = useState(22);
  const targetTemp = 24;

  const increaseTemp = () => setTemperature((prev) => Math.min(prev + 1, 30));
  const decreaseTemp = () => setTemperature((prev) => Math.max(prev - 1, 0));

  return (
    <Card
      style={{
        background: "linear-gradient(to bottom right, #1e293b, #0f172a)",
        borderRadius: 16,
        padding: 24,
        border: "1px solid rgba(51,65,85,0.5)",
        height: "100%",
        boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
      }}
      bodyStyle={{ padding: 0 }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 24,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: "rgba(249,115,22,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Thermometer style={{ width: 24, height: 24, color: "#fb923c" }} />
        </div>

        <div>
          <h3 id="temp" style={{ color: "white", margin: 0 }}>Temperature</h3>
          <p style={{ color: "#94a3b8", fontSize: 14, margin: 0 }}>
            Control Panel
          </p>
        </div>
      </div>

      {/* Temperature Gauge */}
      <div
        style={{
          position: "relative",
          width: 192,
          height: 192,
          margin: "0 auto 24px auto",
        }}
      >
        {/* Outer circle */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background:
              "linear-gradient(to bottom right, rgba(249,115,22,0.2), rgba(239,68,68,0.2))",
            border: "4px solid rgba(51,65,85,0.5)",
          }}
        />

        {/* Inner circle */}
        <div
          style={{
            position: "absolute",
            inset: 16,
            borderRadius: "50%",
            background: "rgba(30,41,59,0.8)",
            backdropFilter: "blur(4px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 48, color: "white", marginBottom: 4 }}>
            {temperature}°
          </div>
          <div style={{ fontSize: 14, color: "#94a3b8" }}>Current</div>
        </div>

        {/* Arc */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            transform: "rotate(-90deg)",
          }}
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="tempGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>

          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#tempGradient)"
            strokeWidth="4"
            strokeDasharray={`${(temperature / 30) * 283} 283`}
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        {/* Decrease */}
        <HoldButton
          onHold={decreaseTemp}
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "rgba(51,65,85,0.5)",
            color: "#cbd5e1",
            border: "none",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.background = "rgba(51,65,85,0.7)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}

          onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.background = "rgba(51,65,85,0.5)";
            e.currentTarget.style.transform = "scale(1.00)";
          }}
        >
          <Minus style={{ width: 20, height: 20 }} />
        </HoldButton>


        {/* Target Temp */}
        <div style={{ textAlign: "center" }}>
          <div style={{ color: "#94a3b8", fontSize: 14 }}>Target</div>
          <div style={{ color: "white", fontSize: 20 }}>{targetTemp}°C</div>
        </div>

        {/* Increase */}
        <HoldButton
          onHold={increaseTemp}
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "linear-gradient(to right, #f97316, #ef4444)",
            color: "white",
            border: "none",
            cursor: "pointer",
            transition: "0.2s",
            boxShadow: "0 0 12px rgba(249,115,22,0.4)",
          }}
          onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.background =
              "linear-gradient(to right, #ea580c, #dc2626)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}

          onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.background =
              "linear-gradient(to right, #f97316, #ef4444)";
            e.currentTarget.style.transform = "scale(1.00)";
          }}
        >
          <Plus style={{ width: 20, height: 20 }} />
        </HoldButton>

      </div>
    </Card>
  );
}
