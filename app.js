const axios = require('axios');

let createContainer = async function() {
    return await axios({
        method: 'POST',
        socketPath: '/var/run/docker.sock',
        url: 'http://localhost/containers/create',
        data: {
            image: 'nginx'
        }
    }).catch(err => {
        console.log(err.response.data);
        process.exit();
    });
};

let startContainer = async function(containerId) {
    return await axios({
        method: 'POST',
        socketPath: '/var/run/docker.sock',
        url: `http://localhost/containers/${containerId}/start`
    }).catch(err => {
        console.log(err.response.data);
        process.exit();
    });
};

let start = async () => {
    let createResponse = await createContainer();
    let containerId = createResponse.data.Id;
    await startContainer(containerId);
};

start();