export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });
export const reset = () => ({ type: 'RESET' });
export const changeStep = step => ({ type: 'CHANGE_STEP', payload: step });
