export enum Status {
    // 任务待处理
    Pending,
    // 任务进行中
    OnProgress,
    // 任务完成
    Completed,
}

export type AllStatus = 'all' | Status;

const PRIORITY = ['low', 'medium', 'high', 'urgent'] as const;
export type Priority = typeof PRIORITY[number];

export const PRIORITY_COLORS: { [key in Priority]: string } = {
    ['low']: 'bg-low',
    ['medium']: 'bg-medium',
    ['high']: 'bg-high',
    ['urgent']: 'bg-urgent',
};

export interface Todo {
    id: string;
    title: string;
    status: Status;
    priority?: Priority;
}
