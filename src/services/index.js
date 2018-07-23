// -------------------------------- API REQUEST FUNCTIONS --------------------------------

export const getRequest = (url) => {
    return fetch(url)
        .then((response) => {
            return response.json();
        })
};

// -------------------------------- END API REQUEST FUNCTIONS --------------------------------

