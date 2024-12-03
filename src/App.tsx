import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";

/* Components */
import { Home } from "./components/Home";
import Transactions from "./components/Transaction/Transactions";
import Settings from "./components/Settings";
import GroupMembers from "./components/GroupMembers/GroupMembers";
import Wallet from "./components/Wallet/Wallet";
import AddMember from "./components/GroupMembers/AddMember";
import SavingsPage from "./components/SavingsPage/SavingsPage";
import LoansPage from "./components/Loans/LoansPage";
import CashBoxDetails from "./components/Wallet/CashBoxDetails";
import Login from "./components/Login";
import AddTransactionForm from "./components/Transaction/AddTransactionsForm";
import RequestLoanPage from "./components/Loans/RequestLoanPage";
import Grouproles from "./components/Grouproles";
import Meetings from "./Meetings";
/* Icons */
import {
  homeOutline,
  listOutline,
  settingsOutline,
  peopleOutline,
  walletOutline,
} from "ionicons/icons";

setupIonicReact();

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  return (
    <IonApp>
      <IonReactRouter>
        {isLoggedIn ? (
          /* Tabs and Navbar for Logged-In Users */
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/transactions">
                <Transactions />
              </Route>
              <Route exact path="/settings">
                <Settings />
              </Route>
              <Route exact path="/group-members">
                <GroupMembers />
              </Route>
              <Route exact path="/wallet">
                <Wallet />
              </Route>
              <Route exact path="/add-member">
                <AddMember />
              </Route>
              <Route exact path="/add-transaction">
                <AddTransactionForm />
              </Route>
              <Route path="/savings" component={SavingsPage} exact />
              <Route path="/loans" component={LoansPage} exact />
              <Route path="/request-loan" component={RequestLoanPage} exact />
              <Route path="/cashbox-details" component={CashBoxDetails} />
              <Route path="/group-roles" component={Grouproles} exact />
              <Route path="/meetings" component={Meetings} />
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>

            {/* Bottom Navigation Bar */}
            <IonTabBar slot="bottom" style={{ backgroundColor: "#4CAF50" }}>
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={homeOutline} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="transactions" href="/transactions">
                <IonIcon icon={listOutline} />
                <IonLabel>Transactions</IonLabel>
              </IonTabButton>
              <IonTabButton tab="group-members" href="/group-members">
                <IonIcon icon={peopleOutline} />
                <IonLabel>Members</IonLabel>
              </IonTabButton>
              <IonTabButton tab="wallet" href="/wallet">
                <IonIcon icon={walletOutline} />
                <IonLabel>Wallet</IonLabel>
              </IonTabButton>
              <IonTabButton tab="settings" href="/settings">
                <IonIcon icon={settingsOutline} />
                <IonLabel>Settings</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        ) : (
          /* Login Page for Non-Logged-In Users */
          <IonRouterOutlet>
            <Route exact path="/login">
              <Login
                onLogin={() => setIsLoggedIn(true)} // Pass login handler
              />
            </Route>
            <Redirect exact from="/" to="/login" />
          </IonRouterOutlet>
        )}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
