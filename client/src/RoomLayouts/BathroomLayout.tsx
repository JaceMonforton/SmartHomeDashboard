import { Row, Col } from "antd";
import { LightingCard } from "../Components/LightingCard";
import { TemperatureCard } from "../Components/TemperatureCaed";
import { MusicCard } from "../Components/MusicCard";

export function BathroomLayout() {
  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={12}>
        <TemperatureCard />
      </Col>
      <Col xs={24} md={12}>
        <LightingCard />
      </Col>
      <Col xs={24} md={12} lg={24}>
        <MusicCard />
      </Col>
    </Row>
  );
}
