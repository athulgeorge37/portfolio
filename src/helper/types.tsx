// to use MakeAtLeastOneTypeRequired, wrap it around an interface
//  MakeAtLeastOneTypeRequired<MyInterface>
export type MakeAtLeastOneTypeRequired<T> = {
    [K in keyof T]: { [L in K]: T[L] } & { [L in Exclude<keyof T, K>]?: T[L] };
}[keyof T];
