import { Card, Metric, Text } from "@tremor/react";

function Home() {
  return (
    <div className="p-6">
      <Card>
        <Metric>Home</Metric>
        <Text>Welcome to the home page!</Text>
      </Card>
    </div>
  );
}

export default Home;
