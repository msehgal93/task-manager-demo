import { types, defaultState, getDefaultStatus, getDefaultCard } from './actionConstants';

const mainReducer = (state = defaultState, action) => {
  switch(action.type) {

    case types.ADD_STATUS:
    return {
      'status_list': [
        ...state.status_list,
        getDefaultStatus()
      ]
    };

    case types.DELETE_ALL_STATUS:
    return {
      'status_list': []
    };

    case types.DELETE_STATUS: {
      const { sID } = action;
      return {
        'status_list': [...state.status_list].filter( (st) => (st.id !== sID) )
      };
    }

    case types.EDIT_STATUS: {
      const { sID } = action;
      return {
        'status_list': [...state.status_list].map( (st) => (st.id !== sID ? st : { ...st, status: 'edit'}) )
      };
    }

    case types.SAVE_STATUS: {
      const { sID, title } = action;
      return {
        'status_list': [...state.status_list].map( (st) => (st.id !== sID ? st : { ...st, status: 'view', 'title': title}) )
      };
    }

    case types.CANCEL_STATUS: {
      const { sID } = action;
      return {
        'status_list': [...state.status_list].map( (st) => (st.id !== sID ? st : { ...st, status: 'view'}) )
      };
    }


    case types.ADD_CARD: {
      const { sID } = action;
      return {
        'status_list': [...state.status_list].map( (st) => {
          return (st.id !== sID ? st : { ...st, card_list: [...(st.card_list), getDefaultCard()] })
        })
      };
    }

    case types.EDIT_CARD: {
      const { sID, cID } = action;
      return {
        'status_list': [...state.status_list].map( (st) => {
          return (st.id !== sID ? st : { ...st, card_list: [...(st.card_list)].map( ca => ca.id!==cID ? ca : {...ca, status:'edit'} ) })
        })
      };
    }

    case types.SAVE_CARD: {
      const { sID, cID, text } = action;
      return {
        'status_list': [...state.status_list].map( (st) => {
          return (st.id !== sID ? st : { ...st, card_list: [...(st.card_list)].map( ca => ca.id!==cID ? ca : {...ca, status:'view', 'text': text} ) })
        })
      };
    }

    case types.CANCEL_CARD: {
      const { sID, cID } = action;
      return {
        'status_list': [...state.status_list].map( (st) => {
          return (st.id !== sID ? st : { ...st, card_list: [...(st.card_list)].map( ca => ca.id!==cID ? ca : {...ca, status:'view'} ) })
        })
      };
    }

    
    case types.DELETE_CARD: {
      const { sID, cID } = action;
      return {
        'status_list': [...state.status_list].map( (st) => {
          return (st.id !== sID ? st : { ...st, card_list: [...(st.card_list)].filter( ca => ca.id!==cID ) })
        })
      };
    }

    case types.DRAG_DROP: {
      const { from, to, target } = action;
      let card, ret = {
        'status_list': [...state.status_list].map( (st) => {
          return (st.id !== from ? st : { ...st, card_list: [...(st.card_list)].filter( ca => { return ca.id!==target ? true : ((card=ca)&&0) } ) })
        })
      };
      return {
        'status_list': [...ret.status_list].map( (st) => {
          return (st.id !== to ? st : { ...st, card_list: [...(st.card_list),card] })
        })
      }
    }

    default:
    return state
  }
}

export default mainReducer
