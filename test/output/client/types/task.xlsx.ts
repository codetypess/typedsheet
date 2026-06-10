// AUTO GENERATED DO NOT MODIFY!
// MERGED FROM build/client/types/task.xlsx.ts AND test/output/client/types/task.xlsx.ts

import {
    Items,
    TaskArgs,
    TaskType,
} from "../define/index";

export interface GeneratedTaskBranchRow {
    /**
     * ### (type: int) (location: A1) (checker: x)
     */
    readonly id: number;
    /**
     * 任务组 (type: int) (location: C1) (checker: x)
     */
    readonly group: number;
    /**
     * 显示排序 (type: int) (location: D1) (checker: x)
     */
    readonly sort: number;
    /**
     * 任务类型 (type: TaskType) (location: E1) (checker: x)
     */
    readonly type: TaskType;
    /**
     * 名字 (type: string) (location: F1) (checker: x)
     */
    readonly name: string;
    /**
     * 描述 (type: string) (location: G1) (checker: x)
     */
    readonly desc: string;
    /**
     * 后置任务 (type: int?) (location: H1) (checker: #branch.id)
     */
    readonly next_task?: number;
    /**
     * 条件 (type: string) (location: I1) (checker: x)
     */
    readonly condition: string;
    /**
     * 累计 (type: bool?) (location: J1) (checker: x)
     */
    readonly total?: boolean;
    /**
     * 参数 (type: @args_type) (location: K1) (checker: x)
     */
    readonly args: Record<string, number | string>; // override
    /**
     * 奖励 (type: items) (location: M1) (checker: $[*].id==item#item.id)
     */
    readonly reward: Items;
    /**
     * 任务icon (type: string) (location: N1) (checker: x)
     */
    readonly icon: string;
    /**
     *  (type: string?) (location: O1) (checker: x)
     */
    readonly custom?: string;
    /**
     * 完成后自动提交 (type: int?) (location: P1) (checker: x)
     */
    readonly auto_submit?: number;
}

export interface GeneratedTaskEventsRow {
    /**
     * ### (type: int) (location: A1) (checker: x)
     */
    readonly id: number;
    /**
     * 显示排序 (type: int) (location: C1) (checker: x)
     */
    readonly sort: number;
    /**
     * 任务类型 (type: int) (location: D1) (checker: x)
     */
    readonly type: number;
    /**
     * 描述 (type: string) (location: E1) (checker: x)
     */
    readonly desc: string;
    /**
     * 奖励 (type: items) (location: H1) (checker: $[*].id==item#item.id)
     */
    readonly reward: Items;
    /**
     * vip奖励 (type: items) (location: I1) (checker: $[*].id==item#*.id)
     */
    readonly vip_reward: Items;
    /**
     * 任务icon (type: string) (location: J1) (checker: x)
     */
    readonly icon: string;
}

export interface GeneratedTaskExchangeRow {
    /**
     * ### (type: int) (location: A1) (checker: x)
     */
    readonly id: number;
    /**
     * 显示排序 (type: int) (location: C1) (checker: x)
     */
    readonly sort: number;
    /**
     * 任务类型 (type: int) (location: D1) (checker: x)
     */
    readonly type: number;
    /**
     * 描述 (type: string) (location: E1) (checker: x)
     */
    readonly desc: string;
    /**
     * 后置任务 (type: int?) (location: F1) (checker: task#*.id)
     */
    readonly next_task?: number;
    /**
     * 累计 (type: bool?) (location: H1) (checker: x)
     */
    readonly total?: boolean;
    /**
     * 参数 (type: table) (location: I1) (checker: x)
     */
    readonly args: Record<string, number | string>; // override
    /**
     * 奖励 (type: items) (location: J1) (checker: @ItemArrayChecker)
     */
    readonly reward: Items;
    /**
     * 任务icon (type: string) (location: K1) (checker: x)
     */
    readonly icon: string;
    /**
     * 任务npc和对话 (type: json?) (location: L1) (checker: x)
     */
    readonly custom?: Record<string, number | string>; // override
}

export interface GeneratedTaskMainRow {
    /**
     * ### (type: int) (location: A1) (checker: x)
     */
    readonly id: number;
    /**
     * 显示排序 (type: int) (location: C1) (checker: $ > 0 && $ < 20)
     */
    readonly sort: number;
    /**
     * 任务类型 (type: TaskType) (location: D1) (checker: #define.value&key1=TASK_TYPE)
     */
    readonly type: TaskType;
    /**
     * 描述 (type: string) (location: E1) (checker: x)
     */
    readonly desc: string;
    /**
     * 后置任务 (type: int?) (location: F1) (checker: task#*.id&type=MAIN)
     */
    readonly next_task?: number;
    /**
     * 支线任务 (type: int[]?) (location: G1) (checker: $[*]==#branch.id)
     */
    readonly branch_tasks?: readonly number[];
    /**
     * 条件 (type: string) (location: H1) (checker: x)
     */
    readonly condition: string;
    /**
     * 累计 (type: bool?) (location: I1) (checker: x)
     */
    readonly total?: boolean;
    /**
     * 参数 (type: table) (location: J1) (checker: @TaskArgsChecker)
     */
    readonly args: Record<string, number | string>; // override
    /**
     * 奖励 (type: items) (location: K1) (checker: @ItemArrayChecker)
     */
    readonly reward: Items;
    /**
     * 任务icon (type: string) (location: L1) (checker: x)
     */
    readonly icon: string;
    /**
     *  (type: json?) (location: M1) (checker: x)
     */
    readonly custom?: Record<string, number | string>; // override
    /**
     * 完成后自动提交 (type: int?) (location: N1) (checker: [1])
     */
    readonly auto_submit?: number;
}

export interface GeneratedTaskWeeklyRow {
    /**
     * ### (type: int) (location: A1) (checker: x)
     */
    readonly id: number;
    /**
     * 显示排序 (type: int) (location: C1) (checker: x)
     */
    readonly sort: number;
    /**
     * 任务类型 (type: int) (location: D1) (checker: x)
     */
    readonly type: number;
    /**
     * 描述 (type: string) (location: E1) (checker: x)
     */
    readonly desc: string;
    /**
     * 奖励 (type: items) (location: H1) (checker: @ItemArrayChecker)
     */
    readonly reward: Items;
    /**
     * 任务icon (type: string) (location: I1) (checker: x)
     */
    readonly icon: string;
    /**
     * 参数 (type: TaskArgs?) (location: J1) (checker: x)
     */
    readonly task_args?: TaskArgs;
}

export interface GeneratedTaskTable {
    main: Record<number | string, GeneratedTaskMainRow>;
    branch: Record<number | string, GeneratedTaskBranchRow>;
    events: Record<number | string, GeneratedTaskEventsRow>;
    exchange: Record<number | string, GeneratedTaskExchangeRow>;
    weekly: Record<number | string, GeneratedTaskWeeklyRow>;
}
