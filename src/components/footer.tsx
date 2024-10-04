"use client";
import React from 'react';
import Image from 'next/image';
import { Box, Typography,IconButton, Container, Link,useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Facebook, Twitter, Instagram, Pinterest, YouTube } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles'; 
import NewsletterSection from './newsletter-section';
const logoUrl = '/images/logo.png';

// Social Media Link Type Definition
type SocialMediaLink = {
    href: string;
    icon: React.ReactNode;
};

type LinkItem = {
    name: string;
    href: string;
};

// Props type definition
interface LogoSectionProps {
    socialMediaLinks: SocialMediaLink[];
}

interface CategoryAccountSectionProps {
    categories: LinkItem[];
    accountLinks: LinkItem[];
}


// Logo and SNS Section
const LogoSnsSection: React.FC<LogoSectionProps> = ({ socialMediaLinks }) => {
    const theme = useTheme();
    return (
        <Grid size={{ md: 4 }} sx={{ textAlign: 'left' }}>
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: '1rem' }}>
                    <Image
                        src={logoUrl}
                        alt='Gachi.live Logo'
                        width={40}
                        height={40}
                        style={{
                            marginRight: '10px'
                        }}
                    />

                    <Typography variant="h6" gutterBottom>
                        Gachi.live
                    </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: theme.palette.customColor.gray, mb: '1rem' }}>
                    Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2 }}>
                {socialMediaLinks.map((link, index) => (
                    <Link key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
                        <IconButton>{link.icon}</IconButton>
                    </Link>
                ))}
            </Box>
        </Grid>
    );
};

// Social Media Section
const SocialMediaSection: React.FC<{ socialMediaLinksTop: SocialMediaLink[], socialMediaLinksBottom: SocialMediaLink[] }> = ({ socialMediaLinksTop, socialMediaLinksBottom }) => {
    return (
        <Grid container justifyContent="space-around" alignItems="center" 
            sx={{ 
                textAlign: 'justify', 
                mt: '0.1rem', 
                minWidth: '100%', 
                }}
        >
            <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'flex-start', 
                    mb: 3, 
                    paddingLeft: '-1rem' 
                    }}
            >
                <Link href='/' underline='none'>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <img src="/images/logo.png" alt="Gachi.live Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Gachi.live</Typography>
                    </Box>
                </Link>
                <Link href="/help" underline="hover" color="inherit" sx={{ fontSize: '12px', color: 'gray' }}>
                    Help
                </Link>
            </Box>

            <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(3, 1fr)', 
                    gap: '1rem', 
                    justifyItems: 'center' 
                    }}
            >
                <Box sx={{ gridColumn: 'span 2' }}>
                    {socialMediaLinksTop.map((link, index) => (
                        <Link key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
                            <IconButton>{link.icon}</IconButton>
                        </Link>
                    ))}
                </Box>
                <Box sx={{ gridColumn: 'span 3', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    {socialMediaLinksBottom.map((link, index) => (
                        <Link key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
                            <IconButton>{link.icon}</IconButton>
                        </Link>
                    ))}
                </Box>
            </Box>
        </Grid>
    );
};

// Category and Account Section

const CategoryAccountSection: React.FC<CategoryAccountSectionProps> = ({ categories, accountLinks }) => {
    const theme = useTheme();
    return (
        <Grid size={{ xs: 12, md:3 }} sx={{ textAlign: { xs: 'center', md: 'left' }, display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
                <Box>
                    <Typography variant="subtitle1" 
                        sx={{ 
                            mb: '1rem', 
                            color: theme.palette.customColor.gray,
                            fontSize: { xs: '0.875rem', md: '1rem' }, 
                            }}
                    >
                        CATEGORY
                    </Typography>
                    {categories.map((category) => (
                        <Link key={category.name} href={category.href} underline='hover' color='inherit'>
                            <Typography variant="body2" gutterBottom>
                                {category.name}
                            </Typography>
                        </Link>
                    ))}
                </Box>
                <Box>
                    <Typography variant="subtitle1" 
                        sx={{ 
                            mb: '1rem', 
                            color: theme.palette.customColor.gray,
                            fontSize: { xs: '0.875rem', md: '1rem' } 
                            }}
                    >
                        YOUR ACCOUNT
                    </Typography>
                    {accountLinks.map((account) => (
                        <Link key={account.name} href={account.href} underline='hover' color='inherit'>
                            <Typography variant="body2" gutterBottom>
                                {account.name}
                            </Typography>
                        </Link>
                    ))}
                </Box>
            </Box>
        </Grid>
    );
};



// Footer Main Component
export default function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); 

    const socialMediaLinks: SocialMediaLink[] = [
        { href: 'https://www.facebook.com', icon: <Facebook /> },
        { href: 'https://www.twitter.com', icon: <Twitter /> },
        { href: 'https://www.instagram.com', icon: <Instagram /> },
        { href: 'https://www.pinterest.com', icon: <Pinterest /> },
        { href: 'https://www.youtube.com', icon: <YouTube /> },
    ];

    const socialMediaLinksTop = socialMediaLinks.slice(0, 2);
    const socialMediaLinksBottom = socialMediaLinks.slice(2); 

    const categories = [
        { name: 'Home', href: '/' },
        { name: 'Events', href: '/events' },
        { name: 'Mentors', href: '/mentors' },
        { name: 'About', href: '/about' }
    ];

    const accountLinks = [
        { name: 'My Schedules', href: '/my-schedules' },
        { name: 'Log out', href: '/logout' },
        { name: 'Help', href: '/help' }
    ];



    return (
        <Box component="footer" sx={{ padding: '2rem 0' , width:'100%' }}>
            {isMobile ?(
                //Mobile view
                <Container maxWidth="sm" sx={{paddingX: '1.5rem'}}>
                    <Grid container spacing={4} justifyContent="center" alignItems="center">
                        {/* Newsletter section */}
                        <NewsletterSection />

                        {/* Social Media Section */}
                        <SocialMediaSection socialMediaLinksTop={socialMediaLinksTop} socialMediaLinksBottom={socialMediaLinksBottom} />
                    </Grid>
            </Container>

            ): (

                //Desktop view
                <Container maxWidth="lg" sx={{paddingX: '1rem'}}>
                    <Grid container spacing={4} alignItems="flex-start" justifyContent="center" sx={{mt:'1.5rem',mb:'2rem'}}>
                        <LogoSnsSection socialMediaLinks={socialMediaLinks} />
                        <CategoryAccountSection categories={categories} accountLinks={accountLinks} />
                        <NewsletterSection />
                    </Grid>
                </Container>
            )
            } 
  
        </Box>
    );
}
