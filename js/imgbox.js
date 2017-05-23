// build time:Tue May 23 2017 22:21:52 GMT+0800 (中国标准时间)
$(document).ready(function(){$("p img").each(function(){var c="<a id='yourid' href='"+this.src+"'></a>";$(this).wrapAll(c)});$("#yourid").fancybox({openEffect:"elastic",closeEffect:"elastic"})});
//rebuild by neat 