# redux

- ![image](https://github.com/parthmern/redux/assets/125397720/347be028-74db-4b36-89ee-c570875bc857)
- to solve this issue we have redux 

## store, reducer, action, state
- **Store**: The store is the central object in Redux that holds the entire state of your application. It is created using the `createStore` function in Redux or `configureStore` in Redux Toolkit. The store is responsible for allowing access to the state, dispatching actions, and registering listeners. Essentially, it's the object that brings actions and reducers together.
- **Reducer**: A reducer is a pure function that takes the current state and an action as arguments and returns the next state. It determines how the state should change in response to an action. Reducers must be pure functions, meaning they should not produce side effects or modify the arguments passed to them. In Redux Toolkit, reducers can be created using the `createReducer` function or within `createSlice`, which automatically generates action creators and action types alongside the reducer.
- **Action**: An action is a plain JavaScript object that represents an intention to change the state. Actions must have a type property that indicates the `type` of action being performed. They can optionally have a `payload` property that contains the data necessary for the state update. Actions are the only way to trigger a state change in Redux. You dispatch an action to the store, and the store uses reducers to determine how the state should change in response to that action.
- **State**: The state is the data that your application manages. In Redux, the state is typically a single immutable object tree. Each time an action is dispatched, the store calls the reducer with the current state and the action, and the reducer returns a new state. The state is read-only, and the only way to change it is to dispatch an action
