import { assign, createMachine } from 'xstate'
const bookingMachines = createMachine(
  {
    id: 'buyplanetickket1204',
    initial: "initial",
    context: {
      passengers: [],
      selectedCountry: '',
    },
    states: {
      initial: {
        on: {
          START: {
            target: "search",
          },
        },
      },
      search: {
        on: {
          CONTINUE: {
            target: "passengers",
            actions: assign({
              selectedCountry: ({ event }) => event.selectedCountry
            })

          },
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
          CANCEL: {
            target: "initial",
            actions: "cleanContext",
          },
          ADD: {
            target: 'passengers',
            actions: assign(
              ({ context, event }) => {
                return {
                  passengers: [...context.passengers, event.newPassenger]
                }
              }
            )
          }
        }
      }
    }
  },
  {
    actions: {
      cleanContext: assign({
        selectedCountry: "",
        passengers: [],
      }),
    }
  }
)


export { bookingMachines }