import type { PropsWithChildren } from "react";
import { InputAreaGroup, InputGroup } from "./input-group";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { useFetcher } from "react-router";
import { cn } from "cn";

export function ConnectForm() {
  const methods = useForm();
  const fetcher = useFetcher();
  async function onSubmit(data: any) {
    fetcher.submit(data, { method: "POST", encType: "application/json" });
  }

  const _styling = {
    container: cn(
      "px-2 py-1 bg-accent-2 hover:bg-accent-1 text-primary-2 rounded-sm col-start-2 w-fit ml-auto",
    ),
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="bg-primary-2/50 backdrop-blur-3xl border border-accent-1/30 rounded-md p-4 flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-4">
            <InputGroup
              name="name"
              options={{
                label: "Your Name",
                register: methods.register,
                options: {
                  required: "Name is required",
                },
                error: methods.formState.errors.name?.message,
                required: true,
              }}
            />
            <InputGroup
              name="date"
              options={{
                register: methods.register,
                label: "Preferred stay dates",
                placeholder: "If you know them",
                optional: true,
              }}
            />
            <InputGroup
              name="email"
              options={{
                label: "Your Email",
                register: methods.register,
                type: "email",
                options: {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                },
                error: methods.formState.errors.email?.message,
                required: true,
              }}
            />
            <InputGroup
              name="phone"
              options={{
                label: "Your Phone Number",
                register: methods.register,
                type: "tel",
                optional: true,
              }}
            />
            <InputAreaGroup
              name="comment"
              options={{
                label: "How can we help?",
                register: methods.register,
                required: true,
                options: {
                  required: "Please tell us how we can help",
                },
                error: methods.formState.errors.comment?.message,
              }}
              styling={{
                container: "col-span-2",
                input: "h-64 text-start",
              }}
            />
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: "none" }}
            />
            <button type="submit" className={_styling.container}>
              Send Email
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
