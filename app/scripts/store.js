import Session from './models/session';
import Trucks from './collections/trucks';

let store = {
  session: new Session(),
  //access using store.session

  trucksCollection: new Trucks()
  //access using store.trucksCollection

};

export default store;
