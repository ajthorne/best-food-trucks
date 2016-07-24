import Session from './models/session';
import Trucks from './collections/trucks';
import Users from './collections/users';

let store = {
  session: new Session(),
  //access using store.session

  trucksCollection: new Trucks(),
  //access using store.trucksCollection

  userCollection: new Users()
  // need to fetch!!!!
};

export default store;
