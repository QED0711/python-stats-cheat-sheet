# Jupyter Notecards

***

## Outline

This project allows users to upload and share their jupyter notebooks to a central application for quick reference. Notebooks are parsed to make topics easily searchable. Each topic is saved as an individual notecard. The goal is to have a single location where aspiring data scientists can come and search a general knowledge base. 

## Contributing

All users are welcome and encouraged to contribute their own notebooks to this project to grow the knowledge base. To do so, follow the guidlines set forth below. 

### Notebook Format

When creating your notebook, you ***must*** follow certain formatting guidlines so this app can accuratly parse the information.  

Each entry must begin with a title (h1), author (h2), and tags (h3) in that order. In your notebook, this is done by creating a markdown cell and adding something like the following:

```
# TITLE
## AUTHOR
### tag1, tag2, tag3, ...
```

After this heading, you may have other h2 and h3 headings for each topic, but you ***cannot*** have any other h1 tags. 

You can have multiple topics per notebook as long as they are separted by these headers. 

### Saving & Submitting

When you ready to submit your notebook, you must follow these two steps. 

1. Download your notebook as HTML. To do this, go to file => Download as => HTML (.html)

2. On the jupyter notecards website, upload the newly created HTML file via the "Choose File" button at the top of the page. 

Note: You can update any file by simply uploading an HTML file of the same name. When updating, you will be asked to confirm the overwrite of your previous version. 
