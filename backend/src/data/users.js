import bcrypt from "bcryptjs";

const users = [
  {
    fullName: "Marius van Staden",
    email: "marius@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    fullName: "Mione van Staden",
    email: "mione@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    fullName: "Hailey Mae van Staden",
    email: "Hailey@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
