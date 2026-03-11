export const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="card">
    <h2>{title}</h2>
    <div>{children}</div>
  </div>
);
