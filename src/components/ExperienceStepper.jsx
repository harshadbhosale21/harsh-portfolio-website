import React from 'react';

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'
import Chip from '@mui/material/Chip'
import { styled, useTheme } from '@mui/material/styles'
import MuiTimeline from '@mui/lab/Timeline'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import LinearProgress from '@mui/material/LinearProgress'
import useMediaQuery from '@mui/material/useMediaQuery'

const Timeline = styled(MuiTimeline)(({ theme }) => ({
    paddingLeft: 0,
    paddingRight: 0,
    '& .MuiTimelineItem-root:nth-of-type(even) .MuiTimelineContent-root': {
        textAlign: 'left'
    },
    [theme.breakpoints.down('md')]: {
        '& .MuiTimelineItem-root': {
            width: '100%',
            '&:before': {
                display: 'none'
            }
        }
    }
}));

const ImageList = [
    '/stn.webp',
    '/images/misc/plant-2.png',

]

const Data = [
    {
        image: '/stn.webp',
        title: 'Zipcar',
        subtitle: 'Vuejs, React & HTML',
        progress: 24895.65,
        progressColor: 'primary'
    },
    {
        image: '/images/misc/bitbank.png',
        title: 'Bitbank',
        subtitle: 'Sketch, Figma & XD',
        progress: 86500.2,
        progressColor: 'info'
    },
    {
        image: '/images/misc/aviato.png',
        title: 'Aviato',
        subtitle: 'HTML & Anguler',
        progress: 12450.8,
        progressColor: 'secondary'
    }
]


const ExperienceStepper = () => {

    const theme = useTheme()
    const isBelowMdScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <>
            <Timeline position={isBelowMdScreen ? 'right' : 'alternate'}>
                <TimelineItem>
                    {!isBelowMdScreen && (
                        <TimelineOppositeContent color='text.disabled'>
                            <Typography variant='caption' component='div' className='mbs-3 text-white font-semibold text-md'>
                                July 2024  -  Present
                            </Typography>
                        </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                        <TimelineDot color="error" variant="contained" className=" bg-primary-main">
                            <i class="ri-building-2-fill text-white"></i>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        {isBelowMdScreen && (
                            <Typography variant='caption' component='div' className='mbs-3  text-white font-semibold text-md'>
                                July 2024  -  Present
                            </Typography>
                        )}
                        <Card>
                            <CardContent className='bg-primary-main'>
                                <Typography className='text-2xl font-bold text-white mb-2'>
                                    Junior Software Engineer
                                </Typography>
                                <Typography className='mbe-2 text-white font-semibold'>
                                    Soft The Next - Pune, India
                                </Typography>
                                <Typography className='text-white'>

                                </Typography>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    {!isBelowMdScreen && (
                        <TimelineOppositeContent>
                            <Typography variant='caption' component='div' className='mbs-3  text-white font-semibold text-md'>
                                May 2024 - July 2024
                            </Typography>
                        </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                        <TimelineDot color='success' variant='tonal' className='bg-[#03a9f4]'>
                            <i class="ri-building-2-fill text-white"></i>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        {isBelowMdScreen && (
                            <Typography variant='caption' component='div' className='mbs-3  text-white font-semibold text-md'>
                                May 2024 - July 2024
                            </Typography>
                        )}
                        <Card>
                            <CardContent className='bg-[#03a9f4]'>
                                <Typography className='text-2xl font-bold text-white mb-2'>
                                    Frontend Developer Intern
                                </Typography>
                                <Typography className='mbe-2 text-white font-semibold'>
                                    Rego Digital Solutions - Pune, India
                                </Typography>
                                <Typography className='text-white'>

                                </Typography>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    )
}

export default ExperienceStepper