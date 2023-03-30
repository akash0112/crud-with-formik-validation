const initialState = {
    usersData: [],
    editUser:{},
  };
  
  const formReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
      case "ADD_USER":
        return {
          ...state,
          usersData: [...state.usersData, payload],
        };
      case "DELETE_USER":
        return {
          ...state,
          usersData: state.usersData.filter((item) => item.id !== payload),
        };
        case "AFTER_UPDATE_USER":
          return {
            ...state,
            editUser: [],
          };
      case "UPDATE_USER":
        return {
          ...state,
          usersData: state.usersData.map((content) =>
            content.id === payload.id
              ? {
                  ...content,
                  name: payload.name,
                  email: payload.email,
                  profession: payload.profession,
                  city: payload.city,
                  contact: payload.contact,
                }
              : content
          ),
        };
        case "EDIT_USER":
          return {
            ...state,
            edit:true,
            editUser: state.usersData.filter((item) => item.id === payload),
          };
  
      default:
        return state;
    }
  };
  
  export default formReducer;
  