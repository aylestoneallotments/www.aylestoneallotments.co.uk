(function() {
		$.getJSON("/events/events.json", function(data) {
				var items = [];
				$.each(data.events, function(key, val) {
						if (Date.parse(data.events[key].start) > $.now()) {
								$(".event-" + (key + 1) ).show();
							}
						});
				});
		})();