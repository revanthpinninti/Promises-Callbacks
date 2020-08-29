// console.log('Before');
// console.log('Read data from Database');
// console.log('After');








// console.log('Before');
// setTimeout(() => {
//     console.log('Read data from Database');    
// }, 2000);
// console.log('After');










// console.log('Before');
// //const user = getUser(2559);
// console.log(getUser(2559));
// console.log('After');

// function getUser(id){
//     setTimeout(() => {
//         console.log('Read data from Database');
//         return {userId:id, userName:'Revanth'};
//     }, 2000);
// }



// 1. Callbacks
// 2. Promises
// 3. Async/await



// console.log('Before');
// getUser(2559, user =>{
//     console.log('User', user);
// });
// console.log('After');

// function getUser(id, callback){
//     setTimeout(() => {
//         console.log('Read data from Database...');
//         callback({userId:id, userName:'Revanth'});
//     }, 2000);
// }











// console.log('Before');

// Asynchronous

// getUser(2559, user =>{
//     console.log(user.userId);
//     console.log(user.userName);
//     getRepositories(user.userName, (repos) => {
//         console.log(repos);
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         })
//     })
// });


// Synchronous
// const user = getUser(2559);
// const repos = getRepositories(user);
// const commits = getCommits(repos[0]);



// console.log('After');

// function getUser(id, callback){
//     setTimeout(() => {
//         console.log('Read data from Database...');
//         callback({userId:id, userName:'Revanth'});
//     }, 2000);
// }

// function getRepositories(userName, callback){
//     setTimeout(() => {
//         console.log('Reading Repositories...');
//         callback(['repo1', 'repo2', 'repo3']);
//     }, 2000);
// }

// function getCommits(repo, callback){
//     setTimeout(() => {
//         console.log('Reading commits from Repository...');
//         callback(repo);
//     }, 2000);
// }