import { createMachine } from 'xstate'
const bookingMachines = createMachine(
  {
    id: 'buyplanetickket1204',
    initial: "initial",
    states: {
      initial: {
        on: {
          START: {
            target: "search",
            actions: 'printStart'
          },
        },
      },
      search: {
        entry: 'printEntry',
        exit: 'printExit',
        on: {
          CONTINUE: "passengers",
          CANCEL: "initial",
        },
      },
      tickets: {
        on: {
          FINISH: "initial",
        }
      },
      passengers: {
        on: {
          DONE: "tickets",
          CANCEL: "initial",
        }
      }
    }
  },
  {
    actions: {
      printStart: () =>
        console.log("🧪 ~ printStart:", "printStart")
      ,
      printEntry: () =>
        console.log("🧪 ~ printEntry:", 'printEntry')
      ,
      printExit: () =>
        console.log("🧪 ~ printExit:", 'printExit')
    }
  }
)


export { bookingMachines }