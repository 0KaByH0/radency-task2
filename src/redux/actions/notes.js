export const delete_item = (id) => ({ type: 'DELETE_NOTE', id });
export const archive_item = (id) => ({ type: 'ARCHIVE_NOTE', id });
export const unArchive_item = (id) => ({ type: 'UNARCHIVE_NOTE', id });
export const create_item = (payload) => ({ type: 'CREATE_NOTE', payload });
export const edit_item = (payload) => ({ type: 'EDIT_NOTE', payload });
export const archive_all = (payload) => ({ type: 'ARCHIVE_ALL_NOTES', payload });
export const delete_all = (payload) => ({ type: 'DELETE_ALL_NOTES', payload });

export const calculate = () => ({ type: 'CALCULATE' });
