// AUTO GENERATED DO NOT MODIFY!
// MERGED FROM build/client/types/typedef.xlsx.ts AND test/output/client/types/typedef.xlsx.ts

import {
    TaskArgs,
} from "../define/index";

export interface GeneratedTypedefCoinRow {
    /**
     * ### (type: int) (location: A1) (checker: x)
     */
    readonly id: number;
    /**
     * 条件 (type: string) (location: C1) (checker: x)
     */
    readonly condition: string;
}

export interface GeneratedTypedefMainRow {
    /**
     * ### (type: int) (location: A1) (checker: x)
     */
    readonly id: number;
    /**
     * 条件 (type: string) (location: C1) (checker: x)
     */
    readonly condition: string;
    /**
     * 参数 (type: TaskArgs) (location: D1) (checker: x)
     */
    readonly args: TaskArgs;
    /**
     * 数据 (type: [float, int][]?) (location: E1) (checker: x)
     */
    readonly data?: readonly [number, number][];
}

export interface GeneratedTypedefTable {
    main: Record<number | string, GeneratedTypedefMainRow>;
}
