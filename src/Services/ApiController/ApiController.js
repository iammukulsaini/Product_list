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
        console.log(error);
        console.log('Something went wrong!!!');
        throw new Error('Something went wrong!!!');
    }
};

export {
    GetApiClient as GET,
};