function date(timeStamp) {
  return `${new Date(timeStamp).toLocaleDateString()}`;
}

module.exports = date;
