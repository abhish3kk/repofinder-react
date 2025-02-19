import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { Check, ChevronDown, X } from "lucide-react";
import React, { useEffect, useState } from "react";

export interface Option {
  label: string;
  value: string;
}

export interface SettingsProps {
  options: Option[];
  label: string;
  multiple: boolean;
  selected: string[] | string;
  onSelect: (value: Option | Option[] | null) => void;
}

const SettingsDropdown: React.FC<{ setting: SettingsProps }> = ({
  setting,
}) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Option[] | Option | null>();

  useEffect(() => {
    if (Array.isArray(setting.selected)) {
      let options: Option[] = [];
      setting.selected.forEach((item: string) => {
        const option: Option = setting.options.find(
          (opt) => opt.value === item,
        ) || {
          label: item,
          value: item,
        };
        options = [...options, option];
      });
      setSelected(options);
    } else {
      const option: Option = setting.options.find(
        (opt) => opt.value === setting.selected,
      ) || {
        label: setting.selected,
        value: setting.selected,
      };
      setSelected(option);
    }
  }, [setting]);

  const filteredSettingOptions =
    query === ""
      ? setting.options
      : setting.options.filter((setting) => {
          return setting.label.toLowerCase().includes(query.toLowerCase());
        });

  const handleOnSelect = (value: Option[] | Option) => {
    setSelected(value);
    setting.onSelect(value);
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-4">
      <div className="flex-1 text-center p-2">
        <Combobox
          value={selected ?? (setting.multiple ? [] : null)}
          multiple={setting.multiple}
          onChange={(value: Option | Option[]) =>
            value ? handleOnSelect(value) : ""
          }
          onClose={() => setQuery("")}
        >
          <div className="relative">
            <ComboboxInput
              className={clsx(
                "w-full rounded-lg py-1.5 pr-8 pl-3 text-sm/6 dark:bg-blue-100 text-gray-600 dark:text-gray-400 dark:bg-gray-900  border border-gray-200 dark:border-gray-800",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
              )}
              autoComplete="false"
              placeholder={setting.label}
              displayValue={() => ""}
              onChange={(event) => setQuery(event.target.value)}
            />
            <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
              <ChevronDown className="size-4 fill-gray-800 dark:fill-white group-data-[hover]:fill-blue dark:group-data-[hover]:fill-white" />
            </ComboboxButton>
          </div>
          <ComboboxOptions
            anchor="bottom"
            transition
            className={clsx(
              "w-[var(--input-width)] rounded-xl border border-gray-200 dark:border-gray-800 text-gray-800 bg-white dark:bg-gray-900 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible !max-h-[180px]",
              "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
            )}
          >
            {filteredSettingOptions.map((option) => (
              <ComboboxOption
                key={option.value}
                value={option}
                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-blue-100  dark:data-[focus]:bg-white/10"
              >
                <Check className="invisible size-4 dark:fill-white group-data-[selected]:visible" />
                <div className="text-sm/6 text-gray-600 dark:text-gray-400">
                  {option.label}
                </div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>
      </div>
      <div className="flex-1 p-2 max-h-[120px] overflow-y-auto">
        {selected ? (
          Array.isArray(selected) ? (
            selected.map((item: Option) => (
              <span
                key={item.value}
                className="inline-flex items-center rounded-md bg-blue-100 text-blue-800 px-2 py-1 m-1 text-xs font-medium dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
              >
                {item.label}
                <button
                  type="button"
                  className="ml-1 text-gray-500 hover:text-gray-700 cursor-pointer"
                  onClick={() => {
                    handleOnSelect(
                      selected.filter(
                        (option: Option) => option.value !== item.value,
                      ),
                    );
                  }}
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))
          ) : (
            <span
              key={selected.value}
              className="inline-flex items-center rounded-md bg-blue-100 text-blue-800 px-2 py-1 m-1 text-xs font-medium dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
            >
              {selected.label}
              <button
                type="button"
                className="ml-1 text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() => {
                  setSelected(null);
                  setting.onSelect(null);
                }}
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SettingsDropdown;
