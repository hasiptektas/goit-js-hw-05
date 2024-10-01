const allUsers = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

const getTotalBalanceByGender = (allUsers, gender) => {
    return allUsers
        .reduce((acc, user) => {
            if (user.gender === gender) {
                acc += user.balance;
            }
            return acc;
        }, 0);
}

console.log("****************************************");
console.log(getTotalBalanceByGender(allUsers, "male"));
console.log(getTotalBalanceByGender(allUsers, "female"));