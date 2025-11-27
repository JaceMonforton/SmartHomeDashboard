import { useState } from "react";
import { Card, Switch } from "antd";
import { Lock, Unlock } from "lucide-react";

export function SecurityCard() {
  const [doors, setDoors] = useState([
    { id: 1, name: "Front Door", locked: true },
    { id: 2, name: "Back Door", locked: true },
    { id: 3, name: "Garage", locked: false },
  ]);

  const toggleDoor = (id: number) => {
    setDoors((prev) =>
      prev.map((door) =>
        door.id === id ? { ...door, locked: !door.locked } : door
      )
    );
  };

  const lockedCount = doors.filter((d) => d.locked).length;

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
            background: "rgba(74, 222, 128, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Lock style={{ width: 24, height: 24, color: "#4ade80" }} />
        </div>

        <div>
          <h3 style={{ color: "white", margin: 0 }}>Security</h3>
          <p style={{ color: "#94a3b8", margin: 0, fontSize: 14 }}>
            {lockedCount} of {doors.length} locked
          </p>
        </div>
      </div>

      {/* Door Controls */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {doors.map((door) => {
          const isLocked = door.locked;

          return (
            <div
              key={door.id}
              style={{
                padding: 16,
                borderRadius: 12,
                transition: "all 0.25s",
                border: `1px solid ${
                  isLocked ? "rgba(74,222,128,0.3)" : "rgba(248,113,113,0.3)"
                }`,
                background: isLocked
                  ? "rgba(74,222,128,0.1)"
                  : "rgba(248,113,113,0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {isLocked ? (
                    <Lock
                      style={{ width: 20, height: 20, color: "#4ade80" }}
                    />
                  ) : (
                    <Unlock
                      style={{ width: 20, height: 20, color: "#f87171" }}
                    />
                  )}

                  <span style={{ color: "white", fontSize: 15 }}>
                    {door.name}
                  </span>
                </div>

                <Switch
                  checked={isLocked}
                  onChange={() => toggleDoor(door.id)}
                />
              </div>

              <p
                style={{
                  marginLeft: 32,
                  marginBottom: 0,
                  color: isLocked ? "#4ade80" : "#f87171",
                  fontSize: 14,
                }}
              >
                {isLocked ? "Secured" : "Unlocked"}
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
