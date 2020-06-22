export const counterReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
    }
  }