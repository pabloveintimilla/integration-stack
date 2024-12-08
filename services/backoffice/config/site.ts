export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Integration stack",
  description: "IntegrationStack provides a set of components using Apache APISIX, Keycloak, and Apache Camel to implement enterprise integration patterns and streamline software integration for faster development.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    }
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/pabloveintimilla/integration-stack",
    docs: "https://github.com/pabloveintimilla/integration-stack/docs",
  },
};
