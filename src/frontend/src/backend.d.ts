import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type TransactionID = bigint;
export type Time = bigint;
export type RuleID = bigint;
export type CategoryID = bigint;
export interface backendInterface {
    addCategory(title: string): Promise<CategoryID>;
    addRule(keyword: string, categoryId: CategoryID): Promise<RuleID>;
    addTransaction(amount: number, description: string, timestamp: Time, categoryId: CategoryID | null): Promise<TransactionID>;
}
