export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    // we are going to jump sqrt of n no of times the array and then walk linearly.

    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    // from the above we found that it breaks on some point.
    // we now go to previous without breaking point and walk linearly.

    i -= jmpAmount;

    for (let j = 0; j <= breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }
    // i is the breaking point where it breaks.
    return -1;
}
