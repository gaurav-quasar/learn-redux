var redux = require('redux');

console.log('Starting redux simple app');

var defaultState = {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = searchText, action) => {
  console.log('New Action Received', action);

  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        name: action.searchText
        }
      break;
    default:
      return state;
  }
}

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unSubscribe = store.subscribe(() => {
    console.log('Updated State: ', store.getState());
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Gaurav'
});
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Gupta'
});
//unSubscribe();
