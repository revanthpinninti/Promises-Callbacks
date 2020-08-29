
console.log('Before');

// getUser(2559)
//     .then(user => getRepositories(user.userName))
//     .then(repos => getCommits(repos[0]))
//     .then(repo => console.log(repo))
//     .catch(err => console.log('Error', err));

async function displayCommits() {
    try{
    const user = await getUser(2559);
    const repos = await getRepositories(user.userName);
    const commits = await getCommits(repos[0]);
    console.log(commits);
    }
    catch(err){
        console.log('Error', err);
    }
}

displayCommits();
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