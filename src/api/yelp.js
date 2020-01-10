import axios from 'axios';


export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer LmSZ-sYCE3vgs5R-vHjTL5o0OFMt3khlpDqPSTUrwKCBxsIbJVwNesNHwFZD9e5CWlobNc0EI5C2CDuPMcLrjXYoAvvmXJIm9ZUkdQXB2Nm3sfWwM5oYIAC9ZzEWXnYx'
    }
});