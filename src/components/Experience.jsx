import React from 'react'

// MATERIAL UI
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import BusinessIcon from '@mui/icons-material/Business';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
  return (
    <div className='section container'>
        <div>
            <h2 className='headline-2'>My Experiences</h2>
        </div>
        <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.blue"
          className="text-lg font-semibold text-zinc-400 hover:text-blue-400"
        >
          Februari - Juni 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: "30px" }} />
          <TimelineDot sx={{width: {sm:45, md:75}, height: {sm:45, md:75}, backgroundColor: 'green', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <BusinessIcon sx={{width: {sm:25, md:40}, height: {sm:25, md:40},}}/>
          </TimelineDot>
          <TimelineConnector sx={{ height: "30px" }}  />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '20px', px: 2, m: 'auto 0' }}>
          <Typography variant="h6" component="span">
            Intership Full Stack Developer
          </Typography>
          <Typography className='text-zinc-400'>Diskominfo Pesawaran</Typography>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          className='text-zinc-400'
        >
          September - Desember 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot 
              color="primary"
              sx={{width: {sm:45, md:75}, height: {sm:45, md:75},display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <LaptopMacIcon sx={{width: {sm:25, md:40}, height: {sm:25, md:40},}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Kerja Praktik 
          </Typography>
          <Typography className='text-zinc-400'>Teknik sipil Universitas Malikussaleh</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ minHeight: "10px" }}> {/* Sesuaikan tinggi item */}
  <TimelineSeparator>
    <TimelineConnector sx={{ height: "50px" }} /> {/* Atur tinggi garis */}
  </TimelineSeparator>
  <TimelineContent sx={{ py: '12px', px: 2 }}>
    {/* Konten di sini */}
  </TimelineContent>
</TimelineItem>

      
    </Timeline>
    </div>
  );
}

const Experience = () => {
  return (
    <div>
      
    </div>
  )
}


