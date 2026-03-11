import React, { useState } from "react";

// Components synced from demo-repo-a
import { Button, Input, Badge, Card, Container, Modal, Alert } from "../components/repo-a";

// Utilities synced from demo-repo-b
import { formatCurrency, formatDate, timeAgo, formatCompact } from "../components/repo-b";
import { isEmail } from "../components/repo-b";
import { useDebounce } from "../components/repo-b";

export const App: React.FC = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const debouncedEmail = useDebounce(email, 300);
  const emailValid = debouncedEmail ? isEmail(debouncedEmail) : true;

  const stats = [
    { label: "Revenue", value: formatCurrency(1234567.89) },
    { label: "Users", value: formatCompact(48200) },
    { label: "Updated", value: timeAgo(new Date(Date.now() - 3600000)) },
    { label: "Launch", value: formatDate("2024-01-15", "long") },
  ];

  return (
    <Container maxWidth="lg">
      <header style={{ padding: "2rem 0" }}>
        <h1>Demo App Dashboard</h1>
        <p>
          This app consumes components from{" "}
          <Badge variant="info">demo-repo-a</Badge> and utilities from{" "}
          <Badge variant="success">demo-repo-b</Badge>, synced automatically by
          the Component Sync GitHub App.
        </p>
      </header>

      {showAlert && (
        <Alert
          variant="info"
          title="Components are auto-synced"
          dismissible
          onDismiss={() => setShowAlert(false)}
        >
          Push to demo-repo-a or demo-repo-b and a PR will be created here
          automatically.
        </Alert>
      )}

      <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", margin: "2rem 0" }}>
        {stats.map((stat) => (
          <Card key={stat.label} title={stat.label}>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{stat.value}</p>
          </Card>
        ))}
      </section>

      <Card title="Contact Form" subtitle="Validates email with shared validators">
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 400 }}>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            error={!emailValid ? "Please enter a valid email address" : undefined}
            helperText="We use isEmail() from @demo/shared-utils"
          />
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Submit
            </Button>
            <Button variant="secondary" onClick={() => setEmail("")}>
              Reset
            </Button>
            <Button variant="danger" disabled>
              Delete
            </Button>
          </div>
        </div>
      </Card>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Submission Preview">
        <p>Email: {email || "(empty)"}</p>
        <p>Valid: {emailValid ? "Yes" : "No"}</p>
        <div style={{ marginTop: "1rem" }}>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </div>
      </Modal>
    </Container>
  );
};

export default App;
