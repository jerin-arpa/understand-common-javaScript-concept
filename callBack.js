function greetings(greetingHandler, name) {
    greetingHandler(name);
    // console.log(greetingHandler);
}
// const name = 'Ismat jerin';
// greetings(name);


// const num = [1, 2, 3, 4];
// greetings(num);

function greetingHandler(name) {
    console.log('Good Morning', name);
}

function greetEvening(name) {
    console.log('Good Evening', name);
}

function greetNight(name) {
    console.log('Good Night', name);
}

greetings(greetingHandler, 'Ismat');
greetings(greetingHandler, 'Jerin');
greetings(greetingHandler, 'Arpa');

greetings(greetEvening, 'Ismat');
greetings(greetEvening, 'Jerin');
greetings(greetEvening, 'Arpa');

greetings(greetNight, 'Ismat');
greetings(greetNight, 'Jerin');
greetings(greetNight, 'Arpa');