import { Box, Typography } from '@mui/material'
import React from 'react'
import '../Style.css/TLogout.css'
import ADashboard from './ADashboard'
import ASideBar from './ASideBar'

const AReport
 = () => {
  return (
    <>
    <div className='TLogout'>
      <Box sx={{display:'flex'}}>
        <ASideBar></ASideBar>
        <Box component="main" sx={{FlexGrow:1, p:3}}>
          <Box height={60}/>
          <Typography variant="h2">Admin Report</Typography>
        </Box>
      </Box>
    </div>
    </>
  )
}

export default AReport

