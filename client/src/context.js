import React, { useEffect, useContext, useCallback, useState } from 'react';
import axios from 'axios';

const url = "http://localhost:4000/houses";
const AppContext = React.createContext();

const AppProvider = React.memo(({ children }) => {

    const url = 'http://localhost:4000/houses';
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([])
    const [searchHouse, setSearchHouse] = useState([]);
    const [houses, setHouses] = useState([]);
    const [individualHouse, setIndividualHouse] = useState({});
    const [newPost, setNewPost] = useState(false);
    const [user, setUser] = useState(null);
    const [publish, setPublish] = useState({ title: '', price: '', socialStatus: '', rooms: '', selectedFiles: [] });

    const fetchHouses = async () => {

        setLoading(true);

        try {
            const { data } = await axios.get(`${url}`);
            setHouses(data);

        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        console.log('Context rendered')
        fetchHouses();
    }, [newPost])

    return (
        <AppContext.Provider value={{ loading, setLoading, publish, setPublish, houses, setHouses, searchHouse, setNewPost, setSearchHouse, images, setImages, individualHouse, setIndividualHouse, user, setUser }}>
            {children}
        </AppContext.Provider>
    )
})

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }