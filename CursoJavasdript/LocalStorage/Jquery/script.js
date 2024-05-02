

var conteudo_html = $("#paragrafo-html").html();
console.log(conteudo_html )

$("#paragrafo-html").text("Conteudo novo texto escrito");


conteudo_html = $("#paragrafo-html").html();
console.log(conteudo_html);


var url_link = $("#linkSite").attr("href");
console.log(url_link)

$("#linkSite").attr("href","https://github.com/cleuber979")
url_link = $("#linkSite").attr("href");
console.log(url_link)
