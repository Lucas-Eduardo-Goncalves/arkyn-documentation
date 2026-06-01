import { Button, DrawerContainer, DrawerHeader } from "@arkyn/components";
import { useState, type ReactNode } from "react";

type DrawerExampleProps = {
  title: string;
  headerChildren?: ReactNode;
  children: ReactNode;
  orientation?: "left" | "right";
};

function DrawerExample({
  title,
  headerChildren,
  children,
  orientation,
}: DrawerExampleProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>

      <DrawerContainer
        isVisible={isVisible}
        makeInvisible={() => setIsVisible(false)}
        orientation={orientation}
      >
        <DrawerHeader>{headerChildren ? headerChildren : title}</DrawerHeader>
        {children}
      </DrawerContainer>
    </div>
  );
}

export { DrawerExample };
