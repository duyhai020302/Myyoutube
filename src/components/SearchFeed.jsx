import React from 'react';
import { useState, useEffect } from 'react';
import {Box, Typography} from '@mui/material';
import { Videos} from './';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';


const SearchFeed = () => {

  const {SearchTerm} =useParams();
  const [videos, setVideos]=useState([]);
  // videos.map((video)=>{console.log(video.id.videoId)})

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${SearchTerm}`)
    .then((data)=>setVideos(data.items))
  },[SearchTerm]) //recall function whenever change the category
  return (
    <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
    <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}} >
      Search Results for <span style={{color:'#F31503'}}>{SearchTerm}</span> videos
    </Typography>

    <Videos videos={videos}/>
  </Box>
  );
}

export default SearchFeed;