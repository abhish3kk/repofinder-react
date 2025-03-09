import { render } from "@testing-library/react";
import Setting, { SettingsProps } from "../../components/Setting";

describe("<Setting />", () => {
  test("should render the component", () => {
    const setting: SettingsProps = {
      options: [{ value: "value1", label: "labe1=l1" }],
      label: "Setting Dropdown",
      multiple: false,
      selected: "value1",
      onSelect: () => {},
    };
    render(<Setting setting={setting} />);
  });
});
