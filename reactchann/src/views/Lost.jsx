import ocean from '../assets/ocean.jpg';

export default function Lost(){

    return (

    <div className="heart">
        <div className="card col-md-8">
            <div className="text-center">
                <div className="card alert-light">
                    <p>
                        Are you lost my dear friend in this deep dark ocean?
                    </p>
                    <p>
                        Come on and dive with us
                    </p>
                    <p>You Super Freak!</p>
                </div>
                <div>
                    <img src={ocean} width={220} height={250}  className='.img-thumbnail .img-fluid rounded'/>
                </div>
                <div className='card'>
                <figure>
                    <audio
                        controls
                        src="http://dora-robo.com/muzyka/70's-80's-90's%20/Rick%20James%20-%20Super%20Freak.mp3">
                           { 
                           // <a href="http://dora-robo.com/muzyka/70's-80's-90's%20/Rick%20James%20-%20Super%20Freak.mp3"></a>
                           }
                    </audio>
                </figure>
                </div>
            </div>
        </div>
    </div>
    )
}