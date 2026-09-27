import type { DepositResult } from "../types";

interface ResultPanelProps {
  value: DepositResult;
  amount: number;
}

export function ResultPanel(props: ResultPanelProps) {
  return (
    <div>
      <p>Начальная сумма: {props.amount} ₽</p>
      <p>Итоговая сумма: {props.value.total} ₽</p>
      <p>Доход: {props.value.profit} ₽</p>
    </div>
  );
}