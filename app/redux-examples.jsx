var redux = require('redux');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

console.log('Starting redux simple app');

var unSubscribe = store.subscribe(() => {
  var state = store.getState();

   console.log('New state', store.getState());

      if (state.map.isFetching) {
      document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map.url) {
      document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>';
    }
});

store.dispatch(actions.fetchLocation());
store.dispatch(actions.changeName('Gupta'));
store.dispatch(actions.addHobby('Trekking'));
store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.changeName('Gaurav'));
store.dispatch(actions.addMovie('Shawshank Redemption', 'Drama'));
store.dispatch(actions.addMovie('Persuit of Happiness', 'Drama'));
store.dispatch(actions.addMovie('Undisputed', 'Action'));
store.dispatch(actions.removeHobby('Running'));
store.dispatch(actions.removeMovie('Undisputed'));
store.dispatch(actions.addMovie('Undisputed 3', 'Action'));

//unSubscribe();
