interface NumberInputProps {
  value: number;
  min: number;
  step: number;
  onChange: (value: number) => void;
}

export function NumberInput(props: NumberInputProps) {

  return (
    <input
      type="number"
      value={props.value}
      min={props.min}
      step={props.step}
      onChange={(e) => props.onChange(e.target.valueAsNumber)}
    />
  );
}