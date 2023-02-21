// const MIN_SIMILARITY = 0.7;

// const similarity = (searchTerm, title) => {
//     const maxChars = Math.min(searchTerm.length, title.length);
//     let score = 0;

//     for (let i = 0; i < maxChars; i++) {
//         if (searchTerm[i].toLowerCase() === title[i].toLowerCase()) {
//             score += 1;
//         }
//     }

//     return score;
// }

// export function fuzzyFilter(posts, searchTerm) {
    // return list
        // .filter(post => {
        //     const similarityScore = similarity(searchTerm, post.title);
        //     return (similarityScore / searchTerm.length) >= MIN_SIMILARITY;
        // })
        // Another way:
        // .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
// }