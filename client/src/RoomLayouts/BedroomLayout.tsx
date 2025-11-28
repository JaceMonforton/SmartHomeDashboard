import { Row, Col } from "antd";
import { LightingCard } from "../Components/LightingCard";
import { TemperatureCard } from "../Components/TemperatureCaed";

export function BedroomLayout() {
  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={12}>
        <LightingCard />
      </Col>
      <Col xs={24} md={12}>
        <TemperatureCard />
      </Col>
    </Row>
  );
}
