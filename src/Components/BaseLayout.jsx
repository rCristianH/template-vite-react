import { useMachine } from "@xstate/react";
import { bookingMachines } from "../Machines/BookingMachines";

const BaseLayout = () => {
  const [state,send] = useMachine(bookingMachines)
  console.log("🧪 ~ BaseLayout ~ state:", state)

  return (
    <div>
      Hello
    </div>
  );
}

export { BaseLayout }
