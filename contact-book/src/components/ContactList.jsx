import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

export default function ContactList() {
  const { contactList, keyword } = useSelector((state) => state);
  const [filterList, setFilterList] = useState([]);
  const [searchResult, setSearchResult] = useState(false);

  useEffect(() => {
    if (keyword !== '') {
      const list = contactList.filter((item) =>
        item.artist.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilterList(list);
      setSearchResult(true);
    } else {
      setFilterList(contactList);
      setSearchResult(false);
    }
  }, [keyword, contactList]);

  return (
    <>
      <SearchBox />
      <Container>
        <div>
          <div className='search-list'>
            <span>모든 연락처 </span>
            <span className='search-result' style={{ fontWeight: '600' }}>
              {filterList.length}
            </span>
            <span>명</span>
          </div>
          <div className='result-list'>
            {filterList.length > 0
              ? filterList.map((item, index) => (
                  <ContactItem item={item} key={index} />
                ))
              : searchResult && (
                  <p className='result-alert'>검색결과가 없습니다.</p>
                )}
          </div>
        </div>
      </Container>
    </>
  );
}
