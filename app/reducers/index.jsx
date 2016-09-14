export var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
      case 'CHANGE_NAME':
        return action.name;
      default:
        return state;
    };
};

var hobbyID = 1;
export var hobbyReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_HOBBY':
        return [
          ...state,
          {
              id: hobbyID++,
              hobby: action.hobby
          }
        ];
      case 'REMOVE_HOBBY':
        return state.filter((hobby) => hobby.hobby.toLowerCase() !== action.hobby.toLowerCase());
      default:
        return state;
    };
};

var movieID = 1;
export var movieReducer = (state = [], action) => {
    switch (action.type) {
      case 'Add_MOVIE':
        return [
          ...state,
          {
              id: movieID++,
              title: action.title,
              genre: action.genre
          }
        ];
      case 'REMOVE_MOVIE':
        return state.filter((movie) => movie.title.toLowerCase() !== action.title.toLowerCase());
      default:
        return state;
    };
};

export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  }
};
