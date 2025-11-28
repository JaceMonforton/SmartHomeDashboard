import { useState } from "react";
import { Layout } from "antd";
import { Header } from "./Components/Header";

import { LivingRoomLayout } from "./RoomLayouts/LivingRoomLayout";
import { BedroomLayout } from "./RoomLayouts/BedroomLayout";
import { KitchenLayout } from "./RoomLayouts/KitchenLayout";
import { BathroomLayout } from "./RoomLayouts/BathroomLayout";

const { Content } = Layout;

export default function App() {
  type RoomName = "Living Room" | "Bedroom" | "Kitchen" | "Bathroom";

const rooms: RoomName[] = [
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Bathroom",

];

const roomLayouts: Record<RoomName, React.ReactNode> = {
  "Living Room": <LivingRoomLayout />,
  "Bedroom": <BedroomLayout />,
  "Kitchen": <KitchenLayout />,
  "Bathroom": <BathroomLayout />,
};

const [currentRoom, setCurrentRoom] = useState<RoomName>("Living Room");


document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.background = "linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)";
document.documentElement.style.height = "100%";
document.body.style.height = "100%";


  return (
    <Layout
      style={{
        background:
          "linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)",
      }}
    >
      {/* HEADER */}
      <Header
        currentRoom={currentRoom}
        rooms={rooms}
        onRoomChange={(room: string) => setCurrentRoom(room as RoomName)}
        onSettingsClick={() => console.log("Clicked")}
      />

      

      {/* MAIN CONTENT */}
    <Content
      style={{
        width: "100%",
        margin: "0 auto",
        marginTop: 16,
        padding: "0",           // remove default white padding
        background: "transparent", // remove white background
      }}
    >
        {roomLayouts[currentRoom]}
        
        <div
          style={{
            marginTop: 32,
            textAlign: "center",
            color: "#94a3b8",
            fontSize: 14,
            transition: "0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#e2e8f0")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
        >
        </div>
      </Content>

      {/* SETTINGS MODAL */}
    </Layout>
  );
}
