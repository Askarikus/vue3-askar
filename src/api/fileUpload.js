import axios from '@/api/axios';

const uploadFile = (formData) => {
	return axios.post('/file-upload', formData,{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
})};

export default {
	uploadFile
};
