export function filterArrayByRegex(array: string[], regex: RegExp) {
    return array.filter((s) => regex.test(s));
}
