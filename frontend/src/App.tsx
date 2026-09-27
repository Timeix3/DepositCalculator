import { useState } from "react";
import { calculateDeposit } from "./api/calculatorApi";
import type { DepositInput, DepositResult } from "./types";
import { DepositForm } from "./components/DepositForm";
import { ResultPanel } from "./components/ResultPanel";

export default function App() {
  const [input, setInput] = useState<DepositInput>({ amount: 1000, months: 1, rate: 1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ value: DepositResult; amount: number } | null>(null);

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setResult(null);

    try {
      const submittedInput = { ...input };
      const calculation = await calculateDeposit(submittedInput);
      setResult({ value: calculation, amount: submittedInput.amount });
    } catch (error) {
      setError(error instanceof Error ? error.message : "Не удалось выполнить расчет");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main>
      <DepositForm value={input} onChange={setInput} onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      {error && (
        <p role="alert">
          {error.split(";").map((message, index) => (
            <span key={`${index}-${message}`}>{message.trim()}</span>
          ))}
        </p>
      )}
      {result && <ResultPanel value={result.value} amount={result.amount} />}
    </main>
  )
}
