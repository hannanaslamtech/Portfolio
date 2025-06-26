import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
const GithubActivitySection = () => {
  const [total, setTotal] = useState<number | null>(null);

  return (
    <section id="github-activity" className=" bg-background/50">
      <div className="section-container">
        <motion.h2
          className="section-heading text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          GitHub Activity
        </motion.h2>
        <Card className="max-w-7xl mt-4 mx-auto shadow-lg border border-border">
          <CardContent className="p-6 flex flex-col items-center">
            <GitHubCalendar
              username="hannanaslamtech"
              blockSize={16}
              blockMargin={5}
              fontSize={14}
              theme={{
                light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
              hideTotalCount={true}
              hideColorLegend={false}
              transformData={(contributions) => {
                const totalContributions = contributions.reduce(
                  (sum, day) => sum + day.count,
                  0
                );
                setTotal(totalContributions);
                return contributions;
              }}
            />
            <span className="text-muted-foreground text-xs mt-4">
              {total !== null
                ? `Contributions in the last year: ${total}`
                : "Contributions in the last year"}
            </span>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GithubActivitySection;