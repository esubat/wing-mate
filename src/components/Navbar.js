import { Container, Toolbar, Typography, AppBar, Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';

import MenuIcon from "@mui/icons-material/Menu";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import BackpackIcon from '@mui/icons-material/Backpack';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import HotelIcon from '@mui/icons-material/Hotel';
import HouseIcon from '@mui/icons-material/House';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    borderRadius: '1.5rem',
    border: '0.5px solid gray',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
    '&:hover': {
        backgroundColor: 'rgba(138, 180, 248, 0.1)',
        '& svg, & .MuiTypography-root': {
            color: '#8ab4f8',
        },
    },
}));

const Navbar = () => {
    return (
        <AppBar 
            position="static" 
            sx={{ 
                backgroundColor: 'rgb(32,33,36)', 
                borderBottom: '0.5px solid gray', 
            }}
        >
            <Container>
                <Toolbar>
                    <IconButton 
                        edge="start" 
                        color="inherit" 
                        aria-label="menu"
                        sx={{
                            borderRadius: '50% 50% 0 0'
                        }}
                    >
                        <MenuIcon sx={{ color: '#8ab4f8' }} />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            fontSize: '1rem', 
                        }}
                    >
                        Wingmate
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <StyledIconButton color="inherit">
                            <BackpackIcon sx={{ color: '#8ab4f8' }} />
                            <Typography sx={{ fontSize: '0.8rem' }}>
                                Travel
                            </Typography>
                        </StyledIconButton>
                        <StyledIconButton color="inherit">
                            <TravelExploreIcon sx={{ color: '#8ab4f8' }} />
                            <Typography sx={{ fontSize: '0.8rem' }}>
                                Explore
                            </Typography>
                        </StyledIconButton>
                        <StyledIconButton color="inherit">
                            <ConnectingAirportsIcon sx={{ color: '#8ab4f8' }} />
                            <Typography sx={{ fontSize: '0.8rem' }}>
                                Flights
                            </Typography>
                        </StyledIconButton>
                        <StyledIconButton color="inherit">
                            <HotelIcon sx={{ color: '#8ab4f8' }} />
                            <Typography sx={{ fontSize: '0.8rem' }}>
                                Hotels
                            </Typography>
                        </StyledIconButton>
                        <StyledIconButton color="inherit">
                            <HouseIcon sx={{ color: '#8ab4f8' }} />
                            <Typography sx={{ fontSize: '0.8rem' }}>
                                Vacation Rentals
                            </Typography>
                        </StyledIconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
