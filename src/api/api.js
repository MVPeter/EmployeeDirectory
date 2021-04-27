import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  // getRandomPerson: function() {
  //   return axios.get("https://randomuser.me/api/?results=1");
  // },
  get20List: function() {
    return axios.get("https://randomuser.me/api/?results=20&inc=name,location,email,phone,id,picture&nat=us")
    .then(res => {
      console.log(res.data.results)
      const employees =res.data.results;
      return employees.map(user => {
        return {
          image: user.picture.thumbnail,
          fname: user.name.first,
          lname: user.name.last,
          email: user.email,
          phone: user.phone,
          locaiton: user.location.state,
        }
      })
    });
  }
};
