require('isomorphic-fetch');

// Durations are in minutes
var tasks = [

    {
        'name': 'Write for Envato Tuts+',
        'duration': 120
    },
    {
        'name': 'Work out',
        'duration': 60
    },
    {
        'name': 'Procrastinate on Duolingo',
        'duration': 240
    }
];

var task_names = [];

/* for (var i = 0, max = tasks.length; i < max; i += 1) {

 task_names.push(tasks[i].name);

 }*/

tasks.forEach(function (task) {

    task_names.push(task.name);

});

//console.log(task_names);


/*var task_names = tasks.map(function (task) {

 return task.name + " -js";

 });*/

var task_names = tasks.map((task) => task.name + " -js");
// console.log(task_names);

var difficult_tasks = [];

/* tasks.forEach(function (task) {
 if (task.duration >= 120) {
 difficult_tasks.push(task);
 }
 });*/

/*var difficult_tasks = tasks.filter(function (task) {
    return task.duration >= 120;
});*/

// Using ES6
var difficult_tasks = tasks.filter((task) => task.duration >= 120);
//console.log(task_names);

var numbers = [1, 2, 3, 4, 5],
    total = 0;

numbers.forEach(function (number) {
    total += number;
});

var total = [1, 2, 3, 4, 5].reduce(function (previous, current) {
    return previous + current;
}, 0);

var total_time = tasks.reduce(function (previous, current) {
    return previous + current;
}, 0);

// Using arrow functions
var total_time = tasks.reduce((previous, current)=> previous + current);

// PROMISES

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        // do stuff with `data`, call second `fetch`
        return fetch('https://jsonplaceholder.typicode.com/users/' + data[0].id);
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //console.log(data.name);
    })
    .catch(function (error) {
        console.log('Requestfailed', error)
    });
;

//GENERATORS

function *IdGenerator() {
    let id = 0;
    while (true) {
        yield  ++id;
    }
}

const idGenerator = IdGenerator();
const ninja1 = {id: idGenerator.next().value};
const ninja2 = {id: idGenerator.next().value};
const ninja3 = {id: idGenerator.next().value};

/*console.log(ninja1.id);
console.log(ninja2.id);
console.log(ninja3.id);*/

// PROMISES + GENERATORS
function fetchUrl(url) {
    var headers = new Headers();
    var request = new Request(url);

    return fetch(request).then(function (res) {
        return res.json();
    });
}

function* generate() {
    var baseUrl = "https://jsonplaceholder.typicode.com/users";
    var users = yield fetchUrl(baseUrl);

    var url = baseUrl + "/1";

    var user = yield fetchUrl(url);
}

var generator = generate();

generator.next().value.then(function (userData) {

    return generator.next(userData.users).value.then(function (users) {
        console.log(users.name);
        return users;
    });
});

/*
 function wrapperOnFetch(url){
 var headers = new Headers();
 headers.append('Accept', 'application/vnd.github.v3+json');
 var request = new Request(url, {headers: headers});

 return fetch(request).then(function(res){
 return res.json();
 });
 }

 function* gitHubDetails(orgName) {
 var baseUrl = "https://api.github.com/orgs/";
 var url = baseUrl + orgName;

 var reposUrl = yield wrapperOnFetch(url);
 var repoFullName = yield wrapperOnFetch(reposUrl);
 yield wrapperOnFetch(`https://api.github.com/repos/${repoFullName}/contributors`);
 }

 var generator = gitHubDetails("aspnet");

 generator.next().value.then(function (userData) {
 //Update UI

 return generator.next(userData.repos_url).value.then(function (reposData) {
 return reposData;
 });
 }).then(function (reposData) {
 console.log(reposData[0].name);

 return generator.next(reposData[1].full_name).value.then(function (selectedRepoCommits) {
 //console.log(selectedRepoCommits);
 });
 });
 */
