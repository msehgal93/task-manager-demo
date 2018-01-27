/*
 * Status of "Status Item"
 * -> view : normal view state
 * -> edit : edit name of status
 *
 * Status of Card Item
 * -> view : normal view state
 * -> edit : edit card Text
 *
 */


const defaultState = {
  "status_list": [
    {
      id        : 'adhdf7dy7fyd7fyd7',
      status    : 'view',
      title     : 'Completed',
      card_list : [
        {
          id      : 'adhd234dy7fyd7fy',
          status  : 'view',
          text    : 'unsubscribe boring magazines!'
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
          text    : 'Complete 5 Katas from Codewars'
        },
        {
          id      : 'uhdfdfd8fd7f8k88236',
          status  : 'view',
          text    : 'subscribe interesting and technical magazines.'
        }
      ]
    }
  ]
}

const mainReducer = (state = defaultState, action) => {
  switch(action.type) {
    default:
    return state
  }
}

export default mainReducer
