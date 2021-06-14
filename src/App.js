import React from "react";
import "./styles.css";
import Button from "./Components/Button";
import UserList from "./Components/UserList";
import Preloader from "./Components/Preloader";

class App extends React.Component {
  state = {
    userInfo: undefined,
    loading: false
  };

  gettingUsers = async () => {
    this.setState({ loading: true });
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();

    this.setState({
      userInfo: data.results,
      loading: false
    });
  };

  render() {
    if (this.state.loading) return <Preloader />;
    return (
      <div className="App">
        <Button onClick={() => this.gettingUsers()} label={"Press"} />
        <UserList users={this.state.userInfo} />
      </div>
    );
  }
}
export default App;
