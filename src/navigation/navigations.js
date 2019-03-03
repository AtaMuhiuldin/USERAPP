import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/homeScreen';
import AuthScreen from '../screens/authScreen';
import ProductCatagories from '../screens/productCatagoryScreen';
import ProductScreen from '../screens/productsScreen';
import CartScreen from '../screens/cartScreen';
import CustomizeProductScreen from '../screens/customizeProductScreen';
import RoutineAddScreen from '../screens/routineAddScreen';
import UserSavedOrdersScreen from '../screens/userSavedOrdersScreen';


const AppStackNavigation = createStackNavigator({
    ProductCatagories: { screen: ProductCatagories },
    HomeScreen: { screen: HomeScreen },
    CartScreen: { screen: CartScreen },
    ProductScreen: { screen: ProductScreen },
    CustomizeProductScreen: { screen: CustomizeProductScreen },
    RoutineAddScreen: { screen: RoutineAddScreen },
    UserSavedOrdersScreen: { screen: UserSavedOrdersScreen }
},
    {
        initialRouteName: "HomeScreen"
    });

const AppSwitchNavigation = createSwitchNavigator({
    AuthScreen: { screen: AuthScreen },
    HomeScreen: { screen: AppStackNavigation }
},
    {
        initialRouteName: "HomeScreen"
    }
);
const AppContainer = createAppContainer(AppSwitchNavigation);
export default AppContainer;