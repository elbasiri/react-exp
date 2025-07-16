import { useEffect, useState, type SetStateAction } from 'react'
import { WatchVideo } from './WatchVideo';
import axios from 'axios';

interface Video {
  id: string
  title: string
  thumbnailUrl: string
  duration: string
  uploadTime: string
  views: string
  author: string
  videoUrl: string
  description: string
  subscriber: string
  isLive: boolean
  map: Function
} 

interface Error {
    error: string
}

export interface SourceVideo {
    url: string
    type: string
}

const fetchVideos = async (): Promise<Video[]> => {
    const videosJson = await axios.get<Video[]>('https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json');
    return videosJson.data;
}

export function VideosList() {
    
    // State usage
    const [videos, setVideos] = useState<Video>();
    const [error, setError] = useState<Error>();
    const [isopen, setOpen] = useState<boolean>(true);
    const [source, setSource] = useState<SourceVideo>();

    // Asyncrone function for loading data
    const loadData = async () => {
        try {
            const dataVideos = await fetchVideos();
            dataVideos ? setVideos(dataVideos) : [];
        } catch (err) {   
            setError('Network error, be patient!');
        }
    }

    // useEffect usage
    useEffect( () => {
        loadData()
    }, [])

    return (
    <div className="wrapper_parent">
        <WatchVideo resetSource={() => setSource({ url: '', type: '' })} source={source} isOpen={isopen} />
        { videos ? videos.map((video => {
            return (
                <div key={video.id} className="wrapper_video" style={{backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(' + video.thumbnailUrl + ')'}}>
                    <h2>{video.title}</h2>
                    <button onClick={() => {setSource({ url: video.videoUrl, type: 'mp4' });console.log(video.videoUrl)}}>Watch video</button>
                </div>);
        })) : error }
    </div>
    )
}