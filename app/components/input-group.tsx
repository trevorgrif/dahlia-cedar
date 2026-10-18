import { cn } from "cn";
import type { UseFormRegister } from "react-hook-form";

interface InputGroupOptions {
  label?: string;
  placeholder?: string;
  register?: UseFormRegister<any>;
  type?: string;
}

interface InputGroupStyling {
  container?: string;
  label?: string;
  input?: string;
}

export function InputGroup({
  name,
  options: { label, placeholder, type, register } = {},
  styling = {},
}: {
  name: string;
  label?: string;
  styling?: InputGroupStyling;
  options?: InputGroupOptions;
}) {
  const _styling = {
    container: cn("flex flex-col gap-2", styling.container),
    label: cn("font-medium text-white", styling.label),
    input: cn(
      "outline outline-accent-2/50 p-2 placeholder:text-neutral-400 text-white rounded bg-accent-1/25",
      styling.input,
    ),
  };

  return (
    <div className={_styling.container}>
      <label className={_styling.label} htmlFor={name}>
        {label}
      </label>
      <input
        {...(register !== undefined ? register(name) : {})}
        className={_styling.input}
        name={name}
        id={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export function InputAreaGroup({
  name,
  options: { label, placeholder, register, type } = {},
  styling = {},
}: {
  name: string;
  label?: string;
  styling?: InputGroupStyling;
  options?: InputGroupOptions;
}) {
  const _styling = {
    container: cn("flex flex-col gap-2", styling.container),
    label: cn("font-medium text-white", styling.label),
    input: cn(
      "outline outline-accent-2/50 p-2 placeholder:text-neutral-400 text-white rounded bg-accent-1/25",
      styling.input,
    ),
  };

  return (
    <div className={_styling.container}>
      <label className={_styling.label} htmlFor={name}>
        {label}
      </label>
      <textarea
        {...(register !== undefined ? register(name) : {})}
        className={_styling.input}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
}
