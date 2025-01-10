export default function cleanString(input: string) {
    const ansiRegex = /\x1B\[[0-?9;]*[mK]/g;
    return input.replace(ansiRegex, '');
}