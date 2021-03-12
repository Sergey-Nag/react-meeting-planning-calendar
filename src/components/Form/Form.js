import { useEffect } from "react";

export default function Form() {
  useEffect(()=>{
    document.title = 'Create form';
  }, []);
  
  return (
      <form></form>
  );
}