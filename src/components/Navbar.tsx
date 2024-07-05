import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { NavbarContainer } from "./Navbar.styles";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavbarContainer>
      <AppBar position="fixed">
        {" "}
        {/* Alterado para position="fixed" */}
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            Dados do Siconfi
          </Typography>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ fontWeight: "bold" }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/news"
            sx={{ fontWeight: "bold" }}
          >
            Cauc
          </Button>
          <div onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>
            <Button
              color="inherit"
              aria-controls="menu-biblioteca"
              aria-haspopup="true"
              sx={{ fontWeight: "bold" }}
            >
              Biblioteca
            </Button>
            <Menu
              id="menu-biblioteca"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{
                onMouseLeave: handleMenuClose,
              }}
            >
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/library/documentation"
              >
                Documentação
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/library/opendata"
              >
                Dados Abertos
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/library/declaration"
              >
                Declarações
              </MenuItem>
            </Menu>
          </div>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{ fontWeight: "bold" }}
          >
            Sobre
          </Button>
        </Toolbar>
      </AppBar>
    </NavbarContainer>
  );
};

export default Navbar;
