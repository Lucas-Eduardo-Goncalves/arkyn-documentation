import { Badge } from "@arkyn/components";
import { Layout, type LucideIcon } from "lucide-react";
import { Children, type ReactNode } from "react";

import { CardContainer } from "./styles";

type CardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  children: ReactNode;
};

function Card({ title, description, icon: Icon, children }: CardProps) {
  const childrenCount = Children.count(children);

  return (
    <CardContainer>
      <header>
        <div className="iconContainer">
          <Icon />
        </div>
        <div className="textContainer">
          <div>
            <strong>{title}</strong>
            <Badge size="md" scheme="secondary">
              {childrenCount} articles
            </Badge>
          </div>
          <p>{description}</p>
        </div>
      </header>

      <ul>{children}</ul>
    </CardContainer>
  );
}

export { Card };
