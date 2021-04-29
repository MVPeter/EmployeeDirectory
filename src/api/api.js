import axios from "axios";


export default {
  get20List: function () {
    return axios.get("https://randomuser.me/api/?results=20&inc=name,location,email,phone,id,picture&nat=us")

  }
};
