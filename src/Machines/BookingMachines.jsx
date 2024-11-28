import { createMachine } from 'xstate'
const bookingMachines = createMachine({
  id: 'buyplanetickket1204',
  initial: "initial",
  states: {
    initial: {
      on: {
        START: 'search',
      },
    },
    search: {
      on: {
        CONTINUE: "passengers",
        CANCEL: "initial",
      }
    },
    tickets: {
      on: {
        DONE: "tickets",
        CANCEL: "initial",
      }
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: "initial",
      }
    }
  }
})

export { bookingMachines }