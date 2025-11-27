import React from "react";
import { Coffee, Tv, Wind, Droplets } from "lucide-react";
import { Card } from "antd";

export function QuickActionsCard() {
  const actions = [
    {
      icon: Coffee,
      label: "Coffee Maker",
      gradient: "linear-gradient(to bottom right, #f59e0b, #f97316)",
    },
    {
      icon: Tv,
      label: "TV",
      gradient: "linear-gradient(to bottom right, #3b82f6, #6366f1)",
    },
    {
      icon: Wind,
      label: "AC",
      gradient: "linear-gradient(to bottom right, #06b6d4, #3b82f6)",
    },
    {
      icon: Droplets,
      label: "Humidifier",
      gradient: "linear-gradient(to bottom right, #14b8a6, #10b981)",
    },
  ];

  return (
    <Card
      bordered={false}
      style={{
        background: "linear-gradient(to bottom right, #1e293b, #0f172a)",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid rgba(51,65,85,0.5)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        height: "100%",
      }}
    >
      <h3 style={{ color: "white", marginBottom: "24px" }}>Quick Actions</h3>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "12px",
        }}
      >
        {actions.map((action, index) => (
          <button
            key={index}
            style={{
              position: "relative",
              padding: "16px",
              borderRadius: "12px",
              background: "rgba(30,41,59,0.5)",
              border: "1px solid rgba(51,65,85,0.3)",
              cursor: "pointer",
              transition: "0.2s ease",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.border = "1px solid rgba(71,85,105,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.border = "1px solid rgba(51,65,85,0.3)";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "scale(0.8)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {/* Icon Gradient Box */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: action.gradient,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 12px auto",
                transition: "0.2s",
              }}
              className="quick-action-icon"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 6px 12px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <action.icon size={24} color="white" />
            </div>

            <p style={{ color: "#cbd5e1", fontSize: "14px", margin: 0 }}>
              {action.label}
            </p>
          </button>
        ))}
      </div>
    </Card>
  );
}
