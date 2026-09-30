// js/modules/fetchGetData.js
const fetchGetData = async (url, headers = {}) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers,
        });

        const contentType = response.headers.get('Content-Type') || '';

        if (!response.ok || !contentType.includes('application/json')) {
            throw new Error('Server did not return JSON');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export { fetchGetData };
