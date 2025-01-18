import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import AddExpense from "./AddExpense";
import ViewExpense from "./ViewExpense";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/add-expense",
    element: <AddExpense />,
  },
  {
    path: "/view-expense",
    element: <ViewExpense />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
