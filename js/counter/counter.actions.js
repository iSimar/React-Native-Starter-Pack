export const onUpdateCounter = (counter) => {
    return {
        type: 'ON_UPDATE_COUNTER',
        payload: counter
    }
};