let bowling = {
    players: [
        { name: 'Livio', scores: [], total: 0 },
        { name: 'Paola', scores: [], total: 0 },
        { name: 'Filippo', scores: [], total: 0 },
        { name: 'Giuseppe', scores: [], total: 0 }
    ],

    // 10 punteggi casuali per ogni giocatore
    genera_punteggi: function () {
        for (let i = 0; i < this.players.length; i++) {
            for (let j = 0; j < 10; j++) {
                let punteggio = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
                this.players[i].scores.push(punteggio);
            }
            let totale = this.players[i].scores.reduce((acc, n) => acc + n, 0);
            this.players[i].total = totale;
            console.log(this.players[i].name + ' ha totalizzato ' + totale + ' punti');
        }
        console.log(this.players);
    },

    // Punteggio totale per ogni giocatore
    mostra_totali: function () {
        this.players.sort((a, b) => b.total - a.total);
        console.log(`Punteggio totale di ${this.players[0].name}: ${this.players[0].total}`);
        console.log(`Punteggio totale di ${this.players[1].name}: ${this.players[1].total}`);
        console.log(`Punteggio totale di ${this.players[2].name}: ${this.players[2].total}`);
        console.log(`Punteggio totale di ${this.players[3].name}: ${this.players[3].total}`);
    },

    // Aggiunta di un nuovo giocatore
    aggiungi_player: function (nome) {
        this.players.push({ name: nome, scores: [], total: 0 });
        console.log(this.players);
        for (let j = 0; j < 10; j++) {
            let punteggio = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            this.players[this.players.length - 1].scores.push(punteggio);
        }
        this.players[this.players.length - 1].total = this.players[this.players.length - 1].scores.reduce((acc, n) => acc + n, 0);
        console.log(this.players[this.players.length - 1].name + ' ha totalizzato ' + this.players[this.players.length - 1].total + ' punti');
    },

    // Classifica finale
    classifica_players: function () {
        return this.players.sort((a, b) => b.total - a.total);
    },

    // Vincitore
    vincitore: function () {
        let classifica_players = this.classifica_players();
        let vincitore = classifica_players[0];
        console.log(`Il vincitore è ${vincitore.name} con un punteggio di ${vincitore.total}`);
    }
};



bowling.genera_punteggi();
bowling.mostra_totali();
bowling.aggiungi_player('Marco');
console.log(bowling.classifica_players());
bowling.vincitore();