import { assign, createMachine, fromPromise } from 'xstate'
import { fetchCountries } from '../Utils/api'

const fillCountries = {
  initial: 'loading',
  states: {
    loading: {
      invoke: {
        id: 'getCountries',
        src: fromPromise(()=>fetchCountries()),
        onDone: {
          target: 'success',
          actions: assign({countries: ({event})=> event.output}),
        },
        onError: {
          target: 'failure',
          actions: assign({error: 'request failed'})
        }
      }
    },
    success: {},
    failure: {
      on: {
        RETRY: {
          target: 'loading',
        }
      }
    }
  }
}

const bookingMachines = createMachine(
  {
    id: 'buyplanetickket1204',
    initial: "initial",
    context: {
      passengers: [],
      selectedCountry: '',
      countries: [],
      error: '',
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
        ...fillCountries,
      },
      tickets: {
        after: {
          5000: {
            target: 'initial',
            actions: 'cleanContext',
          }
        },
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