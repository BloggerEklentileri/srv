var blog = document.location.hostname;
var slug = document.location.pathname;
var ctld = blog.substr(blog.lastIndexOf("."));
if (ctld != ".com") {
  var ncr = "https://" + blog.substr(0, blog.indexOf("."));
ncr += ".blogspot.com/ncr" + slug;
window.location.replace(ncr);}
//https://bloggereklentileri.blogspot.com.tr/
//https://bloggereklentileri.blogspot.com/
//http://cizgifilmhikayeleri.blogspot.com.tr/
//http://cizgifilmhikayeleri.blogspot.com/