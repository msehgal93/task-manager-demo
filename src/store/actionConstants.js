import v4 from 'uuid/v4';

export const types = {
  ADD_STATUS          : 'ADD_STATUS',
  EDIT_STATUS         : 'EDIT_STATUS',
  SAVE_STATUS         : 'SAVE_STATUS',
  CANCEL_STATUS       : 'CANCEL_STATUS',
  DELETE_STATUS       : 'DELETE_STATUS',
  DELETE_ALL_STATUS   : 'DELETE_ALL_STATUS',
  ADD_CARD            : 'ADD_CARD',
  EDIT_CARD           : 'EDIT_CARD',
  SAVE_CARD           : 'SAVE_CARD',
  CANCEL_CARD         : 'CANCEL_CARD',
  DELETE_CARD         : 'DELETE_CARD',
  DRAG_DROP           : 'DRAG_DROP'
};


export const defaultState = {
  "status_list": [
    {
      id        : 'adhdf7dy7fyd7fyd7',
      status    : 'view',
      title     : 'Features',
      card_list : [
        {
          id      : 'adhd234dy7fyd7fy',
          status  : 'view',
          text    : 'Hi, You Use this Task manager to handle day to day tasks.'
        },
        {
          id      : 'uhdfdfd8fd7f8k88236',
          status  : 'view',
          text    : 'Your Tasks will persist throughout multiple sessions.'
        },
        {
          id      : 'uhdfdfd8fd7f8k82236',
          status  : 'view',
          text    : 'And, Don\'t forget Drag-Drop Card Feature'
        }
      ]
    },
    {
      id        : 'adhdjhh3u2h3hu2h37',
      status    : 'view',
      title     : 'Pending',
      card_list : [
        {
          id      : 'adhdf7djhsd6t62geyd7',
          status  : 'view',
          text    : 'None. Hurray!!!'
        }
      ]
    }
  ]
};

/*
 * Status of "Status Item"
 * -> view : normal view state
 * -> edit : edit name of status
 */
export const getDefaultStatus = () => ({
  id        : v4(),
  status    : 'edit',
  title     : '',
  card_list : []
});

/*
 * Status of Card Item
 * -> view : normal view state
 * -> edit : edit card Text
 */
export const getDefaultCard = () => ({
  id        : v4(),
  status    : 'edit',
  text      : ''
});