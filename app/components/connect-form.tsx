import type { PropsWithChildren } from "react";
import { InputAreaGroup, InputGroup } from "./input-group";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { useFetcher } from "react-router";

export function ConnectForm() {
  const methods = useForm();
  const fetcher = useFetcher();
  async function onSubmit(data: any) {
    fetcher.submit(data, { method: "POST", encType: "application/json" });
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="bg-primary-2 rounded-md p-4 flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-4">
            <InputGroup
              name="name"
              options={{ label: "Your Name", register: methods.register }}
            />
            <InputGroup
              name="date"
              options={{
                register: methods.register,
                label: "Preferred stay dates",
                placeholder: "If you know them",
              }}
            />
            <InputGroup
              name="email"
              options={{
                label: "Your Email",
                register: methods.register,
                type: "email",
              }}
            />
            <InputAreaGroup
              name="comment"
              options={{
                label: "How can we help?",
                register: methods.register,
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
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

function SubmitButton() {
  const [date, name, comment] = useWatch({ name: ["date", "name", "comment"] });

  return (
    <SendEmail
      target="stay@dahliaandcedar.com"
      subject="Garden Apartment Inquiry"
      body={`Name: ${name} \nDate: ${date}\n\n${comment}`}
    >
      Submit
    </SendEmail>
  );
}

function SendEmail({
  target,
  children,
  subject,
  body,
}: PropsWithChildren<{
  target: string;
  subject: string;
  body: string;
}>) {
  const href = `mailto:${target}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <a
      className="text-white mr-auto bg-accent-1 px-2 py-1 rounded-md col-span-2"
      href={href}
    >
      {children}
    </a>
  );
}
