export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "thirdweb SDK + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "https://thirdweb.com/mission",
      target: "_blank",
      rel: "noopener noreferrer",
    },
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
    github: "https://github.com/thirdweb-example",
    twitter: "https://x.com/thirdweb",
    docs: "https://portal.thirdweb.com/",
    discord: "https://discord.gg/thirdweb",
  },
};
