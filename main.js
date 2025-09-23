let bowling = {
    players: [
        { name: 'Livio', scores: [] },
        { name: 'Paola', scores: [] },
        { name: 'Filippo', scores: [] },
        { name: 'Giuseppe', scores: [] }
    ],
}
// 10 punteggi casuali per ogni giocatore
for (let i = 0; i < bowling.players.length; i++) {
    for (let j = 0; j < 10; j++) {
        let punteggio = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        bowling.players[i].scores.push(punteggio);
        bowling.players[i].scores.reduce((acc, n) => acc + n, 0);
        console.log(bowling.players[i].name + ' ha totalizzato ' + bowling.players[i].scores.reduce((acc, n) => acc + n, 0) + ' punti');
    }
    let totale = bowling.players[i].scores.reduce((acc, n) => acc + n, 0);
    bowling.players[i].total = totale;
}
console.log(bowling);

// Punteggio totale per ogni giocatore
bowling.players.sort.call(bowling.players, (a, b) => b.total - a.total);
console.log(`Punteggio totale di ${bowling.players[0].name}: ${bowling.players[0].total}`);
console.log(`Punteggio totale di ${bowling.players[1].name}: ${bowling.players[1].total}`);
console.log(`Punteggio totale di ${bowling.players[2].name}: ${bowling.players[2].total}`);
console.log(`Punteggio totale di ${bowling.players[3].name}: ${bowling.players[3].total}`);

// Aggiunta di un nuovo giocatore
let aggiungi_player = bowling.players.push({ name: 'Marco', scores: [] });
console.log(bowling.players);
for (let j = 0; j < 10; j++) {
    let punteggio = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    bowling.players[4].scores.push(punteggio);
    bowling.players[4].scores.reduce((acc, n) => acc + n, 0);
    bowling.players[4].total = bowling.players[4].scores.reduce((acc, n) => acc + n, 0);
    console.log(bowling.players[4].name + ' ha totalizzato ' + bowling.players[4].scores.reduce((acc, n) => acc + n, 0) + ' punti');
}

// Classifica finale
let classifica_players = bowling.players.sort((a, b) => b.total - a.total);
console.log(classifica_players);

// Vincitore
let vincitore = classifica_players[0];
console.log(`Il vincitore è ${vincitore.name} con un punteggio di ${vincitore.total}`);
