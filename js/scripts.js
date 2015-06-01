$(document).ready(function() {
  $("#add-task").click(function() {
    $("#new-tasks").append('<div class="new-task">' +
                                 '<div class="form-group">' +
                                   '<label for="new-task">Task</label>' +
                                   '<input type="text" class="form-control new-task">' +
                                 '</div>');
  });
  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var listName = $("input#new-list-name").val();

    var newList = { name: listName, tasks: [] };

    $(".new-task").each(function() {
      var newTaskName = $(this).find("input.new-task-name").val();
      var newTask = { name: newTaskName };
      newList.tasks.push(newTask);
    });

    // debugger;

    $("ul#lists").append("<li><span class='list'>" + newList.name + "</span></li>");

// debugger;

    $(".list").last().click(function() {
      $("#show-list").show();
      $("show-list h2").text(newList.name);

      $("ul#tasks").text("");
      newList.tasks.forEach(function(task) {
        $("ul#tasks").append("<li>" + task.name + "</li>");
      });
    });
    $("input#new-list-name").val("");
    $("input.new-task-name").val("");
  })
});
