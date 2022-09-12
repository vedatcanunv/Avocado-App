import React, {useState, useEffect, createContext} from 'react';
import Config from 'react-native-config';
import axios from 'axios';

export const CustomContext = createContext({});

export const CustomProvider = ({children}) => {
  const [initializing, setInitializing] = useState(true);
  const [providerData, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(Config.API_URL);
      responseData != '' && setData(responseData);
      setInitializing(false);
    } catch (err) {
      setError(err.message);
      setInitializing(false);
    }
  };

  return (
    <CustomContext.Provider value={{initializing, providerData, error}}>
      {children}
    </CustomContext.Provider>
  );
};

// data çektikten sonra initializing false olucak

// if (initializing) {
//   setInitializing(true);
//   return <SplashScreen />;
// } else {
//   setData(data);
// }

//   const fetchData = async () => {
//     try {
//       const {data: responseData} = await axios.get(url);
//       setData(responseData);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };
