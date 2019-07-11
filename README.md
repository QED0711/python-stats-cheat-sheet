# Jupyter Notecards

***

## Outline

This project allows users to upload and share their jupyter notebooks to a central repository. Notebooks are parsed to make topics easily searchable. Each topic is saved as an individual notecard. The goal is to have a single location where aspiring data scientists can come and search a general knowledge base. 

## Contributing

All users are welcome and encouraged to contribute their own notebooks to this project to grow the knowledge base. To do so, follow the guidlines set forth below. 

### Notebook Format

When creating your notebook, you must follow certain formatting guidlines so this site can accuratly parse the information.  

1. Each topic entry MUST start with a single h1 heading in a markdown cell. This is accomplished bycreating a markdown cell and writing a single hashtag (#) heading. H1 headings indicate the start of a new topic. Because of this, there may be one and only one h1 heading per topic.

2. You may optionally add your name as author and a list of tags to each topic. The first h2 heading in a topic will be read as the author name. The first h3 heading will be read as a list of tags. Unlike with the h1 heading, you can have multiple h2 and h3 headings in a topic entry. 

3. Anything following this initial setup will be read as the main body of the notecard. 

### Saving & Submitting

When you ready to submit your notebook, you must follow these two steps. 

1. Download your notebook as HTML. To do this, go to file => Download as => HTML (.html)

2. On the jupyter notecards website, upload the newly created HTML file via the "Choose File" button at the top of the page. 

Note: You can update any file by simply uploading an HTML file of the same name. When updating, you will be asked to confirm the overwrite of your previous version. 