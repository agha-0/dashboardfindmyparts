import { Home } from "react-feather";
export const MENUITEMS = [
  {
    menutitle: "General",
    menucontent: "Products",
    Items: [
      {
        title: "Products",
        icon: Home,
        type: "sub",
        badge: "badge badge-success",
        active: false,
        children: [
          {
            path: `/products/allproducts`,
            title: "All Product",
            type: "link",
          },
          {
            path: `/products/AddProduct`,
            title: "Add New",
            type: "link",
          },
          {
            path: `/products/allpurchases`,
            title: "All Purchase",
            type: "link",
          },
          {
            path: `/products/AddPurchase`,
            title: "Add Purchase",
            type: "link",
          },
          {
            path: `/products/category`,
            title: "Categories",
            type: "link",
          },
          {
            path: `/products/subcategory`,
            title: "Sub-Categories",
            type: "link",
          },
        ],
      },
    ],
  },
];
