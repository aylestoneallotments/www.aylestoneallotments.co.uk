var ratio = 0.6;
var calendarbreakpoint = 600;
if ($(window).width() > calendarbreakpoint){
ratio = 1.35;
};
$('#calendar').fullCalendar({
    aspectRatio: ratio,
    windowResize: function(view) {
		if ($(window).width() < calendarbreakpoint){
			$('#calendar').fullCalendar('option', 'aspectRatio', 0.75);
		}
		else {
			$('#calendar').fullCalendar('option', 'aspectRatio', 1.35);
		}
    },
buttonText: {
   today:    'Today',
},
events: [{% assign first = true %}{% for post in site.data.events | sort 'start' %} {% if first == false %},{% endif %}
{% if first == true %}{% assign first = false %}{% endif %}
{   title: "{{ post.title }}",
    start: "{{ post.start }}",
    url: "{{ post.url }}",
}{% endfor %}]
});