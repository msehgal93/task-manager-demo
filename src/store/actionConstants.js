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
  DELETE_CARD         : 'DELETE_CARD'
};


export const defaultState = {
  "status_list": [
    {
      id        : 'adhdf7dy7fyd7fyd7',
      status    : 'view',
      title     : 'Completed',
      card_list : [
        {
          id      : 'adhd234dy7fyd7fy',
          status  : 'view',
          text    : 'Complete 5 Katas from Codewars'
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
          text    : 'refresh to see that the tasks does not reset.'
        },
        {
          id      : 'uhdfdfd8fd7f8k88236',
          status  : 'view',
          text    : 'subscribe to react+redux magazines.'
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