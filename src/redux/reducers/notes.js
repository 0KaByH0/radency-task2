const images = [
  {
    imgName: 'Task',
    imgUrl: <i className="fas fa-shopping-cart"></i>,
  },
  {
    imgName: 'Idea',
    imgUrl: <i className="far fa-lightbulb"></i>,
  },
  {
    imgName: 'Random Thought',
    imgUrl: <i className="fas fa-bookmark"></i>,
  },
];

const initialState = {
  items: [
    {
      id: 123,
      img: images.filter((img) => img.imgName === 'Idea')[0]?.imgUrl || ' ',
      name: 'dawcxz',
      creationDate: 'April 20 2012',
      category: 'Idea',
      content: 'awdawdwawdadfa 3/5/2021',
      dates: '',
      archived: false,
    },
    {
      id: 233,
      img: images.filter((img) => img.imgName === 'Task')[0]?.imgUrl || ' ',
      name: 'asdfasdf',
      creationDate: '',
      category: 'Task',
      content: '',
      dates: '',
      archived: false,
    },
    {
      id: 22,
      img: '',
      name: '',
      creationDate: '',
      category: 'Task',
      content: '',
      dates: '',
      archived: false,
    },
  ],
  task: {
    active: 0,
    archived: 0,
  },
  thought: {
    active: 0,
    archived: 0,
  },
  idea: {
    active: 0,
    archived: 0,
  },
};

const dateRegEx = /^(0?[1-9]|1[012])[ /](0?[1-9]|[12][0-9]|3[01])[ /](19|20)?[0-9]{2}$/; //3/5/2021, 11/5/2021, 2/1/1991
const findDates = (value) => {
  let text = value.split(' ');
  const dates = text.map((str) => str.replace(',', '')).filter((str) => str.match(dateRegEx));
  return dates.join(', ');
};

const calculateActive = (category, state) =>
  state.items.reduce(
    (acc, note) => (note.category === category && note.archived === false ? acc + 1 : acc),
    0,
  );
const calculateArchived = (category, state) =>
  state.items.reduce(
    (acc, note) => (note.category === category && note.archived === true ? acc + 1 : acc),
    0,
  );

const calculate = (category, state) => ({
  active: calculateActive(category, state),
  archived: calculateArchived(category, state),
});

export const notes = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_NOTE':
      const { id, category, content, name, date } = action.payload;
      const newNote = {
        id: id,
        name,
        img: images.filter((img) => img.imgName === category)[0]?.imgUrl || ' ',
        creationDate: date,
        category,
        content,
        dates: findDates(content),
        archived: false,
      };
      return {
        ...state,
        items: [...state.items, newNote],
      };
    case 'EDIT_NOTE':
      const editNote = {
        id: action.payload.id,
        name: action.payload.name,
        img: images.filter((img) => img.imgName === action.payload.category)[0]?.imgUrl || ' ',
        creationDate: action.payload.date,
        category: action.payload.category,
        content: action.payload.content,
        dates: findDates(action.payload.content),
        archived: false,
      };
      return {
        ...state,
        items: [
          ...state.items.map((el) => {
            if (el.id === editNote.id) {
              return Object.assign(el, editNote);
            } else {
              return el;
            }
          }),
        ],
      };
    case 'ARCHIVE_NOTE':
      return {
        ...state,
        items: [...state.items.map((el) => (el.id === action.id ? { ...el, archived: true } : el))],
      };
    case 'UNARCHIVE_NOTE':
      return {
        ...state,
        items: [
          ...state.items.map((el) => (el.id === action.id ? { ...el, archived: false } : el)),
        ],
      };
    case 'DELETE_NOTE':
      return {
        ...state,
        items: [...state.items.filter((el) => el.id !== action.id)],
      };
    case 'DELETE_ALL_NOTES':
      return {
        ...state,
        items: [],
      };
    case 'ARCHIVE_ALL_NOTES':
      return {
        ...state,
        items: [...state.items.map((el) => ({ ...el, archived: true }))],
      };
    case 'CALCULATE':
      return {
        ...state,
        task: calculate('Task', state),
        thought: calculate('Random Thought', state),
        idea: calculate('Idea', state),
      };

    default:
      return state;
  }
};
