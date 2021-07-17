fetch("https://positivenews.microcms.io/api/v1/news", {
  headers: {
    "X-API-KEY": "c2b2ea8d-03fe-41a3-8c9c-2f17b23cf1f6",
  },
})
  .then((res) => {
    console.log("test");
    res.json();
  })
  .then((json) => {
    console.log(json.title);
    document.getElementById("title").innerHTML = json.title;
  });
