import { Row, Col } from "antd";
import { LightingCard } from "../Components/LightingCard";
import { TemperatureCard } from "../Components/TemperatureCaed";
import { QuickActionsCard } from "../Components/QuickActionsCard";
import { MusicCard } from "../Components/MusicCard";

export function KitchenLayout() {
  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={12}>
        <LightingCard />
      </Col>
      <Col xs={24} md={12}>
        <TemperatureCard />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <QuickActionsCard />
      </Col>
      <Col xs={24} md={12} lg={16}>
        <MusicCard />
      </Col>
    </Row>
  );
}
