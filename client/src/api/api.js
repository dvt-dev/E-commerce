import axios from "axios";

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            import.meta.env.VITE_API_BASE_URL + url,
            {
                headers: {
                    Authorization:
                        "bearer " + import.meta.env.VITE_APP_STRIPE_KEY,
                },
            }
        );
        return data;
    } catch (error) {
        console.log("Error: ", error);
        return error;
    }
};
