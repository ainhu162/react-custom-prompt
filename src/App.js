import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home.page";
import FormPage from "./pages/Form.page";
import { Layout } from "./Layout";
import "antd/dist/antd.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/form">
            <FormPage />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
