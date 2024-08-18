import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const { contactList, keyword } = useSelector((state) => state);
  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    if (keyword !== '') {
      const list = contactList.filter((item) => item.name.includes(keyword));
      setFilterList(list);
    } else {
      setFilterList(contactList);
    }
  }, [keyword, contactList]);
  return (
    <div>
      <SearchBox />
      <div>
        등록된 연락처 <span>{filterList.length}</span>
        {filterList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
