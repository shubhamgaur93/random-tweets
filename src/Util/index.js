import moment from "moment";

const countWeek = date =>
  moment()
    .subtract(7, "days")
    .isBefore(moment(date));

export default countWeek;
