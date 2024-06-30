import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BookList } from "./book/BookList";
import { BookCreate } from "./book/BookCreate";
import { BookEdit } from "./book/BookEdit";
import { BookShow } from "./book/BookShow";
import { UserProgressList } from "./userProgress/UserProgressList";
import { UserProgressCreate } from "./userProgress/UserProgressCreate";
import { UserProgressEdit } from "./userProgress/UserProgressEdit";
import { UserProgressShow } from "./userProgress/UserProgressShow";
import { FriendshipList } from "./friendship/FriendshipList";
import { FriendshipCreate } from "./friendship/FriendshipCreate";
import { FriendshipEdit } from "./friendship/FriendshipEdit";
import { FriendshipShow } from "./friendship/FriendshipShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"User Progress Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Book"
          list={BookList}
          edit={BookEdit}
          create={BookCreate}
          show={BookShow}
        />
        <Resource
          name="UserProgress"
          list={UserProgressList}
          edit={UserProgressEdit}
          create={UserProgressCreate}
          show={UserProgressShow}
        />
        <Resource
          name="Friendship"
          list={FriendshipList}
          edit={FriendshipEdit}
          create={FriendshipCreate}
          show={FriendshipShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
