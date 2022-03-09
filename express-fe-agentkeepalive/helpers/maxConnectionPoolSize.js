const os = require("os");

// Divides 128(128 SNAT ports per Azure VM) by the number of cores on the current machine
const maxConnectionPoolSize = (max) => {
  try {
    // Check the following
    if (
      // If max connections isn't passed in
      !max ||
      // If max connections is less than 1
      max < 1 ||
      // If max connections is less than the number of machine cores
      max < os.cpus().length ||
      // If the length property doesn't exist
      !os.cpus().length ||
      // If cores is showing as 0 on the machine
      os.cpus().length === 0
    ) {
      // Return a base of 100 connections to be in the pool if the max parameter isn't provided or CPU cores is 0
      return 100;
    }
    // Since conn may be a float - explicitly parse it into an integer
    // Then round up to the nearest whole number and return this as the connection pool size
    const conn = max / os.cpus().length;
    return Math.ceil(parseInt(conn));
  } catch (error) {
    console.log(
      "An error has occurred while sizing the connection pool: ",
      error
    );
  }
};

module.exports = maxConnectionPoolSize;
