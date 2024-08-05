const users = [
    { id: 1, username: 'GamerOne', achievements: ['First Blood', 'Puzzle Master'] },
    { id: 2, username: 'GamerTwo', achievements: ['High Score'] },
    { id: 3, username: 'GamerThree', achievements: ['Victory'] }
];


// Simulate a function that fetches user data
const getUserById = (userId, callback) => {
    setTimeout(() => {
        const user = users.find(user => user.id === userId);
        if (user) {
            callback(null, user);
        } else {
            callback('User not found', null);
        }
    }, 1000); // Simulates a delay (e.g., network request)
};

// Use the callback function
getUserById(1, (error, user) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('User:', user);
    }
});
