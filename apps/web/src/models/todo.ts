export enum Status {
    // 任务待处理
    Pending = 'pending',
    // 任务进行中
    InProgress = 'in progress',
    // 任务完成
    Completed = 'completed',
}

const PRIORITY = ['low', 'medium', 'high', 'urgent'] as const;
export type Priority = typeof PRIORITY[number];

export interface Todo {
    id: string;
    title: string;
    status: Status;
    priority?: Priority;
}
