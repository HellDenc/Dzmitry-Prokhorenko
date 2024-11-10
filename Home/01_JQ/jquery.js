$(document).ready(function() {
    // Hide row button click
    $(".hideRowsButton").click(function() {
      $(this).closest("tr").hide();
      $("#showRowsButton").html("Показать скрытые строки")
    });
    
    // Show all rows button click
    $("#showRowsButton").click(function() {
      // Selects every hidden row of the table
      $("#myTable tr:hidden").show();
      $("#showRowsButton").html("Все строки показаны")
    });
  });