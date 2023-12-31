import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';
import FlexBetween from '@/components/FlexBetween';
import PixIcon from "@mui/icons-material/Pix";

type Props = {}

const Navbar = (props: Props) => {
  const [selected, setSelected]= useState("dashboard");
  const { palette } = useTheme()
  return <FlexBetween 
    mb="0.25rem" 
    p="0.5rem 0rem"
    color={palette.grey[300]}
  >
    {/* LEFT SIDE */}
    <FlexBetween gap="0.75rem">
      <PixIcon sx={{ fontSize: "28px"}}/>
      <Typography variant='h4' fontSize={'16px'}>
        Finanseer
      </Typography>
    </FlexBetween>

    {/* RIGHT SIDE */}
    <FlexBetween gap="2rem">
      <Box sx={{ "&:hover": { color : palette.primary[100]} }}>
        <Link
          to="/"
          onClick={()=>setSelected('dashboard')}
          style={{
            color: selected === 'dashboard' ? "inherit" : palette.grey[700],
            textDecoration: "inherit"
          }}
        >
          dashboard
        </Link>
      </Box>
      <Box sx={{ "&:hover": { color : palette.primary[100]} }}>
        <Link
          to="/predition"
          onClick={()=>setSelected('predition')}
          style={{
            color: selected === 'predition' ? "inherit" : palette.grey[700],
            textDecoration: "inherit"
          }}
        >
          predition
        </Link>
      </Box>
    </FlexBetween>
  </FlexBetween>
}

export default Navbar