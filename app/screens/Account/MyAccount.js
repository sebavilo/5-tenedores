import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import Loading from "../../components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";
import navigation from "react-navigation";

export default function MyAccount({navigation}) {
	//Acá detectará si el usuario está loggeado o no
	const [login, setLogin] = useState(null);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			!user ? setLogin(false) : setLogin(true);
		})
	}, []);

	//Si el estado del login es null
	if(login === null) {
		return (
			<Loading isVisible={true} text="Cargando..." ></Loading>
			)
	}

	//Si está loggeado, irá a página UserLogged, sino direcciona a UserGuest
	else if(login)
	{
		return (
			<UserLogged></UserLogged>
		)
	}
	else{
		return <UserGuest navigation={navigation}></UserGuest>
	}
}