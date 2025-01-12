var user = {
  id: 101,
  email: "test@gmail.com",
  //   nested object
  personalInfo: {
    name: "abc",
    address: {
      line1: "near ccc marg",
      line2: "randon locality",
      line3: "cityname pincode",
      city:'Nagpur',
      country:'India'
    },
  },
};

console.log(user.personalInfo.address.country)
