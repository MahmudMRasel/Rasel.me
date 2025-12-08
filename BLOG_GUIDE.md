# Blog Guide - How to Add/Edit Blog Posts

## Location
All blog posts are stored in: `src/data/blogData.js`

## How to Add a New Blog Post

1. Open `src/data/blogData.js` in your editor
2. Add a new object to the `blogPosts` array:

```javascript
{
  id: 4,  // Use the next available number
  title: "Your Blog Post Title",
  date: "December 8, 2025",  // Format: "Month Day, Year"
  description: "A brief description that appears in the blog card preview.",
  content: `Your full blog post content goes here. 
  
You can write multiple paragraphs.
You can use line breaks.
You can write as much as you want!`,
  tags: ["Tag1", "Tag2", "Tag3"]  // Array of relevant tags
}
```

## Example

```javascript
{
  id: 4,
  title: "My Experience with Machine Learning",
  date: "December 8, 2025",
  description: "A personal journey into machine learning and how it transformed my approach to data analysis.",
  content: `In this blog post, I'll share my experience learning machine learning...

First, I started with the basics of Python and data manipulation.

Then I moved on to scikit-learn and built my first predictive model.

The results were amazing!`,
  tags: ["Machine Learning", "Python", "Data Science"]
}
```

## How to Edit an Existing Post

Simply find the post in `src/data/blogData.js` and modify any of its properties:
- `title` - The blog post title
- `date` - The publication date
- `description` - Short preview text
- `content` - Full blog post content
- `tags` - Array of tags

## How to Delete a Post

Remove the entire object from the `blogPosts` array in `src/data/blogData.js`

## Features

- **Click any blog post card** to read the full content
- **Back button** to return to the blog list
- **Tags** are displayed on both the card and full post view
- **Responsive design** - works on all devices

## Notes

- The `description` field is what appears on the blog card preview
- The `content` field is shown when you click "Read more"
- You can use line breaks in the content by using `\n` or template literals with actual line breaks
- Tags help categorize your posts

