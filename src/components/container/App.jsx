import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Homepage} from "../../pages/homepage/Homepage";
import {CategoryOne} from "../categories/CategoryOne";
import {CategoryTwo} from "../categories/CategoryTwo";
import {CategoryThree} from "../categories/CategoryThree";
import {CategoryFour} from "../categories/CategoryFour";
import {CategoryFive} from "../categories/CategoryFive";
import {ShopPage} from "../../pages/shop/ShopPage";
import Header from "../header/Header";
import {SignInUp} from "../../pages/sign-in-up/SignInUp";
import {ContactPage} from "../../pages/contact/ContactPage";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import {connect} from 'react-redux';
import {setCurrentUser} from "../../redux/user/userActions";

class App extends Component {

    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
                if (userAuth) {
                    const userRef = await createUserProfileDocument(userAuth)
                    // userRef.onSnapshot(snapshot => console.log(snapshot.data()))
                    userRef.onSnapshot(snapshot => setCurrentUser({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    }))
                } else {
                    setCurrentUser(userAuth)
                }
            }
        );
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/shop" component={ShopPage}/>
                        <Route path="/contact" component={ContactPage}/>
                        <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/'/>) : <SignInUp/>}/>
                        <Route path="/category_1" component={CategoryOne}/>
                        <Route path="/category_2" component={CategoryTwo}/>
                        <Route path="/category_3" component={CategoryThree}/>
                        <Route path="/category_4" component={CategoryFour}/>
                        <Route path="/category_5" component={CategoryFive}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)