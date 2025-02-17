import { Option } from "../components/Combobox";

export function getLabelFromOption(value: string, options: Option[]): string {
  return options.find((opt) => opt.value === value)?.label || value;
}
