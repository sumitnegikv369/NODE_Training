require("dotenv").config();
const serverSetup = require("./serverSetup");

const PORT = process.env.PORT || 4001;

serverSetup().listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
