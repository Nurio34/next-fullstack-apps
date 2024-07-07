const indexOf_a: number = "a".charCodeAt(0);
const indexOf_z: number = "z".charCodeAt(0);

export const alphabet = Array(indexOf_z - indexOf_a + 1)
    .fill(null)
    .map((item, ind) => {
        return String.fromCharCode(indexOf_a + ind);
    });
