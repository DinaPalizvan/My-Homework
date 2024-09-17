"use client";
import {
  AppBar,
  Box,
  Button,
  colors,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
const { useState } = require("react");

const drawerWidth = 240;

const navItems = [
  { title: "Home", route: "/" },
  { title: "Users", route: "/users" },
  { title: "Posts", route: "/posts" },
  { title: "Recipes", route: "/recipes" },
  { title: "Admin", route: "/admin" },
];

//==============the function starts from here:=========================
export default function HeaderComponent(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const path = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Next.js-03
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => {
          const linkStyle = {
            color: path === item.route ? colors.pink[400] : "black",
            textDecoration: path === item.route ? "underline" : "none",
          };
          return (
            <Link href={item.route} key={item.title} style={{ ...linkStyle }}>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  //================================================================
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: colors.cyan[500] }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Next.js-03
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => {
              const linkStyle = {
                color: path === item.route ? colors.pink[400] : "white",
                textDecoration: path === item.route ? "underline" : "none",
              };

              return (
                <Button key={item.title}>
                  <Link href={item.route} style={{ ...linkStyle }}>
                    {item.title}
                  </Link>
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
