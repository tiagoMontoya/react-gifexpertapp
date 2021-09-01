import React from 'react';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ( { category } ) => {

    // const [images, setimages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );

    // useEffect( () => {
    //     getGifs( category )
    //         .then( imgs => setimages( imgs ) );
    // }, [ category ] );


    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>Cargando...</p> }

            <div className="card-grid">
                { 
                    images.map(img => 
                        (<GifGridItem key={ img.id } img={ img } />)
                    )
                }
            </div>
        </>
    )
}

export default GifGrid;
