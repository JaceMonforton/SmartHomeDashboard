import { Row, Col } from "antd";
import { MusicCard } from "../Components/MusicCard";
import { TemperatureCard } from "../Components/TemperatureCaed";
import { LightingCard } from "../Components/LightingCard";
import { QuickActionsCard } from "../Components/QuickActionsCard";
import { SecurityCard } from "../Components/SecurityCard";

export function LivingRoomLayout() {
  return (
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
  );
}
