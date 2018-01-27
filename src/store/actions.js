
export const addStatus = () => {
  return { type : 'ADD_STATUS' }
}


export const deleteAllStatus = () => {
  return { type : 'DELETE_ALL_STATUS' }
}


export const getStatusList = (state) => {
  return {
    'status_list': state.status_list
  };
}