const initialState = {
  contactList: [],
  filteredContactList: [],
  keyword: '',
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_CONTACT':
      const updatedContactList = [
        ...state.contactList,
        {
          artist: payload.artist,
          title: payload.title,
        },
      ];
      return {
        ...state,
        contactList: updatedContactList,
        filteredContactList: updatedContactList,
      };

    case 'SEARCH_BY_NAME':
      const filteredContacts = state.contactList.filter((contact) =>
        contact.name.toLowerCase().includes(payload.keyword.toLowerCase())
      );
      return {
        ...state,
        keyword: payload.keyword,
        filteredContactList: filteredContacts,
      };

    case 'SHOW_ALL_CONTACTS':
      return {
        ...state,
        keyword: '',
        filteredContactList: state.contactList,
      };

    default:
      return state;
  }
}
