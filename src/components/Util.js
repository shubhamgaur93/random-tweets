import moment from "moment";

const countWeek = date =>
  moment()
    .subtract(7, "days")
    .format() < moment(date).format();

export default countWeek;
