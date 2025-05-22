export interface ITask {
  id: Date | string;
  task: string;
  status: string;
  description: string;
}
export interface Action {
  type: string;
  payload: any;
}
export interface IState {
  toDoReducer: {
    list: ITask[];
  };
}
