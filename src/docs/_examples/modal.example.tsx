import { Button, ModalContainer } from "@arkyn/components";
import { useState, type ReactNode } from "react";

type ModalExampleProps = {
  children: ReactNode;
};

function ModalExample({ children }: ModalExampleProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsVisible(true)}>Open Modal</Button>

      <ModalContainer
        isVisible={isVisible}
        makeInvisible={() => setIsVisible(false)}
      >
        {children}
      </ModalContainer>
    </div>
  );
}

export { ModalExample };
