import React, { useState } from 'react';
import { useUser } from '../../helpers/UserContext';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { mainListItems, secondaryListItems } from './dashboard/listItems';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import TransactionForm from "./dashboard/TransactionForm";
import BudgetForm from './dashboard/BudgetForm';
import InvestmentForm from './dashboard/InvestmentForm';
import FinancialOverview from './dashboard/FinancialOverview';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const theme = createTheme({
  palette: {
    primary: {
        main: '#4CAF50',
    },
    secondary: {
        main: '#8BC34A',
    },
    background: {
        default: '#e8f5e9',
    }
  },
});

const Dashboard = ({ handleLogout }) => {
  const [open, setOpen] = useState(true);
  const user = useUser();

  const toggleDrawer = () => {
    setOpen(!open);
  };
console.log(user, user.id);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <Button color="inherit" onClick={handleLogout} startIcon={<ExitToAppIcon />}>
              Logout
            </Button>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, height: '100vh', overflow: 'auto' }}>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb:
             4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <FinancialOverview user={user} />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <TransactionForm user={user} />
              </Grid>
              <Grid item xs={12} md={6}>
                <BudgetForm user={user} />
              </Grid>
              <Grid item xs={12} md={6}>
                <InvestmentForm user={user} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
