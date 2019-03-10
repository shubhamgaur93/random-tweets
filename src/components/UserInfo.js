import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import countWeek from "./Util";

const styles = {
  root: {
    width: "100%",
    maxWidth: 500,
    margin: "auto"
  }
};

class UserInfo extends React.Component {
  hashTagCount = () =>
    this.props.userInfo.tweets.reduce((acc, val) => {
      if (countWeek(val.created_at)) {
        acc = acc + val.entities.hashtags.length;
      }
      return acc;
    }, 0);

  followerCount = () =>
    this.props.userInfo.followers.users.reduce((acc, val) => {
      if (countWeek(val.created_at)) {
        acc = acc + 1;
      }
      return acc;
    }, 0);

  render() {
    const { classes } = this.props;
    let userInfo = this.props.userInfo;
    return (
      <div className={`${classes.root} test`}>
        <div>
          <div className="username">
            <img
              alt="Remy Sharp"
              src={this.props.userInfo.user.profile_image_url.replace(
                "_normal",
                ""
              )}
              className={classes.bigAvatar}
            />
            <Typography variant="h6" gutterBottom>
              {userInfo.user.name}
            </Typography>
          </div>
        </div>
        <div className="userDescription">
          <Typography variant="h6" gutterBottom>
            {userInfo.user.description}
          </Typography>
        </div>
        <div className="hash_tag">
          <Typography variant="h6" gutterBottom>
            #hash_tag : <span>{this.hashTagCount()}</span>
          </Typography>
        </div>

        <div className="hash_tag">
          <Typography variant="h6" gutterBottom>
            Followers : <span>{this.followerCount()}</span>
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(UserInfo);
