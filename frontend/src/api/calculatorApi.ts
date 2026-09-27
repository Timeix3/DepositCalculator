import type { DepositInput, DepositResult } from "../types";

export async function calculateDeposit(data: DepositInput): Promise<DepositResult> {
  const response = await fetch("/api/calculate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Не удалось выполнить расчет");
  }

  return (await response.json()) as DepositResult;
}