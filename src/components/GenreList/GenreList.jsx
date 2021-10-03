import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function GenreList() {
    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    return (
        <div>
            <h3>Genres</h3>
            <section className="genres">
                {genres.map(genre => {
                    return (
                        <GenreItem key={genre.id}
                        genre={genre} />
                    )
                })}
            </section>
        </div>
    )
}

export default GenreList;