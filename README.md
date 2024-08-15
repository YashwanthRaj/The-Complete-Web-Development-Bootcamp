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

These represent the heading contents in a website. General syntax for tags in HTML is that they are included 

Here the h1 represent the tag name and the the closing tag will have / inside it. 

Tags refer to the content inside the angle braces. 

Elements refer to the entire line with tag and content.

The h1, h2, h3, h4, h5 and h6 represent the level of headings.

### Paragraph Element

Similar to the heading element, it represents the paragraph. 

### Void Element

In these elements we cannot put anything inside the tag.
The **hr** represents a horizontal rule element which will add a line in the position it is placed. It does not need any contents for it to work. 

Similarly the **br** represents a line break in between contents of a same paragraphs. It is recommended to use break element when we need to have things in separate lines rather than using it to separate paragraphs. 

In these void elements, sometimes the ending /> , people will remove the / and just write tag hr etc. Its perfectly fine syntax but not a good practice. 

# Section 3 - Intermediate HTML

### List Element

These are elements that we are organizing in form of lists. Two types - ordered and un ordered list. Unlike other tags, the list will have another component inside the list tag, which is the list element tag. 

**Un ordered List Syntax**

<ul> 

<li> List Element </li>

</ul>

**Ordered List Syntax**

<ol> 

<li> List Element </li>

</ol>

The difference between ordered and un ordered list is the the ordered one will have numbers and the un ordered list will have bullet points. We can also nest one list inside another by nesting it. 

### Anchor Elements

These are hypertext. These texts have links embedded inside them. 

### HTML attributes

There can be more than one attribute in a tag.  There are attributes that are specific to a tag, and then there are attributes that are global, i.e we can use them in any html tag. 

### Image Element

This tag renders image in a website.  This is a self closing tag. The alternative text attribute should be present as it will display the content if the browser is unable to display the image for some reason.

# Section 4 - Mutipage websites

### Computer file paths
Direct to a specific file or a folder. Two types
Absolute file path - The address is from root of a computer.
Relative file path - The address is in relation to the present file that we are working on. Here the file path will start form the current directory. 
To travel up a folder, we use ../ (Double dot slash)
To stay in the current directory, we can use ./ (Single dot slash)

### HTML Boilerplate

The initial code that defines the basic structure of an HTML code.

The first line is the doctype which represents the version of HTML. 

The next line is the HTML tag which between which all the code will be entered. It has an attribute called lang which is the language that its written. 

The third element is the head which is the head, which is where all the important information about our webpage is included, like the website name and other links. It has some attributes like 
charset which represents the character set of the contents of the website. 

Then Lastly the body inside which we code i.e include the body of the website.

# Section 5 - Introduction to CSS

### What is CSS?

CSS stands for Cascading Style Sheet. It is used to add style to the HTML web pages. There are three types of css declaration

1. Inline - We style an element by adding style attributes in the HTML tag.
2. Internal - We add declare the CSS inside the style tag and place it inside head tag in HTML.
3. External - We create a separate css file with all the styling elements and link it with HTML.

When we have a multipage website, it is very essential to have external style sheet. Anyway in all cases external css is recommended. 

Generally, in css we have the css selector which denotes what to apply changes on, then property that we want to change/style. Then comes the value of the property.

### CSS Selector

The part that selects a html element so that we can apply css to that element. We can select a html tag, class and ID for a html element. Class can be same for many html elements denoted by .className in css. The ID cannot be same for multiple elements denoted by # in css. 

If we have a general tag, then we have classes and IDs that fall under the general tag, then the css will consider only the higher level css selector like class and ID. 

### Attribute Selector

Another way we can select parts of our HTML is using attribute selector denoted by tagName[attributeName] . 

### Universe Selector

This is to select all in a html page denoted by *.

# Section 6 - CSS Properties

### Font Sizes

1px → 1/96th inch

1pt → 1/76th inch [What we specify in word]

1em → 100% of parent

1rem → 100% of root

### The Box Model

Border → Outermost space between padding and margin. 

Padding → Adds space between element and the border. 

Margin → Space between other element and border.

### HTML Div

Div tags represents a container/division in the body of a HTML. Div helps in grouping our elements together. We can set padding and margin and stuff to each individual div tags and style them independently.
