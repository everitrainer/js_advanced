const users = [
    { id: 1, username: 'GamerOne', achievements: ['First Blood', 'Puzzle Master'] },
    { id: 2, username: 'GamerTwo', achievements: ['High Score'] },
    { id: 3, username: 'GamerThree', achievements: ['Victory'] }
];

const games = [
    { id: 101, name: 'Epic Adventure', genre: 'Adventure', price: 29.99 },
    { id: 102, name: 'Puzzle Mania', genre: 'Puzzle', price: 14.99 }
];


// const fetchUserAchievements = (userId, callback) => {
//     setTimeout(() => {
//         const user = users.find(user => user.id === userId);
//         if (user) {
//             setTimeout(() => {
//                 const achievements = user.achievements;
//                 callback(null, achievements);
//             }, 500);
//         } else {
//             callback('User not found', null);
//         }
//     }, 1000);
// };

// const fetchGameDetails = (gameId, callback) => {
//     setTimeout(() => {
//         const game = games.find(game => game.id === gameId);
//         if (game) {
//             callback(null, game);
//         } else {
//             callback('Game not found', null);
//         }
//     }, 1000);
// };

// // Callback hell example
// fetchUserAchievements(1, (error, achievements) => {
//     if (error) {
//         console.error('Error:', error);
//     } else {
//         console.log('Achievements:', achievements);
//         fetchGameDetails(101, (error, game) => {
//             if (error) {
//                 console.error('Error:', error);
//             } else {
//                 console.log('Game:', game);
//             }
//         });
//     }
// });


// Simulate asynchronous operations with callbacks
const fetchUser = (userId, callback) => {
    setTimeout(() => {
        const user = { id: userId, name: 'GamerOne' }; // Simulated user
        callback(null, user);
    }, 1000);
};

const fetchUserAchievements = (userId, callback) => {
    setTimeout(() => {
        const achievements = ['First Blood', 'Puzzle Master']; // Simulated achievements
        callback(null, achievements);
    }, 1000);
};

const fetchGames = (callback) => {
    setTimeout(() => {
        const games = [
            { id: 101, name: 'Epic Adventure' },
            { id: 102, name: 'Puzzle Mania' }
        ]; // Simulated games
        callback(null, games);
    }, 1000);
};

const fetchLeaderboard = (gameId, callback) => {
    setTimeout(() => {
        const leaderboard = [`Player1 - Game ${gameId}`, `Player2 - Game ${gameId}`]; // Simulated leaderboard
        callback(null, leaderboard);
    }, 1000);
};

const fetchLeaderboardStatus = (gameId, callback) => {
    setTimeout(() => {
        const status = `Leaderboard for Game ${gameId} is active.`; // Simulated status
        callback(null, status);
    }, 1000);
};

const fetchGameNews = (gameId, callback) => {
    setTimeout(() => {
        const news = `Latest news for Game ${gameId}`; // Simulated news
        callback(null, news);
    }, 1000);
};

// Simulate complex callback hell
fetchUser(1, (userError, user) => {
    if (userError) {
        console.error('User Error:', userError);
    } else {
        console.log('User:', user);
        fetchUserAchievements(user.id, (achievementsError, achievements) => {
            if (achievementsError) {
                console.error('Achievements Error:', achievementsError);
            } else {
                console.log('Achievements:', achievements);
                fetchGames((gamesError, games) => {
                    if (gamesError) {
                        console.error('Games Error:', gamesError);
                    } else {
                        console.log('Games:', games);
                        fetchLeaderboard(games[0].id, (leaderboardError, leaderboard) => {
                            if (leaderboardError) {
                                console.error('Leaderboard Error:', leaderboardError);
                            } else {
                                console.log('Leaderboard:', leaderboard);
                                fetchLeaderboardStatus(games[0].id, (statusError, status) => {
                                    if (statusError) {
                                        console.error('Status Error:', statusError);
                                    } else {
                                        console.log('Leaderboard Status:', status);
                                        fetchGameNews(games[0].id, (newsError, news) => {
                                            if (newsError) {
                                                console.error('News Error:', newsError);
                                            } else {
                                                console.log('Game News:', news);
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});
