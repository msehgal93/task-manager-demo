# Task Manager ([Trello](https://trello.com) Like)

## [View it LIVE](https://msehgal93.github.io/task-manager-demo/build/)

### Description
_Task cards_ are rectangular cards which contains development related regular tasks(text format). (You can also add creation date fields).
_Status Items_ is a container of _Task cards_. we can have a few default status viz - Pending, Completed, etc

### Aim
Create a single page application containing columns of status items (say Pending, Work In Progress, Completed etc.). There should be a create card button which creates a task card in each status item.
Status Items - we can have a few default status and more status items can be added.
We should be able to create new status items, Add task cards to any status item, delete task cards in any status, delete all the cards in one status item and delete the status item itself.
To update the task card status we should be able to drag and drop cards from one status column to another.

__Bonus: We can also have an android-like bin to which cards can be delete via drag-drop or maybe a deleted status item.__

Points to be noted:
1. Object oriented and native javascript would be preferred over jQuery.
2. Plugin usage should be minimal
3. Responsiveness will be considered as plus point
4. Creativity will be rewarding.


### Checklist
- [x] initiate project - folder structure / node packages required / initial view
- [x] redux setup
- [x] UI Dev
  * header
  * body
  * status container
  * cards
- [x] Reactify the App (View)
- [x] Reactify the App (Functionality)
- [x] add persistent storage in combination with redux [Extra Feature]
- [x] Drag Drop Cards from one status to another
