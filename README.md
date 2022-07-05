<h1 align="center">
    Tai Helsel Portfolio
</h1>

![demo](https://raw.githubusercontent.com/taihelsel/portfolio2/main/portfolio-preview2.PNG)

##### Table of Contents  
1. [Setup](#setup)  
2. [Modifying Template](#modifying-template) 
    - [Home](#home)
    - [Experience](#experience)
    - [Projects](#projects)
    - [Contact](#contact)
    - [Resume](#resume)
3. [Styles](#styles)
    - [Colors](#colors)
    - [Font Sizes](#font-sizes)
    - [Margin Offsets](#margin-offsets)

# Setup

 1. Fork repo and run git clone.
 2. Replace **line 5** in the **package.json** file with your GitHub pages location.
  > "homepage":  "https://*YOUR GITHUB*.github.io/"
 3. Run `npm install`
 4. To start dev server run `npm start`.
 5. To deploy to github pages run `npm run deploy`.
 > To make deployment setup easier, this project uses the [gh-pages](https://github.com/tschaub/gh-pages) package.
 7. To make a production build run  `npm run build`.

# Modifying Template
To make changes:

 1. Open the **portfolioInfo_TEMPLATE.js** file.
 2. Follow section formatting below.
 3. Copy the modified **portfolioInfo_TEMPLATE.js** file contents over to the  **portfolioInfo.js** file.
 4. Save the **portfolioInfo.js** file and run the `npm run deploy` command to update your GitHub pages.

### Home
The Home section renders three items. Your first name, the **about** content, and the **skills** content. 

- The hero name is rendered from the **contact** property. See the *[Contact](https://github.com/taihelsel/portfolio2#contact)* section for making changes to your contact information	
 - To change the skills shown in the typing animation, modify the **skills** property. It expects an array with a length greater than 2.
	> ex) `skills: ["HTML",  "CSS", "etc"],`
- To change the About snippet, modify the **about** property. It expects a string with a length greater than 0.
	> ex) `about: "Hello world",`

### Experience
The Experience section renders an array of objects from the **experience** property.

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
The Projects section renders an array of objects from the **projects** property.

- **all** properties expect a string.
- The **github**, **link**, and **img** property are optionally rendered. To prevent these from being displayed, use an empty string as a value. 
- Providing an empty string to the **img** property will render a placeholder div.

> example projects item: 
```
projects: [
    {
        name: "Portfliov2",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
        tech: "HTML, CSS, JavaScript, and React",
        github: "https://github.com/taihelsel/portfolio2",
        link: "https://taihelsel.github.io/portfolio2/",
        img: "https://raw.githubusercontent.com/taihelsel/portfolio2/main/portfolio-preview2.PNG",
    },
]
```
### Contact
The Contact section uses the **contact** property values for the contact form. The **firstname** property is also used for the home page header.

- **all** contact properties expect a string.
- Unless you're using your own mailing system, use "local" as the **emailType** value.

> example contact item: 
```
contact: {
    firstname: "Tai",
    lastname: "Helsel",
    email: "tai.helsel@gmail.com",
    emailType: "local",
},
```
### Resume
To add your own resume, replace the **resume.pdf** file with your own. It must have the **exact** same name as the existing resume.

# Styles
### Colors
| Type | Hex |
|--|--|
| Background Color 1 | `#330D64` |
| Background Color 2 | `#300B5F` |
| Background Color 3 | `#250A4A` |
| Font Color 1 | `#FDF8DF` |
| Font Color 2 | `#FFE16D` |
| Font Color 3 | `#3FB1B1` |
| Generic Grey | `#8B8B8B` |
### Font Sizes
| Type | Size|
|--|--|
|  XL | 80px |
|  L | 62px|
|  M | 20px |
|  S | 15px |
|  XS | 13px |

### Margin Offsets
> Used to keep content centered on page.

| Type | Horizontal Margin|
|--|--|
| XLarge Desktop | `13%` |
| Large Desktop | `300px` |
| Desktop | `140px` |
| Med Desktop | `80px` |
| Mobile | `25px` |
