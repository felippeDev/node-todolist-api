define({ "api": [
  {
    "type": "delete",
    "url": "/tasks/:id",
    "title": "Delete a task",
    "group": "Tasks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Task id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Deleted",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/todoListController.js",
    "groupTitle": "Tasks",
    "name": "DeleteTasksId"
  },
  {
    "type": "get",
    "url": "/tasks",
    "title": "List all tasks",
    "group": "Tasks",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "id",
            "optional": false,
            "field": "tasks.id",
            "description": "<p>Task unique _id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "tasks.name",
            "description": "<p>Task name</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "tasks.Created_date",
            "description": "<p>Automatic Task created date</p>"
          },
          {
            "group": "Success 200",
            "type": "enum",
            "optional": false,
            "field": "tasks.status",
            "description": "<p>Task status ['pending', 'ongoing', 'completed'] default: 'pendenig'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"ejy0kmr\",\n  \"name\": \"Task sample 1\",\n  \"Created_date\": \"2017-02-10T15:46:51.778Z\",\n  \"status\": \"pending\"\n},\n{\n  \"_id\": \"Y0mrks3\",\n  \"name\": \"Task sample 2\",\n  \"Created_date\": \"2017-02-20T15:46:51.778Z\",\n  \"status\": \"ongoing\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Thereś no Tasks",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Internal Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/todoListController.js",
    "groupTitle": "Tasks",
    "name": "GetTasks"
  },
  {
    "type": "get",
    "url": "/tasks/:id",
    "title": "Get an specific task",
    "group": "Tasks",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "id",
            "optional": false,
            "field": "tasks.id",
            "description": "<p>Task unique _id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "tasks.name",
            "description": "<p>Task name</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "tasks.Created_date",
            "description": "<p>Automatic Task created date</p>"
          },
          {
            "group": "Success 200",
            "type": "enum",
            "optional": false,
            "field": "tasks.status",
            "description": "<p>Task status ['pending', 'ongoing', 'completed'] default: 'pendenig'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"ejy0kmr\",\n  \"name\": \"Task sample\",\n  \"Created_date\": \"2017-02-10T15:46:51.778Z\",\n  \"status\": \"pending\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Task not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Internal Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/todoListController.js",
    "groupTitle": "Tasks",
    "name": "GetTasksId"
  },
  {
    "type": "post",
    "url": "/tasks",
    "title": "Create a new Task",
    "group": "Tasks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Task name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"A new sample Task\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "id",
            "optional": false,
            "field": "tasks.id",
            "description": "<p>Task unique _id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "tasks.name",
            "description": "<p>Task name</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "tasks.Created_date",
            "description": "<p>Automatic Task created date</p>"
          },
          {
            "group": "Success 200",
            "type": "enum",
            "optional": false,
            "field": "tasks.status",
            "description": "<p>Task status ['pending', 'ongoing', 'completed'] default: 'pendenig'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"ejy0kmr\",\n  \"name\": \"Task sample 1\",\n  \"Created_date\": \"2017-02-10T15:46:51.778Z\",\n  \"status\": \"pending\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/todoListController.js",
    "groupTitle": "Tasks",
    "name": "PostTasks"
  },
  {
    "type": "put",
    "url": "/tasks/:id",
    "title": "Update a task",
    "group": "Tasks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Task id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Task name</p>"
          },
          {
            "group": "Parameter",
            "type": "enum",
            "optional": false,
            "field": "done",
            "description": "<p>Task should be done?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"Task sample 1\",\n  \"status\": true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Updated",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/todoListController.js",
    "groupTitle": "Tasks",
    "name": "PutTasksId"
  }
] });
