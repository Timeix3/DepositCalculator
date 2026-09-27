import type { DepositInput } from "../types";
import { NumberInput } from "./NumberInput";

interface DepositFormProps {
  value: DepositInput;
  onChange: (value: DepositInput) => void;
  onSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
}

export function DepositForm(props: DepositFormProps) {
  return (
    <form onSubmit={props.onSubmit} >

      <label>Сумма вклада</label>
      <NumberInput value={props.value.amount} min={1} step={1} onChange={(value) => props.onChange({ ...props.value, amount: value })} />
      <span>₽</span>

      <label>Срок (месяцы)</label>
      <NumberInput value={props.value.months} min={1} step={1} onChange={(value) => props.onChange({...props.value, months: value})} />

      <label>Годовая ставка</label>
      <NumberInput value={props.value.rate} min={1} step={0.1} onChange={(value) => props.onChange({...props.value, rate: value})} />
      <span>%</span>

      <button type="submit" disabled={props.isSubmitting}>
        {props.isSubmitting ? "Рассчитываем..." : "Рассчитать"}
      </button>
    </form>
  );
}