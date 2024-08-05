const users = [
    { id: 1, username: 'GamerOne', achievements: ['First Blood', 'Puzzle Master'] },
    { id: 2, username: 'GamerTwo', achievements: ['High Score'] },
    { id: 3, username: 'GamerThree', achievements: ['Victory'] }
];

const games = [
    { id: 101, name: 'Epic Adventure', genre: 'Adventure', price: 29.99 },
    { id: 102, name: 'Puzzle Mania', genre: 'Puzzle', price: 14.99 }
];



// // Fetch user achievements using promises
// const fetchUserAchievementsPromise = (userId) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const user = users.find(user => user.id === userId);
//             if (user) {
//                 setTimeout(() => {
//                     resolve(user.achievements);
//                 }, 500);
//             } else {
//                 reject('User not found');
//             }
//         }, 1000);
//     });
// };

// // Fetch game details using promises
// const fetchGameDetailsPromise = (gameId) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const game = games.find(game => game.id === gameId);
//             if (game) {
//                 resolve(game);
//             } else {
//                 reject('Game not found');
//             }
//         }, 1000);
//     });
// };

// // Using promises to handle sequential operations
// fetchUserAchievementsPromise(1)
//     .then(achievements => {
//         console.log('Achievements:', achievements);
//         return fetchGameDetailsPromise(101);
//     })
//     .then(game => {
//         console.log('Game:', game);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });


const fetchUserPromise = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ id: userId, name: 'GamerOne' }), 1000);
    });
};

const fetchUserAchievementsPromise = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(['First Blood', 'Puzzle Master']), 1000);
    });
};

const fetchGamesPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            { id: 101, name: 'Epic Adventure' },
            { id: 102, name: 'Puzzle Mania' }
        ]), 1000);
    });
};

const fetchLeaderboardPromise = (gameId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([`Player1 - Game ${gameId}`, `Player2 - Game ${gameId}`]), 1000);
    });
};

const fetchLeaderboardStatusPromise = (gameId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Leaderboard for Game ${gameId} is active.`), 1000);
    });
};

const fetchGameNewsPromise = (gameId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Latest news for Game ${gameId}`), 1000);
    });
};

fetchUserPromise(1)
    .then(user => {
        console.log('User:', user);
        return fetchUserAchievementsPromise(user.id);
    })
    .then(achievements => {
        console.log('Achievements:', achievements);
        return fetchGamesPromise();
    })
    .then(games => {
        console.log('Games:', games);
        return fetchLeaderboardPromise(games[0].id);
    })
    .then(leaderboard => {
        console.log('Leaderboard:', leaderboard);
        return fetchLeaderboardStatusPromise(games[0].id);
    })
    .then(status => {
        console.log('Leaderboard Status:', status);
        return fetchGameNewsPromise(games[0].id);
    })
    .then(news => {
        console.log('Game News:', news);
    })
    .catch(error => {
        console.error('Error:', error);
    });
