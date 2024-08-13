# The-Complete-Web-Development-Bootcamp
This is a contents of a full stack development course in udemy by Angels Yu. 

# Section 1 - Front End Web Development

### How does internet work?

Internet can be visualized as a piece of wire that connects computers all over the world. Some computers are specialized to be available 24*7 and serve you data. These computers are called servers. The computers that we use to access the data are called client. 

When we make a request in the client side system, say in a browser, then the request goes through the ISP (Internet Service Provider) to a DNS (Domain Name System). The DNS will look through database and return the IP of the webpage that we are looking for. Now once we get the IP for the destination webpage, we will make a direct request to the IP address which will return us the page. 

Every Computer connected to the internet has an IP address. Its unique and with this IP address is how we will locate a computer in internet. 

### How do websites work ?

The websites are comprised of three types of files:

HTML - These are the contents of a website

CSS - For styling the content

JS -  For adding functionality 

When a website is loaded in the browser, it will pull these files form the server.

# Section 2 - Introduction to HTML

### What is HTML ?

HTML stands for Hyper Text Markup Language. HTML comprise of the contents that are shown in a website. In general, CSS and JS cannot alone comprise a website. But CSS alone can be a website. 

### Heading Element

These represent the heading contents in a website. General syntax for tags - 

<h1> Contents </h1>

Here the h1 represent the tag name and the the closing tag will have / inside it. 

Tags refer to the content inside the angle braces. Eg. <h1> </h1>

Elements refer to the entire line with tag and content. Eg. <h1> Contents </h1>

The h1, h2, h3, h4, h5 and h6 represent the level of headings.

### Paragraph Element

Similar to the heading element, it represents the paragraph. Syntax - 

<p> Content </p>

### Void Element

In these elements we cannot put anything inside the tag.

The **hr** represents a horizontal rule element which will add a line in the position it is placed. It does not need any contents for it to work. 

Similarly the **br** represents a line break in between contents of a same paragraphs. It is recommended to use break element when we need to have things in separate lines rather than using it to separate paragraphs. 

In these void elements, sometimes the ending /> , people will remove the / and just write **<hr>** etc. Its perfectly fine
