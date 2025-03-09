import { Option } from "../components/Setting";

export function getLabelFromOption(value: string, options: Option[]): string {
  return options.find((opt) => opt.value === value)?.label || value;
}
