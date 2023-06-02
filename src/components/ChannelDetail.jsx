import {React, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';

import {Videos, ChannelCard} from './'; //reuse these components
import { fetchFromAPI } from '../utils/fetchFromAPI';

//when we click to channelCard, route is to be /channel/channelId

const ChannelDetail = () => {
    const{id}=useParams();//channelId
    const [ChannelDetail,setChannelDetail]=useState(null);
    const [videos, setVideos]=useState([]);

    console.log(ChannelDetail, videos)

    useEffect(()=>{
        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data)=>setChannelDetail(data?.items[0]));

        fetchFromAPI(`search?.channelId=${id}&part=snippet&order=date`)
        .then((data)=>setVideos(data?.items));

    },[id])//re-render whenever the id changed



  return (
    <Box minHeight="95vh">
        <Box>
            <div style={{
                height:'300px',
                background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                zIndex: 10,
            }
            }/>
            <ChannelCard channelDetail={ChannelDetail} marginTop='-110px'/>
            {/* we make change of style of channelCard by passing props to the components, then change the style in the Box tag in channelCard */}
        </Box>

        <Box display="flex" p="2">
            <Box sx={{mr:{sm:'100px'}}}/>
            <Videos videos={videos}/>
        </Box>
    </Box>
  )
}

export default ChannelDetail