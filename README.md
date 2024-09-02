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

# Section 7 - Intermediate CSS

### CSS cascade

When we have multiple styling which targets same html element, there is a hierarchy that need to be followed in order to determine which style is applied to the element. We are going to access which css is applied with respect to 

Position: In a css if there are two different values of a same attribute/style, then the one in the lower line i.e the one declared at last will win.

Specificity: If we have one defined to class then one targeting specific id, then the id will win.

Type: The inline will get first preference, then the internal and lastly external. 

Importance: In css we can specify a property to be important. Then thats what will be considered. 

### Combining CSS Selector

If there is a div which has a class name c, then there is p tags all over the code, and we want to apply a style to the p tag which is inside the div with class name c, we can add the name of the class and the tag name which will select the the tag inside the div class c. 

When we want to target multiple class or id or tag, instead of typing the selector and the style multiple times, we can mention them in a single line separated by commas, and then declare the style that we want to apply to all of them.

If we want to target a parent and direct descendant of the parent class, then we mention parent > child as the selector and then specify the css code. Useful when there are multiple elements with then same class name and same tags. 

If we have so many combinations of class, id and tags and we want to select a specific combination, then we will type all the selectors without space. This is called chaining. It will apply to elements which will have all the selectors mentioned in the chain. When chaining, the tag name will come first as that in between can be confusing. 

### CSS Positioning

There are 4 types of positioning present - Static, relative, absolute and fixed. 

**Static -** By default static positioning will be applied. 

**Relative** - A Position relative to the default position, not relative to any other element. 

**Absolute** - Position relative to nearest positioned ancestor or top left corner of webpage. Another aspect of absolute positioning is the z index which determines which element will go on top of the other. When we set the position of the element to absolute, the what happens is it will take the element and keep it on a different layer than other layer. 

**Fixed** - Position relative to the top left corner of the browser window. Will not change even when we scroll down and up.

# Section 8 - Advanced CSS

### Display

The span element is used when we want to insert another element/text inside another element so that we can style that separately. There is a css property called display which will help us in positioning the html element. When an element display property is set to block, it will take up the entire screen width and we cannot place diff elements on the same line. [horizontally]. When set to inline, it will have width of the content of the html element, so that other element will be on the same line until we can no longer fit anymore on the same line. In inline property, the height and width cant be set as it depends on the elements size. 

There is another property of display called inline block. This will allow us to have same line elements and set the height and width as well. 

If the display property is set to none, then the element will disappear. 

### Float

When we want a element to wrap around another element, then we use float. If we have any elements that we do not want to wrap around an element with float property, then we use clear property. 

### Media Query

We specify @media instead of query selector and we mention a condition. The media will be displayed only when the condition is met. 

### Grid

We use set the display property to grid. This applies to 2D layout. Inside a main/parent div which will have many small divs which we will position accordingly. We specify the what Then we specify all the properties of the grid like columns, rows and gap between them. 

### Flex Box

We use display property to flex. Very similar to grid, but it specializes in 1D latout. 

### Bootstrap

This is a external CSS framework. They have defined whole bunch of classes with specific designs and we import bootstrap. Then we use these classes to the html elements so that they will get the design.

# Section 9 - CSS Flex Box

### Flexbox

Used in designing structure of a webpage. The way we design a flexbox is that we create a main div and place all the other divs inside the main container. Then we target the smaller containers and design/place them. The default flow is inline [Horizontally]. We can change this by setting the flex-direction property.

There are two axis on which the flex box positions the elements. The main axis which by default is left to right [horizontally] [inline]. And the cross axis which by default is from top to bottom. First the elements are placed in main axis. Once there is no place in the main axis then the cross axis is used as reference. 

The flex basis property will expand along the main axis. But this property is applied to the children and not the parent.

### Flex Layout

If in a main div, many smaller divs are arranged, then we can change the order property of the element and change the position. By default all the elements have order 0. And the elements are positioned in the ascending order of their order number. Set to individual elements/divs. 

flex-wrap property will place the elements in the secondary axis when the screen is minimized. Set to main container. 

justify-content property will set the distribution along the main axis. This will align the elements according to the screen space. Set to parent div. 

align-item property will set the distribution along the secondary axis. To have these, we need to have some height to the main div, so that we can place it accordingly. This property is set to main div.

If we want some elements to be aligned different from all the other elements, then we can use align-self on the element itself.

align-content property is very similar to the align-item but this only works when the flex-wrap is set to wrap. 

### Flex Sizing

The hierarchy → 

content width < width < flex-basis < min-width/max-width

For a paragraph tag or an element inside a flex-box, when the box shrinks, then the elements will also shrink. This is the default behavior of the flex box. The min-width is the length of the longest word inside a div/tag. The max-width is the length of the complete sentence. 

flex-grow and flex-shrink will grow and shrink according to the flex-box size and given initial size. For the flex-grow, it will grow till max-width and the flex-shrink will shrink till min-width. By default, the flex-grow is off and the flex-shrink is on.  

Usually we use a short hand way to write the three flex properties i.e grow, shrink and basis. 

flex: 1 1 0; [grow, shrink and basis]

We can set a ratio of proportion of element with specifying the flex value as 1, 2, 3 respectively.

# Section 10 - CSS Grid

Now that we have learnt about flexbox which will help us align items in a 1 dimensional direction, grid helps us achieve the same functionality in 2 dimensional way. We can also use a flexbox inside a grid while designing our website and the other way around. Using the column and row grid template, we will define how much space the grid elements will occupy. 

## Grid Placement

The entire grid we place it inside a div called **container**(Container referring to the class name, is the name that we usually call the div which has a grid). We have our row **tracks** and column **tracks** which are the rows and columns that we size. Within the intersection of these tracks lies the **cells**. We then combine these cells in order to place **items**. In addition there are **lines** that separate these tracks which we control by gap property.  

We use span keyword to denote that an element will occupy two cells. We can also specify the row/ column start and end to specify the exact position. Unlike the flexbox, grid allows us to overlap different elements. We can achieve this by simply positioning it on top of each other.

# Section 11 - Bootstrap Framework

This framework [Pre made css files] has may css files that we can include in our program. We can achieve all the functionality by just adding the class name into our program. So instead of writing all the css code by ourselves, we need to just know which class name to add. The advantages of external css is that it is very easy to use and quicker. It has a wide browser compatibility and make our code uniform. The disadvantages of bootstrap is that it creates class bloat in html. As good practice of web development is to add content in html and style in css, because we will add the class names in the html, it will be a little confusing. The second disadvantage is that it will lack customizability. 

When we want to build a mobile first website which is professional and quick to build, we will use bootstrap. When we want a complex really personalized website, we will use regular/native css.  First the html code will load the bootstrap and apply the styling. Then it will look for the custom styling that we have coded. 

## Bootstrap 12 Column layout

It will have an outermost div called container, then it will have a div for called row and inside it will have items, denoted by col class name. We can specify the size of container by specifying the container-sm/md etc which are based on common screen sizes.

The div is divided into 12 smaller cells and we can specify how many of these cells that a item can take. Suppose we specify col-3, this denotes that this element will occupy 3 smaller cells. We can specify many breakpoints for each screen sizes. 

## Bootstrap Components

One of the main reasons to use bootstrap is the inbuilt components like buttons, cards. carousels etc. We can achieve this by simply adding a bootstrap class. When we use margin, the background is not included in it. But when we use padding, the background is also extended.

# Section 12 - Web Design School

Four pillars of web design - Color Theory, Typography, User Interface Design, User Experience Design. 

### Color Theory

Science of creating the color pallet for our website. Each color will have its own significance and mood setting, which we will take into consideration while designing the website for product or service. If we head to [colorhunt.co](http://colorhunt.co) there professionals will have created color pallet that we can use. 

### Typography

Two families in typography - Serif and San-Serif. The fonts have similar effect as the color. Each font has its own significance. 

### UI Design

1. **Hierarchy** - We can establish hierarchy in our design, to denote the text with higher significance/importance. 
2. **Layout** - This is important. The structure should be appealing. 
3. **Alignment** - How the elements are aligned in the website. 
4. **White Space** - Empty space that surroundings.
5.  **Audience** - The design should be focused towards target audience. 

### User Experience Design

The overall experience of a person using a product such as a website or computer application, especially in terms of how easy or appealing it is to use.

1. Simplicity
2. Consistency
3. Reading Patterns
4. All Platform design
