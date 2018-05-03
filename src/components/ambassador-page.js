import React from "react";
import { connect } from "react-redux";

import requiresLogin from "../requires-login";
import Logout from "./logout";
import AmbassadorItineraries from "./ambassador-itineraries";

export class AmbassadorPage extends React.Component {
  render() {
    return (
      <div className="ambassador-page">
        <AmbassadorItineraries />
        
        <Logout />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentItenerary: [],
  currentUser: state.auth.currentUser
});

export default requiresLogin()(connect(mapStateToProps)(AmbassadorPage));
