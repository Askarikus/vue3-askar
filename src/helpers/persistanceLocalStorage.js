export const getItem = (key) => {
	try {
		return JSON.parse(localStorage.getItem(key));
	} catch (e) {
		console.log('Error while retrieving data from localStorage', e);
		return null;
	}
};

export const setItem = (key, value) => {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (e) {
		console.log('Error while setting data to localStorage', e);
	}
};

export const deleteItem = (key) => {
	try {
		localStorage.removeItem(key);
	} catch (e) {
		console.log('Error while deleting data from localStorage', e);
	}
};
