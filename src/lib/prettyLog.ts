/**
 * console.log stuff with css stylings
 * @param content
 * String to print
 * @param styles
 * Record of css properties and values
 */
export function prettyLog(content: string, styles: Record<string, string>) {
    const s = Object.entries(styles)
        .map(([prop, value]) => `${prop}: ${value}`)
        .join(";");
    console.log(`%c${content}`, s);
}
