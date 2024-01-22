import turl from 'turl'

turl.shorten('http://google.com').then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});