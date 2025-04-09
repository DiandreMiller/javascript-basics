//Find the bug. This function should display the full name of the user.

function getFullName(user) {
    return user.firstName + " " + user.lastname;
  }
  
  const user = {
    firstName: "Alice",
    lastName: "Johnson"
  };
  
  console.log('getFullName:',getFullName(user));

  //Find the bug

  function createUser() {
    const user = {
      name: "Tina",
      contact: {
        email: "tina@example.com"
      },
      getContactInfo: () => {
        return `${this.name} can be reached at ${this.contact?.email}`;
      }
    };
  
    return user;
  }
  
  const users = createUser();
  console.log(users.getContactInfo());
  
  