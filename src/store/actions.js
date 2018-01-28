import { types } from './actionConstants';

export const addStatus = () => {
  return { type : types.ADD_STATUS }
}
export const deleteStatus = (sID) => {
  return { type : types.DELETE_STATUS,  sID }
}
export const deleteAllStatus = () => {
  return { type : types.DELETE_ALL_STATUS }
}
export const editStatus = (sID) => {
  return { type : types.EDIT_STATUS,  sID }
}
export const saveStatus = (sID, title) => {
  return { type : types.SAVE_STATUS,  sID,  title }
}
export const cancelStatus = (sID) => {
  return { type : types.CANCEL_STATUS,  sID }
}



export const addCard = (sID) => {
  return { type : types.ADD_CARD,  sID }
}
export const editCard = (sID, cID) => {
  return { type : types.EDIT_CARD,  sID,  cID }
}
export const saveCard = (sID, cID, text) => {
  return { type : types.SAVE_CARD,  sID,  cID,  text }
}
export const cancelCard = (sID, cID) => {
  return { type : types.CANCEL_CARD,  sID,  cID }
}
export const deleteCard = (sID, cID) => {
  return { type : types.DELETE_CARD,  sID,  cID }
}


export const dragDrop = (data, to) => {
  data = data.split(':');
  return { type : types.DRAG_DROP,  from : data[0],  to,  target : data[1] }
}


export const getStatusList = (state) => {
  return {
    'status_list': state.status_list
  };
}