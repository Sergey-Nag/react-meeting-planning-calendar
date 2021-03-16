import React, { useEffect } from 'react';

export default function PageNotFound({ setTitle }) {
  useEffect(() => {
    document.title = '404';
    setTitle('404');
  }, []);

  return (
    <h2>Page not found</h2>
  );
}
