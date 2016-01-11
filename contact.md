---
layout: contact
map-marker-title: "Aylestone Allotments"
map-marker-content: "53 Copinger Rd, Leicester, LE2 6LF"
map-coordinates: "52.6070036,-1.1352628"
---

{% comment %}
Forms are powered by www.formspree.io.
{% endcomment %}

#Make a Booking Enquiry

To contact AALGS, please use the form below to contact the Secretary:

<form action="//formspree.io/richardmichaelscott@gmail.com"
      method="POST">
	<label>Name</label>
    <input type="text" name="name"> 
    <input type="text" name="_gotcha" style="display: none;">
	<label>Email</label>
    <input type="email" name="_replyto">
    <label>Your message</label>
	<textarea name="message"></textarea>
    <input type="submit" value="Send">
	<input type="hidden" name="_next" value="http://127.0.0.1:4000/jelly/contact" />
</form>