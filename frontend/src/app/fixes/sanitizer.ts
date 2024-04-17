export class MySanitizer {
    static removeXSS(input: string): string {
        return input.replace(/[<>\\/]/g, '');
    }
}