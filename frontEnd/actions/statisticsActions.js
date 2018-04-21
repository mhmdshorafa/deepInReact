const axios = require('axios')
const getDevices = () => {
  return new Promise((resolve) => {
    axios('http://deep-in.herokuapp.com/api/devices', {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then((res) => {
      resolve(res)
    })
    .catch((err) => {
      console.log(err);
    });
  })

};

const getStatistics = () => {
  return new Promise((resolve) => {
    axios('http://deep-in.herokuapp.com/api/statistics', {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then((res) => {
      resolve(res)
    })
    .catch((err) => {
      console.log(err);
    });
  })

};

const getTraffic = () => {
  return new Promise((resolve) => {
    axios('http://deep-in.herokuapp.com/api/pagesVisits', {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then((res) => {
      resolve(res)
    })
    .catch((err) => {
      console.log(err);
    });
  })

};

const getClicks = () => {
  return new Promise((resolve) => {
    axios('http://deep-in.herokuapp.com/api/clicks', {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then((res) => {
      resolve(res)
    })
    .catch((err) => {
      console.log(err);
    });
  })

};

export {
  getDevices,
  getStatistics,
  getTraffic,
  getClicks
};
