function removeUrlAnchor(url) {
  const match = url.match(/^(.*?)#/);

  return match ? match[1] : url;
}

function removeUrlAnchor(url) {
  return url.split("#")[0];
}

console.log(removeUrlAnchor("www.codewars.com#about"), "www.codewars.com");
console.log(
  removeUrlAnchor("www.codewars.com?page=1"),
  "www.codewars.com?page=1"
);
