import { ExampleListContainer } from "./styles";

type ExampleItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
};

function ExampleItem({ icon, title, description, to }: ExampleItemProps) {
  return (
    <ExampleListContainer to={to}>
      {icon}
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </ExampleListContainer>
  );
}

export { ExampleItem };
