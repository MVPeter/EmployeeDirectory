import axios from "axios";


export default {
  // getRandomPerson: function() {
  //   return axios.get("https://randomuser.me/api/?results=1");
  // },
  get20List: function () {
    return axios.get("https://randomuser.me/api/?results=20&inc=name,location,email,phone,id,picture&nat=us")
    // .then(res => {
    //   console.log(res.data.results)


    //   //   const user =res.data.results;
    //   //   return user.map(user => {
    //   //     return {
    //   //       image: user.picture.thumbnail,
    //   //       fname: user.name.first,
    //   //       lname: user.name.last,
    //   //       email: user.email,
    //   //       phone: user.phone,
    //   //       location: user.location.state,
    //   //     }
    //   //   })
    // }).catch(err => console.log(err));
  }
};
