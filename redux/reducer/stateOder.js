

const defaultState = {
    stateOder: 'INACTIVE',
    idOder: '',
 
};


const stateOder = (state =defaultState, action) => {
    if (action.type === 'CHANGERSTATE') return {stateOder:'PROCESSING',idOder:action.id};
    // if (action.type === 'END') return 'COMPLETED';
  
    return state;
};

export default stateOder;