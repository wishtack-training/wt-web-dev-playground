import { UserStore } from './user-store';
import { User } from './user';


let userStore = new UserStore();

let user1 = new User('Foo', 'BAR');
let user2 = new User('John', 'DOE');
let user3 = new User('Foo', 'BAR');

let userList1 = userStore.getUserList();

userStore.addUser(user1);
userStore.addUser(user2);
userStore.addUser(user3);

let userList2 = userStore.getUserList();

userStore.removeUser(user1);

let userList3 = userStore.getUserList();

console.log(userList1); // []
console.log(userList2); // [user1, user2, user3]
console.log(userList3); // [user2, user3]


console.log(document.body);
