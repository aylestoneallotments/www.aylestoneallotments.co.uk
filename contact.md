---
title: Contact
layout: contact
map-marker-title: "Aylestone Allotments"
map-marker-content: "53 Copinger Rd, Leicester, LE2 6LF"
map-coordinates: "52.6070036,-1.1352628"
---

To contact AALGS, please use the form below to contact the Secretary:

{% comment %}Forms provided by formspree.io{% endcomment %}

<form action="http://formspree.io/{{ site.email }}"
      method="POST">
	<label>Name</label>
    <input type="text" name="name"> 
    <input type="text" name="_gotcha" style="display: none;">
	<label>Email</label>
    <input type="email" name="_replyto">
    <label>Your message</label>
	<textarea name="message"></textarea>
    <input type="submit" value="Send">
	<input type="hidden" name="_next" value="{{site.url}}{{site.baseurl}}/contact" />
</form>

<form action="https://allotmentmail.herokuapp.com/send">
  Email: <input type="text" name="name"><br>
  Name: <input type="text" name="email"><br>
  Subject: <input type="text" name="subject"><br>
  Message: <textarea name="message" cols="40" rows="5"></textarea>
  <input type="submit" value="Send Message">
</form> 