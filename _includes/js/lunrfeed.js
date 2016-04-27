// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.ref('id')
});
{% assign count = 0 %}{% for post in site.posts %}
  {% if post.title != null %}
index.add({
  title: {{post.title | jsonify}},
  content: {{post.content | strip_html | jsonify}},
  tags: {{post.tags | jsonify}},
  id: {{count}}
});{% endif %}
{% assign count = count | plus: 1 %}{% endfor %}
{% for page in site.pages %}
  {% if page.title != null %}
index.add({
  title: {{page.title | jsonify}},
  summary: {{page.summary | jsonify}},
  tags: {{page.tags | jsonify}},
  id: {{count}}
});{% endif %}
{% assign count = count | plus: 1 %}{% endfor %}
// builds reference data
var store = [{% for post in site.posts %}{
  {% if post.title != null %}
  "title": {{post.title | jsonify}},
  "link": {{ site.baseurl | | append: post.url | jsonify }},
  "date": {{ post.date | date: '%-d %B %Y' | jsonify }},
   {% if post.summary != null %} 
   "summary": {{post.summary | jsonify }},
   {% else %}
   "summary": {{ post.content | strip_html | truncatewords: 20 | jsonify }},
   {% endif %}
   {% endif %}
}{% unless forloop.last %},{% endunless %}{% endfor %},
{% for page in site.pages %}{
  {% if page.title != null %}
  "title": {{page.title | jsonify}},
  "link": {{ site.baseurl | | append: page.url | jsonify }},
  {% if page.summary != null %} 
  "summary": {{page.summary | jsonify }},
  {% else %}
  "summary": {{ page.content | strip_html | truncatewords: 20 | jsonify }},
  {% endif %}
  {% endif %}
}{% unless forloop.last %},{% endunless %}{% endfor %}
]
// builds search
$(document).ready(function() {
	var getUrlParameter = function getUrlParameter(sParam) {
	    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	        sURLVariables = sPageURL.split('&'),
	        sParameterName,
	        i;

	    for (i = 0; i < sURLVariables.length; i++) {
	        sParameterName = sURLVariables[i].split('=');

	        if (sParameterName[0] === sParam) {
	            var returnvalue = sParameterName[1] === undefined ? true : sParameterName[1];
				return returnvalue.replace("+"," ")
	        }
	    }
	};
	var initialSearch = getUrlParameter('keys');
	if (initialSearch != undefined) {
	$('input#search').val(function() {
	return initialSearch;
	});
	}
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdiv.empty();
    // Add status
    resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');
    // Loop through, match, and add results
	for (var item in result) {
		var ref = result[item].ref;
		var searchitem = '<div class="result"><div class="result-body">'+'<a href="'+store[ref].link+'" class="post-title">'+store[ref].title+'</a>';
		if (typeof store[ref].date != "undefined") {
			searchitem += '<div class="post-date small">'+store[ref].date+'</div>';
		}
		searchitem += '<p class="summary">'+store[ref].summary+'</p>';
		searchitem +='</div></div>';
		resultdiv.append(searchitem);
	}
});

	$('input#search').triggerHandler('keyup');
});