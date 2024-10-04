const GetApiClient = async (url) => {
    try {
        const response = await fetch(url);
        const Jsonresponse = await response.json()
        let res = []

        if (response?.status === 200) {
            res = Jsonresponse
            return res;
        }


    } catch (error) {
        // console.error('API Error:', error?.response?.response);
        if (error?.response) {
            console.error('error?.response.data', error?.response?.data);
            console.log(error?.response?.data?.data?.msg || 'Something went wrong!');
            return error?.response?.data;
        } else {
            console.log('Network Error or Server is unreachable!');
            throw new Error('Network Error or Server is unreachable!');
        }
    }
};

export {
    GetApiClient as GET,
};