import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import AddBlog from "../pages/Dashboard/AddBlog";
import BlogList from "../pages/Dashboard/BlogList";
import UpdateBlog from "../pages/Dashboard/UpdateBlog";
import Contact from "../pages/Main/Contact";
import History from "../pages/Main/History";
import Home from "../pages/Main/Home/Home";
import SingleBlogDesc from "../pages/Main/SingleBlogDesc";

import WishList from "../pages/Main/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog/:id",
        element: <SingleBlogDesc />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <BlogList />,
          },
          {
            path: "add-blog",
            element: <AddBlog />,
          },
          {
            path: "update-blog/:_id",
            element: <UpdateBlog />,
          },
        ],
      },
    ],
  },
]);

export default router;
