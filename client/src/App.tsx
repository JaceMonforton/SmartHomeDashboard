import React, { useState } from "react";
import { Layout, Row, Col, Modal } from "antd";
import { Header } from "./Components/Header";
import { MusicCard } from "./Components/MusicCard";
import { TemperatureCard } from "./Components/TemperatureCaed";
import { LightingCard } from "./Components/LightingCard";
import { SecurityCard } from "./Components/SecurityCard";
import { QuickActionsCard } from "./Components/QuickActionsCard";

const { Content } = Layout;

export default function App() {
  const [currentRoom, setCurrentRoom] = useState("Living Room");
  const [showSettings, setShowSettings] = useState(false);

  const rooms = [
    "Living Room",
    "Bedroom",
    "Kitchen",
    "Bathroom",
    "Office",
    "Garage",
  ];

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
        onRoomChange={setCurrentRoom}
        onSettingsClick={() => setShowSettings(true)}
      />

      

      {/* MAIN CONTENT */}
    <Content
      style={{
        width: "100%",
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0",           // remove default white padding
        background: "transparent", // remove white background
      }}
    >
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12} lg={16}>
            <MusicCard />
          </Col>

          <Col xs={24} md={12} lg={8}>
            <TemperatureCard />
          </Col>

          <Col xs={24} md={12} lg={8}>
            <LightingCard />
          </Col>

          <Col xs={24} md={12} lg={8}>
            <QuickActionsCard />
          </Col>

          <Col xs={24} md={12} lg={8}>
            <SecurityCard />
          </Col>
        </Row>

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
          Feature Request
        </div>
      </Content>

      {/* SETTINGS MODAL */}
    </Layout>
  );
}
