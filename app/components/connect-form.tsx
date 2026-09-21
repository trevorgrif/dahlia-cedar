import { InputGroup } from "./input-group";

export function ConnectForm() {
  return (
    <div className="bg-white p-4 flex flex-col gap-8">
      <div className="grid grid-cols-2 gap-4">
        <InputGroup name="name" options={{ label: "Your Name" }} />
        <InputGroup name="email" options={{ label: "Email Address" }} />
        <InputGroup
          name="date"
          options={{
            label: "Preferred stay dates",
            placeholder: "If you know them",
          }}
          styling={{ container: "col-span-2" }}
        />
        <InputGroup
          name="comment"
          options={{ label: "How can we help?" }}
          styling={{ container: "col-span-2" }}
        />
      </div>
    </div>
  );
}
