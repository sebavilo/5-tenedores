import { createStackNavigator } from "react-navigation-stack";
import AccountScreen from "../screens/Account/MyAccount";
import LoginScreen from "../screens/Account/Login";

const AccountScreenStacks = createStackNavigator({
	MyAccount: {
		screen: AccountScreen,
		navigationOptions: () => ({
			title: "Mi Perfil"

		})
	},
	Login: {
		screen: LoginScreen,
		navigationOptions: () => ({
			title: "Login"
		})
	}
});

export default AccountScreenStacks;