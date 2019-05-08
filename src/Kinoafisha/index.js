// Core
import React, { useState, useEffect } from 'react';

// Instruments
import './styles/main.css';
import { getStyles } from '../instruments';

// Api
import { api } from '../Api';

export const Kinoafisha = () => {
    const [ selectedFilter, setSelectedFilter ] = useState('upcoming');
    const [ movies, setMovies ] = useState([]);

    const styles = getStyles({
        selectedFilter,
    });

    useEffect(() => {
        const getMoviesByFilter = async () => {
            const newMovies = await api.getMovies(selectedFilter);

            setMovies(newMovies);
        };
        getMoviesByFilter();
    }, []);

    return (
        <>
            <div className = 'header'>
                <div className = 'logo' />
                <div className = 'filters'>
                    <div
                        className = { styles.latestFilter }
                        data-name = 'latest'
                        onClick = { (event) => setSelectedFilter(event.currentTarget.dataset.name)
                        }>
                        <span>Новинки 2019</span>
                    </div>
                    <div
                        className = { styles.upcomingFilter }
                        data-name = 'upcoming'
                        onClick = { (event) => setSelectedFilter(event.currentTarget.dataset.name)
                        }>
                        <span>Скоро в кинотеатрах</span>
                    </div>
                    <div
                        className = { styles.popularFilter }
                        data-name = 'popular'
                        onClick = { (event) => setSelectedFilter(event.currentTarget.dataset.name)
                        }>
                        <span>В топ-чартах</span>
                    </div>
                </div>
            </div>
        </>
    );
};
