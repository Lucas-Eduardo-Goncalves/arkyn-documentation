import {
  Button,
  ModalContainer,
  ModalFooter,
  ModalHeader,
} from "@arkyn/components";
import { useState } from "react";

function BasicUsage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="noContent ">
        <Button onClick={() => setIsOpen(true)}>Abrir Modal Básico</Button>
      </div>

      <ModalContainer isVisible={isOpen} makeInvisible={() => setIsOpen(false)}>
        <ModalHeader>Modal de exemplo</ModalHeader>

        <p style={{ padding: "16px", width: "400px" }}>
          Conteúdo do modal vai aqui.
        </p>

        <ModalFooter>
          <Button onClick={() => setIsOpen(false)}>Fechar</Button>
        </ModalFooter>
      </ModalContainer>
    </>
  );
}

export { BasicUsage };
