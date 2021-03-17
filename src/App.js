import React, { Component } from 'react';
import {
  BrowserRouter as Routers,
  Link,
  Redirect,
  Route
} from 'react-router-dom';
import {auth} from './services/firebase';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup'
import Chat from './pages/chat/Chat';




class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state={
  //     authenticated:false,
  //     loading:true,
  //   }
  // }
  //xử lý firebase thay đổi
  componentDidMount() {
    auth().onAuthStateChanged((user)=>{
      if(user){
        console.log(user.displayName)
        // this.setState({
        //   authenticated:true,
        //   loading:false,
        // })
      }else{
        console.log('user is not logged')
        // this.setState({
        //   authenticated:false,
        //   loading:false,
        // });
        return;
      }
    })
  }

  render() {
    return (
      <Routers>
        <div>
          <Route path="/Signup" component={Signup}/>
          <Route exact path="/"  component={Login} />
          <Route exact path="/Chat"  component={Chat} />
        </div>
      </Routers>
    )
  }
}
// const privateRoute=({component: component,authenticated,...rest})=>{
//   return(
//   <Route {...rest} render={(props)=>{
//     authenticated===true 
//     ? <component {...props} /> 
//     : <Redirect to={{ partname:'/Login', state: {from: props.location}}}/>
//   }} />)
// }


export default App;
