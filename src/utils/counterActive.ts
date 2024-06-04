import { TTask } from "../types/types";

export const counterActive = (data: TTask[]) => {
  let result = 0;

  for (let i = 0; i < data.length; i++) {
    if(data[i].isDone === false) {
      result += 1;
    }
  }

  return result;
}