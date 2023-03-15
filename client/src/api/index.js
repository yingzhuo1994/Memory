import axios from 'axios';

const url = 'htttp:/localhost:5000/posts';

export const fetchPosts = () => axios.get(url);