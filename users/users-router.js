const router = require("express").Router();

const Users = require("./users-model.js");

// const auth = require("../auth/authenticator");

router.get("/", (req, res) => {
  console.log("token", req.decodedToken);
  
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
