
console.log('Before');

// getUser(2559, user =>{
//     console.log(user.userId);
//     console.log(user.userName);
//     getRepositories(user.gitHubUsername, (repos) => {
//         console.log(repos);
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         })
//     })
// });


getUser(2559)
    .then(user => getRepositories(user.userName))
    .then(repos => getCommits(repos[0]))
    .then(repo => console.log(repo))
    .catch(err => console.log('Error', err));



console.log('After');

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Read data from Database...');
            resolve({userId:id, userName:'Revanth'});
        }, 2000);
    });
}

function getRepositories(userName){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading Repositories...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading commits from Repository...');
            resolve(repo);
        }, 2000);
    });    
}