import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import UserSelectionPage from "./pages/auth/UserSelectionPage.jsx";
import SignupPage from "./pages/auth/SignupPage.jsx";
import LoginPage from "./pages/Auth/LoginPage.jsx";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import Findjobs from "./pages/JobRecruter/Findjobs.jsx";
import PostJobPage from "./pages/JobRecruter/PostJobPage.jsx";
import Register_form from "./pages/auth/Register_form.jsx";
import SelectionPage from "./pages/auth/SelectionPage.jsx";
import UserProfile from "./pages/JobSeeker/UserProfile.jsx";
import JobSeekerForm from "./components/auth/JobSeekerForm.jsx";
import ChatBox from "./pages/JobRecruter/ChatBox.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Use App as the main layout
    children: [
      {
        index: true, // This makes Home the default route inside App
        element: <Home />,
      },
      {
        path: "login",
        element: <UserSelectionPage />,
      },
      {
        path: "auth/selection",
        element: <SelectionPage />,
      },
      {
        path: "/login",
        element: <SelectionPage />,
      },
      {
        path: "auth/signup",
        element: <SignupPage />,
      },
      {
        path: "jobSeeker/profile",
        element: <UserProfile />,
      },
      {
        path: "auth/signup/jobSeeker/info",
        element: <JobSeekerForm />,
      },
      {
        path: "chat",
        element: <ChatBox />,
      },
      {
        path: "/Findjobs",
        element: <Findjobs />,
      },
      {
        path: "/postjob",
        element: <PostJobPage />,
      },
      {
        path: "/auth/login",
        element: <LoginPage />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
