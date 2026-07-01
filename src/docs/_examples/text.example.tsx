type TextExampleProps = {
  content: string;
};

function TextExample({ content }: TextExampleProps) {
  return (
    <div style={{ padding: "1rem", color: "var(--text-body)" }}>
      {content}
    </div>
  );
}

export {TextExample}