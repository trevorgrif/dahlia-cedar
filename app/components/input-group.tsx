import { cn } from "cn";
import type {
  FieldError,
  FieldErrorsImpl,
  Merge,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface InputGroupOptions {
  label?: string;
  placeholder?: string;
  register?: UseFormRegister<any>;
  type?: string;
  required?: boolean;
  optional?: boolean;
  options?: RegisterOptions;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

interface InputGroupStyling {
  container?: string;
  label?: string;
  input?: string;
}

export function InputGroup({
  name,
  options: {
    label,
    placeholder,
    type,
    register,
    required = false,
    optional = false,
    error,
    options,
  } = {},
  styling = {},
}: {
  name: string;
  label?: string;
  styling?: InputGroupStyling;
  options?: InputGroupOptions;
}) {
  const _styling = {
    container: cn("flex flex-col gap-2", styling.container),
    label: cn(
      "font-medium text-white flex gap-1 items-baseline",
      styling.label,
    ),
    input: cn(
      "outline outline-accent-2/30 p-2 placeholder:text-neutral-400 text-white rounded bg-primary-2",
      styling.input,
    ),
    required: cn(
      { hidden: !required },
      { "text-sm italic font-normal": required },
    ),
    optional: cn(
      { hidden: !optional },
      { "text-sm italic font-normal": optional },
    ),
    error: cn({ hidden: !error }, "text-red-400"),
  };

  console.log(error);

  return (
    <div className={_styling.container}>
      <label className={_styling.label} htmlFor={name}>
        {label}
        <span className={_styling.required}>*</span>
        <span className={_styling.optional}>Optional</span>
      </label>
      <input
        {...(register !== undefined ? register(name, options) : {})}
        className={_styling.input}
        name={name}
        id={name}
        placeholder={placeholder}
        type={type}
      />
      <p className={_styling.error}>{String(error)}</p>
    </div>
  );
}

export function InputAreaGroup({
  name,
  options: {
    label,
    placeholder,
    register,
    type,
    required = false,
    optional = false,
    options,
    error,
  } = {},
  styling = {},
}: {
  name: string;
  label?: string;
  styling?: InputGroupStyling;
  options?: InputGroupOptions;
}) {
  const _styling = {
    container: cn("flex flex-col gap-2", styling.container),
    label: cn(
      "font-medium text-white flex gap-1 items-baseline",
      styling.label,
    ),
    input: cn(
      "outline outline-accent-2/30 p-2 placeholder:text-neutral-400 text-white rounded bg-primary-2",
      styling.input,
    ),
    required: cn(
      { hidden: !required },
      { "text-sm italic font-normal": required },
    ),
    optional: cn(
      { hidden: !optional },
      { "text-sm italic font-normal": optional },
    ),
    error: cn({ hidden: !error }, "text-red-400"),
  };

  return (
    <div className={_styling.container}>
      <label className={_styling.label} htmlFor={name}>
        {label}
        <span className={_styling.required}>*</span>
        <span className={_styling.optional}>Optional</span>
      </label>
      <textarea
        {...(register !== undefined ? register(name, options) : {})}
        className={_styling.input}
        name={name}
        id={name}
        placeholder={placeholder}
      />
      <p className={_styling.error}>{String(error)}</p>
    </div>
  );
}
