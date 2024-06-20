import { Card, Metric, Text } from "@tremor/react";
import AlertButton from "../components/AlertButton";

function Home() {
  return (
    <div className="p-6">
      <Card>
        <Metric>Home</Metric>
        <Text>Welcome to the home page!</Text>
        <AlertButton />
      </Card>
    </div>
  );
}

export default Home;
