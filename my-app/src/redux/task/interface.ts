export interface ITask {
  id: string;
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
