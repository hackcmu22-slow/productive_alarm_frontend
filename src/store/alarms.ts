export interface AlarmInfo {
  name: string;
  hour: number; // 24 hour
  minute: number;
  enabled: boolean;
}

export type Alarms = Record<string, AlarmInfo>;

interface AlarmCReducerAction {
  type: "create";
  payload: {
    hour: number;
    minute: number;
    name: string;
  };
}

interface AlarmUReducerAction {
  type: "update";
  payload: {
    id: string;
    hour: number;
    minute: number;
    name: string;
  };
}

interface AlarmDReducerAction {
  type: "delete";
  payload: {
    id: string;
  };
}

interface AlarmEnableReducerAction {
  type: "enable";
  payload: {
    id: string;
    state: boolean;
  };
}

export type AlarmReducerAction =
  | AlarmCReducerAction
  | AlarmUReducerAction
  | AlarmDReducerAction
  | AlarmEnableReducerAction;

export default function reducer(
  state: Alarms,
  action: AlarmReducerAction
): Alarms {
  switch (action.type) {
    case "delete": {
      const newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    }
    case "create": {
      const id = Date().toString();
      return { ...state, [id]: { ...action.payload, enabled: true } };
    }
    case "update": {
      const { id, ...others } = action.payload;
      return { ...state, [id]: { ...others, enabled: true } };
    }
    case "enable": {
      const newState = { ...state };
      const targetState = { ...newState[action.payload.id] };
      return {
        ...newState,
        [action.payload.id]: { ...targetState, enabled: action.payload.state },
      };
    }
  }
}
