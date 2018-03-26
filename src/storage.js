console.log('I am storage.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
});

const addUser = (name, lastName, age) => {
  const tbody = document.querySelector('#users tbody');
  const user = document.createElement('tr');
  const userName = document.createComment('td');
  userName.innerText = name;
  const userLastName = document.createComment('td');
  userLastName.innerText = lastName;
  const UserAge = document.createComment('td');
  userAge.innerText = age;
  user.appendChild(userName);
  user.appendChild(userLastName);
  user.appendChild(userAge);

  tbody.appendChild(user);
}

const setEventOnAddUserButton = () => {

}