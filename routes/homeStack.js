import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import MakeNewCustomer from "../screens/makeNewCustomer";
import SearchCustomer from "../screens/searchCustomer";
import CustomerDetail from "../screens/customerDetail";
import TreatmentsDetails from "../screens/treatmentsDetails";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Klantenbeheer'
    }
  },
  MakeNewCustomers: {
    screen: MakeNewCustomer,
    navigationOptions: {
      title: 'Nieuwe klant aanmaken'
    }
  },
  SearchCustomers: {
    screen: SearchCustomer,
    navigationOptions: {
      title: 'Zoek naar klant'
    }
  },
  CustomerDetail: {
    screen: CustomerDetail,
    navigationOptions: {
      title: 'Klant details'
    }
  },
  TreatmentsDetails: {
    screen: TreatmentsDetails,
    navigationOptions: {
      title: 'Behandelingen'
    }
  }
}

const HomeStack = createStackNavigator(screens);

const Navigator = createAppContainer(HomeStack);

export default Navigator;