export const fetchTasksRequest = () => ({ type: 'FETCH_TASKS_REQUEST' });
export const fetchTasksSuccess = (tasks) => ({ type: 'FETCH_TASKS_SUCCESS', payload: tasks });
export const fetchTasksFailure = (error) => ({ type: 'FETCH_TASKS_FAILURE', error });

export const fetchUserRequest = () => ({ type: 'FETCH_USER_REQUEST' });
export const fetchUserSuccess = (user) => ({ type: 'FETCH_USER_SUCCESS', payload: user });
export const fetchUserFailure = (error) => ({ type: 'FETCH_USER_FAILURE', error });
