import React, { useState } from 'react'
import './MyReels.css'
import { dataVideo } from '../../../Utils/dataV';
import { ReelsCard } from './ReelsCard/ReelsCard';
import { ReelsShow } from './ReelsShow/ReelsShow';
export const MyReels = () =>
{
    const [ selectedVideo, setSelectedVideo ] = useState(dataVideo[0]);
    const [ fullWork, setFullWork ] = useState( false );
    const handleClick = (item) =>
    {
        setSelectedVideo( item );
    }
    const fullWorkHandler = () =>
    {
        setFullWork( !fullWork );
    }

    return (
        <div className="reels-container ">
            <div className="reels-heading">
            <h4>My Reels</h4>
            <p>CLICK ON EACH reels TO SEE THE FULL WORK WITH DESCRIPTION</p>
            </div>
            <div className="card-container">
                {
                dataVideo.map( ( e ) => (
                        
                        <ReelsCard
                            
                            v={ e.v }
                            des={ e.text }
                            eKey={ e.key }
                            isActive={ selectedVideo.title === e.title }
                            onClick={ () =>
                            {
                                handleClick( e );
                                fullWorkHandler();
                            }}
                    />
                )
            )
            }
            </div>
            <ReelsShow
                v={selectedVideo.v}
                ekey={selectedVideo.key}
                des={ selectedVideo.title }
                fullWork={ fullWork }
                fullWorkHandler={fullWorkHandler}
            />
        </div>
    )
}
