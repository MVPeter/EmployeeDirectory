import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomPerson: function() {
    return axios.get("https://randomuser.me/api/?results=1");
  },
  get20List: function() {
    return axios.get("https://randomuser.me/api/?results=20&inc=name,location,email,phone,id,picture&nat=us");
  }
};
