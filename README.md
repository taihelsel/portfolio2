<h1 align="center">
    Tai Helsel Portfolio
</h1>

![demo](https://raw.githubusercontent.com/taihelsel/portfolio2/main/portfolio-preview2.PNG)

# Setup

 1. Fork repo and run git clone
 2. Replace **line 5** in the **package.json** file with your GitHub pages location
  > "homepage":  "https://*YOUR GITHUB*.github.io/"
 3. Run `npm install`
 4. To start dev server run `npm start`
 5. To deploy to github pages run `npm deploy`
 > To make deployment setup easier, this project uses the [gh-pages](https://github.com/tschaub/gh-pages) package.
 7. To make a production build run  `npm run deploy`

# Modifying Template
To make changes, open the **portfolioInfo.js** file and and see section formatting below.

### Home
The Home section renders three items. Your first name, the **about** content, and the **skills** content. 

- See the *[Contact](https://github.com/taihelsel/portfolio2#contact)* section for making changes to your contact information	
 - To change the skills shown in the typing animation, modify the **skills** property. It expects an array with a length greater than 2.
	> ex) `skills: ["HTML",  "CSS", "etc"],`
- To change the About snippet, modify the **about** property. It expects a string with a length greater than 0.
	> ex) `about: "Hello world",`

### Experience
The Experience section renders an array of items from the **experience** property.

- Each **company** property will be used as a button for the experience section controls.
- The **desc** property expects an array of strings.
- The **company**, **title**, **date**, and **skills** properties all expect a string.
- The **experience** property expects an array of objects.

> example experience format: 
```
experience: [
	{
	    company:  "Very Real Co.",
	    title:  "CEO",
	    date:  "June 1900 - Nov 2022",
	    desc: [
		    "Created Company",
		    "Performed very real tasks",
	    ],
		skills:  "skill one, skill two, skill 3",
	},
]
```

### Projects

### Contact
