import { Button, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TypewriterComponent from 'typewriter-effect';

const HomePage = () => {


    return (
        <>
            <div className="bg-[url('/port-bg.webp')] bg-cover bg-fixed bg-center min-h-screen h-auto w-full relative">
                <div className="w-full pt-24 min-h-screen h-auto bg-black/60 p-8">
                    <section className='py-8 md:py-16 lg:py-16'>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6} lg={6} className='flex items-center'>
                                <div className="w-full ps-0 md:ps-24 lg:ps-24">
                                    <Typography className='text-center mb-3 md:text-start lg:text-start text-2xl md:text-3xl lg:text-3xl text-white'>Hello There 👋</Typography>
                                    <Typography className='text-center font-bold mb-3 md:text-start lg:text-start text-3xl md:text-5xl lg:text-5xl'>
                                        <TypewriterComponent
                                            onInit={(typewriter) => {
                                                typewriter
                                                    .typeString(`<span style="color: white;">I'M</span> <span style="color: #00BFFF;">Harshad Bhosale</span>`)
                                                    .pauseFor(100000) // Keeps the text visible indefinitely
                                                    .start();
                                            }}
                                            options={{
                                                cursor: '|', // Cursor symbol
                                                cursorClassName: "text-white", // Apply white color to the cursor
                                            }}
                                        />
                                    </Typography>
                                    <Typography className='text-center font-bold mb-3 md:text-start lg:text-start text-2xl md:text-3xl lg:text-3xl text-primary-main'>Software Developer</Typography>
                                    <div className="w-full flex justify-center md:justify-start lg:justify-start items-center">
                                        <Button size='small' variant='contained' color='primary' className='font-bold me-2' startIcon={<i className="ri-file-fill"></i>}>My Resume</Button>
                                        <Button size='small' variant='outlined' color='info' className='font-bold ms-2' startIcon={<i className="ri-mail-fill"></i>}>Contact Me</Button>
                                    </div>
                                    <div className="w-full my-3">
                                        <Typography className='mt-3 text-center text-lg md:text-start lg:text-start font-semibold text-white'>
                                            My Dailing Coding Actividy:
                                        </Typography>
                                        <Typography>

                                        </Typography>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} className='flex items-center justify-center'>
                                <img
                                    src="/profilehead.webp"
                                    alt="profile-header"
                                    className='w-56 md:w-96 lg:w-96'
                                />
                            </Grid>
                        </Grid>
                    </section>

                    {/* Section-2  */}
                    <section className='py-8 md:py-16  lg:py-16'>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6} lg={6} order={{ xs: 2, md: 1 }} className='flex items-center justify-center'>
                                <img
                                    src="/emoji-home.webp"
                                    alt="emoji"
                                    className='w-40 md:w-56 lg:w-56'
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} order={{ xs: 1, md: 2 }} >
                                <Typography className=' text-center text-2xl md:text-4xl lg:text-4xl font-bold text-white'>
                                    Here’s a little <span className=' text-primary-main'>about me</span>.
                                </Typography>
                                <Typography className='text-center md:text-start lg:text-start text-white text-xl my-2'>
                                    Passionate about creating dynamic web and mobile applications, I've immersed myself in the <span className='font-bold text-[#03a9f4]'>Software Development</span> with expertise in <span className='text-primary-main italic font-bold'>MERN Stack</span>.
                                </Typography>
                                <Typography className='text-center md:text-start lg:text-start text-white text-xl my-2'>
                                    Skilled in <span className='text-primary-main font-bold italic'>MongoDB, Express.js, React.js, and Node.js,</span> I thrive on turning ideas into functional and user-friendly solutions.
                                </Typography>
                                <Typography className='text-center md:text-start lg:text-start text-white text-xl my-2'>
                                    Beyond coding, I'm captivated by emerging technologies and enjoy exploring the endless possibilities they offer. <span className='font-bold text-xl text-[#03a9f4] hover:cursor-pointer hover:text-primary-main'>Know More <i className='ri-arrow-right-line'></i></span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </section>

                    {/* Section-3  */}
                    <section className='py-8 md:py-16  lg:py-16'>
                        <Typography className='text-center text-white text-2xl md:text-4xl lg:text-4xl font-bold'>My Work <span className='text-primary-main'>Experience</span></Typography>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HomePage
