import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MagicCard {
  name: string;
  type: string;
  description: string;
  cost: number;
  power: number;
  health: number;
}

export const CardComponent = (magicCard: MagicCard) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{magicCard.name}</CardTitle>
        <CardDescription>{magicCard.type}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-[0.8rem] font-light">{magicCard.description}</p>
      </CardContent>
      <CardFooter className="text-[0.6rem] text-center justify-center">
        Cost: {magicCard.cost} | Power: {magicCard.power} | Health:{" "}
        {magicCard.health}
      </CardFooter>
    </Card>
  );
};
