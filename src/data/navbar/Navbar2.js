import { Icon } from "lucide-react";
import Adobe from "../../components/Navbar/Adobe";
import SignUp from "../../components/Navbar/SignUp";
import LogIn from "../../components/Navbar/LogIn";

export const Navbar2 = {
  "Freelancers": {
    heading: "Hire Freelancers",
    dropdown: [
      {
        icon: <Icon name="BehanceLogo" />,
        heading: "Hiring on Behance",
        route: "/hire-freelancers/hiring-on-behance"
      },
      {
        icon: <Icon name="Search" />,
        heading: "Find Creatives",
        route: "/hire-freelancers/find-creatives"
      },
      {
        icon: <Icon name="FolderOpen" />,
        heading: "My Freelance Projects",
        route: "/hire-freelancers/my-freelance-projects"
      },
      {
        icon: <Icon name="Plus" />,
        heading: "New Freelance Project",
        route: "/hire-freelancers/new-freelance-project"
      }
    ],
    dropdown2: [
      {
        heading: "Graphic Designers",
        route: "/hire-freelancers/designers/graphic-designers"
      },
      {
        heading: "Brand Designers",
        route: "/hire-freelancers/designers/brand-designers"
      },
      {
        heading: "UI/UX Designers",
        route: "/hire-freelancers/designers/ui-ux-designers"
      },
      {
        heading: "Illustrators",
        route: "/hire-freelancers/designers/illustrators"
      },
      {
        heading: "Logo Designers",
        route: "/hire-freelancers/designers/logo-designers"
      }
    ]
  },
  "Icon": {
    heading: "Icon Component",
    component: <Icon name="IconName" />,
    route: "/icon-component"
  },
  "Login": {
    heading: "Login",
    component: <LogIn />,
    route: "/login"
  },
  "SignUp": {
    heading: "Sign Up",
    component: <SignUp />,
    route: "/sign-up"
  },
  "Adobe": {
    heading: "Adobe Component",
    component: <Adobe />,
    route: "/adobe-component"
  }
};
