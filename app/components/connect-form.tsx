import type { PropsWithChildren } from "react";
import { InputGroup } from "./input-group";

export function ConnectForm() {
  return (
    <div className="bg-white p-4 flex flex-col gap-8">
      <div className="grid grid-cols-2 gap-4">
        <InputGroup name="name" options={{ label: "Your Name" }} />
        <InputGroup
          name="date"
          options={{
            label: "Preferred stay dates",
            placeholder: "If you know them",
          }}
        />
        <InputGroup
          name="comment"
          options={{ label: "How can we help?" }}
          styling={{ container: "col-span-2" }}
        />
        <SendEmail
          target="brenda.lakeside@gmail.com"
          subject="Garden Apartment Inquiry"
          body="Content of the body is coming soon"
        >
          Submit
        </SendEmail>
      </div>
    </div>
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
      className="text-white ml-auto bg-accent-1 px-2 py-1 rounded-md col-span-2"
      href={href}
    >
      {children}
    </a>
  );
}
