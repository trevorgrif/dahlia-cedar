import { cn } from "cn";

interface InputGroupOptions {
  label?: string;
  placeholder?: string;
}

interface InputGroupStyling {
  container?: string;
  label?: string;
  input?: string;
}

export function InputGroup({
  name,
  options: { label, placeholder } = {},
  styling = {},
}: {
  name: string;
  label?: string;
  styling?: InputGroupStyling;
  options?: InputGroupOptions;
}) {
  const _styling = {
    container: cn("flex flex-col gap-2", styling.container),
    label: cn("font-medium text-black", styling.label),
    input: cn(
      "outline outline-accent-2/70 p-2 placeholder:text-neutral-400",
      styling.input,
    ),
  };

  return (
    <div className={_styling.container}>
      <label className={_styling.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={_styling.input}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
}
