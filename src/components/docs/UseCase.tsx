import CodeBlock from "./CodeBlock";

interface UseCaseProps {
  title: string;
  children: string;
}

export default function UseCase({ title, children }: UseCaseProps) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-primary-600">{title}</h3>
      <div className="mt-3">
        <CodeBlock lang="BASH">{children}</CodeBlock>
      </div>
    </div>
  );
}
