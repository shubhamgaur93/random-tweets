import React from "react";
import Loader from "react-loader-spinner";
import UserInfo from "./UserInfo";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
      userInfo: null
    };
  }
  render() {
    let { loader, userInfo } = this.state;
    return (
      <>
        {loader && (
          <div id="loaderContainer">
            <Loader type="Plane" color="#00BFFF" height="100" width="100" />
          </div>
        )}

        {userInfo && <UserInfo userInfo={userInfo} />}
      </>
    );
  }
  componentDidMount() {
    fetch("http://localhost:4000/getUser")
      .then(data => data.json())
      .then(userInfo => {
        this.setState({
          loader: false,
          userInfo
        });
        console.log(userInfo);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
export default Layout;
