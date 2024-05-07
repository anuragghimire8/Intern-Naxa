
export const fetchDataFromAPI = async () => {
    try {
        const response = await fetch('https://admin.naxa.com.np/api/services');
        if (!response.ok) {
           console.log(Error)
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
