let book = {
    title: "1984",
    author: "George Orwell"
  };
  
  function hasProperty(obj, key) {
    return key in obj;
  }
  
  console.log(hasProperty(book, "title"));   
  console.log(hasProperty(book, "year")); 