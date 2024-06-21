const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: [],
    },
    todoList: [
        { id: 1, name: 'Learn Gym', completed: true, priority: 'High' },
        { id: 1, name: 'Learn Redux', completed: false, priority: 'Medium' },
        { id: 1, name: 'Learn MMA', completed: false, priority: 'Low' },
    ],
};
const rootReducer = (state = initState, action) => {
    /*
        {
            type: 'todoList/addTodo',
            payload: { id: 1, name: 'Learn MMA', completed: false, priority: 'Low' },
        }
    */

    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: 5,
                        name: 'Learn deep work',
                        completed: false,
                        priority: 'Low',
                    },
                ],
            };

        default:
            console.log('Wassup !');
            return state;
    }
};

export default rootReducer;
