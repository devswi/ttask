export enum Status {
    // 任务待处理
    Pending = 'pending',
    // 任务进行中
    OnProgress = 'on progress',
    // 任务完成
    Completed = 'completed',
}

export type AllStatus = 'all' | Status;

const PRIORITY = ['low', 'medium', 'high', 'urgent'] as const;
export type Priority = typeof PRIORITY[number];

export interface Todo {
    id: string;
    title: string;
    status: Status;
    priority?: Priority;
}
